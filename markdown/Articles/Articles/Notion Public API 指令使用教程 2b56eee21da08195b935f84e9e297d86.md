# Notion Public API 指令使用教程

Status: Scheduled
Author: Joyce Fang
Created Date: 2025年11月24日 11:44
Created by: Joyce Fang
ID: 1
Slug: notion-public-api-指令使用教程-2b56e
Updated Date: 2026年2月28日 09:46

[](https://www.notion.so)

- [ ]  将内部集成秘钥全都隐藏，才可以发布

# Notion集成

notion集成开发和管理https://www.notion.so/profile/integrations

内部集成：ntn_开头

公共集成：secret_开头

**内部集成：测试**

仅适用于Joyce Blog工作空间

测试_密钥：YOUR_NOTION_API_TOKEN

# Notion API

版本：**2025-09-03**

API：https://api.notion.com/v1/

文档：https://developers.notion.com/reference/intro

# 案例

## search，获取当前集合所有的Page

```bash
curl https://api.notion.com/v1/search \
  -H "Authorization: Bearer YOUR_NOTION_API_TOKEN" \
  -H "Notion-Version: 2025-09-03" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "property": "object",
      "value": "page"
    }
  }'
```

## search，获取当前集合所有的database

```bash
curl https://api.notion.com/v1/search \
  -H "Authorization: Bearer YOUR_NOTION_API_TOKEN" \
  -H "Notion-Version: 2025-09-03" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "property": "object",
      "value": "data_source"
    }
  }'
```

## search，获取当前集合所有的数据，包括database和page

```bash
curl https://api.notion.com/v1/search \
  -H "Authorization: Bearer YOUR_NOTION_API_TOKEN" \
  -H "Notion-Version: 2025-09-03" \
  -H "Content-Type: application/json" \
  -d '{
  }'
```

## 根据PageId查询page信息

```bash
curl https://api.notion.com/v1/pages/2b06eee2-1da0-803a-b59b-cbb61b4d73b5 \
  -H "Authorization: Bearer YOUR_NOTION_API_TOKEN" \
  -H "Notion-Version: 2025-09-03"
```

## 获取用户信息

```bash
curl [https://api.notion.com/v1/users](https://api.notion.com/v1/users) \
-H "Authorization: Bearer YOUR_NOTION_API_TOKEN" \
-H "Notion-Version: 2025-09-03"
```

## 获取database数据

**注意：**data_base_id不在链接上，获取方法如下：

- public接口，search所有database

`https://api.notion.com/v1/search`

- 可以查看网页接口的入参，source.id

`https://www.notion.so/api/v3/queryCollection?src=initial_load`

```jsx
curl -X POST 'https://api.notion.com/v1/data_sources/2b56eee2-1da0-8154-af98-000bdb8c7e7c/query' \
  -H 'Authorization: Bearer YOUR_NOTION_API_TOKEN' \
  -H 'Notion-Version: 2025-09-03' \
  -H "Content-Type: application/json"
```

## 获取database数据，筛选status=published的数据

```jsx
curl -X POST 'https://api.notion.com/v1/data_sources/2b56eee2-1da0-8154-af98-000bdb8c7e7c/query' \
  -H 'Authorization: Bearer YOUR_NOTION_API_TOKEN' \
  -H 'Notion-Version: 2025-09-03' \
  -H "Content-Type: application/json" \
--data '{
  "filter": {
    "or": [
      {
        "property": "Status",
        "select": {
          "equals": "Published"
        }
      }
    ]
  }
}'
```