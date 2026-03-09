# Week 3 – Schema-Driven Content Management System

## 1. What is a Schema?

A schema is a blueprint that defines the structure of data in a system.

It describes:
- What fields exist
- What type of data each field contains (text, number, date, boolean, etc.)
- Which fields are required
- Additional rules (read-only, max length, default values)

In this project, the schema is stored in:

config/schemas/blog-post.json

Example:

{
  "schemaName": "blogPost",
  "fields": [
    { "name": "title", "type": "text", "required": true },
    { "name": "author", "type": "text", "required": true }
  ]
}

The schema allows the UI to be generated dynamically without hardcoding fields.

---

## 2. How the DataCard Component Works

The DataCard component is a reusable JavaScript class that displays data based on a schema.

File:
components/card.js

How it works:

1. It receives:
   - A schema (structure definition)
   - A data object (actual content)

2. It loops through the schema fields.
3. For each field (except ID), it:
   - Gets the value from the data
   - Formats it based on type (date, boolean, etc.)
   - Displays it inside a card layout

4. It automatically generates Edit and Delete buttons.

This makes the card reusable for:
- Blog posts
- Products
- Users
- Any other schema

The UI adapts automatically based on the schema.

---

## 3. How the DataForm Component Works

The DataForm component dynamically generates forms using the schema.

File:
components/form.js

How it works:

1. It reads the schema fields.
2. For each field (except read-only fields), it:
   - Creates the appropriate input type:
     - text → input
     - textarea → textarea
     - date → date input
     - boolean → checkbox
3. It marks required fields.
4. On submission, it collects form data and converts it into an object.

This allows:
- Creating new items
- Editing existing items

The form structure automatically changes if the schema changes.

---

## 4. Folder Structure

project/
│
├── config/
│   └── schemas/
│       └── blog-post.json
│
├── components/
│   ├── card.js
│   └── form.js
│
├── frontend/
│   ├── blog.html
│   ├── data/
│   │   └── blog-posts.json
│   └── styles/
│       └── cards.css
│
└── docs/
    └── week3/
        └── schema-system.md

This structure separates:
- Configuration (schemas)
- UI components
- Data
- Documentation

---

## 5. What I Learned

During Week 3, I learned:

- What CRUD operations mean (Create, Read, Update, Delete)
- How schemas define data structure
- How to build reusable UI components
- How to dynamically generate HTML using JavaScript
- How separating configuration from UI makes systems flexible
- How real-world applications use schema-driven architecture

This week introduced real software architecture concepts used in production systems such as CMS platforms and admin dashboards.

---

## Conclusion

The schema-driven system allows the application to be flexible and scalable.

Instead of hardcoding forms and display layouts, the system reads configuration files and generates UI automatically.

This approach improves:
- Reusability
- Maintainability
- Scalability
- Code organization
