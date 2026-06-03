# Notion自动备份到GitHub仓库

Author: Joyce Fang
Created Date: 2025年11月24日 11:44
Created by: Joyce Fang
ID: 2
Slug: notion自动备份到github仓库-2b56e
Updated Date: 2026年1月16日 21:35

[](https://www.notion.so)

<aside>
💡

数据获取，参考：**Github Actions 自动备份 Notion 空间，[链接](https://zuolan.me/notion-backup)**

备份方案，参考：https://github.com/darobin/notion-backup/

</aside>

# 导出内容区分

区分导出work_space和导出单个page

## 导出WorkSpace

### 手动操作

侧边栏→工作空间→通用→导出→导出

## 导出Page

### 手动操作

右上角…→导出

## 工作空间ID

侧边栏→工作空间→通用→工作空间ID

# notion-backup方案分析、拓展

仓库https://github.com/darobin/notion-backup/

使用的API是：`https://www.notion.so/api/v3` ，非官方对外的，因此会经常变化。

该项目思路：调用了notion网页版的接口`enqueueTask` 和`getTasks`，这两个为导出文档接口。

获得导出链接。

# 导出方案

## 数据获取

`NOTION_SPACE_ID`：侧边栏→工作空间→通用→工作空间ID

`NOTION_USER_ID`：接口`https://www.notion.so/api/v3/queryCollection`内获取`user_id`

`NOTION_DATABASE_ID`：数据表

`NOTION_DATA_SOURCE_ID`：数据表

`NOTION_INTEGRATED_TOKEN`：集成的密钥，当前建议使用内部集成

`NOTION_TOKEN`：网页版任一接口，Cookies内的`token_v2`

`NOTION_FILE_TOKEN`：Chrome浏览器内，打开开发者工具，导航栏输入下载链接，Export内的Cookies的`file_token`

请求头变更为如下：

```jsx
client = axios.create({
      baseURL: notionAPI,
      headers: {
        Cookie: `token_v2=${NOTION_TOKEN}; file_token=${NOTION_FILE_TOKEN}`,
        'x-notion-active-user-header': `${NOTION_USER_ID}`,
        'x-notion-space-id': `${NOTION_SPACE_ID}`
      },
    })
```

## GitHub Actions 可以跨域调用Notion API解释

GitHub Actions 工作流本身不处理跨域，需根据场景适配：

1. **部署服务带跨域**：在 Serverless 函数 / 静态页面的服务代码中配置跨域头，工作流负责部署；
2. **工作流内请求 API**：直接请求，无跨域限制；
3. **静态页面预获取数据**：工作流构建时请求 API 生成静态数据，前端直接读取。

最常见的跨域需求（前端访问 API），优先通过**代理函数配置跨域头**或**工作流预生成数据**解决。

所以，`GitHub Actions` 内调用 `notion-backup`，能直接请求`https://www.notion.so/api/v3`接口

## 注意事项：不支持下载的page

以下不会被同步:

1、标题引用了非本空间内的Page，不同步

2、内容引用了非本空间内的Page，不同步

2、标题引用了本空间内的Page，不同步

3、内容引用了本空间内的Page，会生成对应链接，点击后直接跳转到文章。若文章是公共的，任何人都可以查看，否则不能查看

## Notion同步到GitHub仓库

### 同步工作空间

**思路[接口请求参数，看代码：分支develop_space_2]：**

- `enqueueTask` 获取任务id
- `getTasks` 生成任务
- `getNotificationLog` 消息通知，获取下载链接

注意，getNotificationLog与网页版接口返回有差别

```jsx
{
    "notificationIds": [
        "1c42083a-3304-46a8-bf67-2e679f9146c1"
    ],
    "discussionIdToExpansionStartPointMap": {},
    "recordMap": {
        "activity": {
            "1f4a8733-940c-8376-8bdd-0cb15a1d7a43": {
                "value": {
                    "id": "1f4a8733-940c-8376-8bdd-0cb15a1d7a43",
                    "version": 1,
                    "index": 0,
                    "type": "export-completed",
                    "parent_table": "space",
                    "parent_id": "***",
                    "start_time": "1766365572166",
                    "end_time": "1766365572166",
                    "invalid": false,
                    "space_id": "***",
                    "edits": [
                        {
                            "link": "https://file.notion.so/f/t/77c7459d-9d7f-481d-aac2-3fc441088a3f/Export-93a4e315-65aa-43d5-ae9c-3206cb8f70b1.zip?table=user_export&id=2d1d872b-594c-81ab-9f11-005d34e3c1b8&spaceId=&expirationTimestamp=1766970372152&signature=Am6cJCjJzpyXrSskqrVR1gcRbMyj8CXhHOv__d-LNtU&download=true&downloadName=77c7459d-9d7f-481d-aac2-3fc441088a3f%2FExport-93a4e315-65aa-43d5-ae9c-3206cb8f70b1.zip",
                            "type": "export-completed",
                            "space_id": "***",
                            "timestamp": 1766365572166
                        }
                    ],
                    "shard_id": 761967,
                    "context_id": "5bbd24a8-3381-464d-962f-3f9f06703d21"
                },
                "role": "reader"
            }
        },
        "space": {
            "***": {
                "value": {
                    "id": "***",
                    "version": 44,
                    "name": "DuoDuo'Family",
                    "icon": "👨\u200d👩\u200d👧",
                    "beta_enabled": false,
                    "pages": [
                        "213a8733-940c-8162-b9d9-fdcecd7cf370"
                    ],
                    "disable_public_access": false,
                    "disable_guests": false,
                    "disable_move_to_space": false,
                    "disable_export": false,
                    "created_time": 1691890470756,
                    "last_edited_time": 1754033446311,
                    "created_by_table": "notion_user",
                    "created_by_id": "***",
                    "last_edited_by_table": "notion_user",
                    "last_edited_by_id": "***",
                    "plan_type": "personal",
                    "invite_link_enabled": true,
                    "disable_space_page_edits": false,
                    "disable_public_access_requests": false,
                    "disable_team_creation": false,
                    "settings": {
                        "crdt_status": "migrating",
                        "grant_awards": [
                            {
                                "id": "ai.limitedQnaRefresh",
                                "feature": "ai",
                                "received_at": 1715131842611
                            }
                        ],
                        "is_teams_enabled": false,
                        "enable_ai_feature": true,
                        "space_survey_data": {
                            "intent": {
                                "value": "personal",
                                "version": 1,
                                "collected_at": 1691890474758,
                                "collected_from": "onboarding"
                            }
                        },
                        "disable_ai_feature": false,
                        "disable_team_guests": false,
                        "seen_referral_program": true,
                        "is_personal_home_enabled": true,
                        "first_invited_member_time": 1714446230069,
                        "disable_membership_requests": false,
                        "seen_guest_membership_requests": true,
                        "sharded_entitlement_usage_tables": true,
                        "ai_meeting_notes_free_credit_mins": 300,
                        "disable_guest_membership_requests": false,
                        "exposed_to_hide_block_limit_counter": true,
                        "ai_meeting_notes_free_credit_mins_v2": 300
                    },
                    "subscription_tier": "free",
                    "short_id": 45217977356,
                    "short_id_str": "45217977356"
                },
                "role": "editor"
            }
        },
        "notification": {
            "1c42083a-3304-46a8-bf67-2e679f9146c1": {
                "value": {
                    "id": "1c42083a-3304-46a8-bf67-2e679f9146c1",
                    "version": 2,
                    "user_id": "***",
                    "activity_id": "1f4a8733-940c-8376-8bdd-0cb15a1d7a43",
                    "received": true,
                    "read": true,
                    "emailed": false,
                    "invalid": false,
                    "visited": false,
                    "space_id": "***",
                    "end_time": "1766365572166",
                    "type": "export-completed",
                    "channel": "mentions"
                },
                "role": "editor"
            }
        }
    }
}
```

### 同步page

**思路[接口请求参数，看代码：分支develop]：**

- `enqueueTask` 获取任务id
- `getTasks` 生成任务

## 筛选published文章

**思路：**

- 获得所有文章page_id对于的发布状态
    - 调用`https://api.notion.com/v1/data_sources/${NOTION_DATA_SOURCE_ID}/query`查询接口
- 循环上述page_id，查找markdown对于的page_id，并移动到新的目录下

## 筛选后数据同步至指定公开GitHub仓库

- [ ]  待完成