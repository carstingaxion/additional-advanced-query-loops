# Contextual Query Loop


Query loop block-extension to create custom queries based on the post- or template-context. Works with every `core/query` or any of its variations.

https://github.com/carstingaxion/additional-advanced-query-loops/assets/198883/0f077ac4-06ff-44e2-81c9-a92b02b3cff1

> Dear [#WordPress](https://github.com/topics/wordpress) flat mates, where did we put our contextual query block?
>
>You know. The block, that is capable to query posts based on the context it is placed in. This better, related posts query block variation that can show posts by the current author, a given taxonomy or the current post_parent. The one, that doesn’t need any ID, but the object-field to contextualize for any of the query block controls and its attributes.
>
>Please! Where did we put it?
>[Or do I really have to create a new one?](https://dewp.space/@carstingaxion/112348844278058426)

## Overview

The **Contextual Query Loops** filters enhance the default Query Loop block by allowing it to automatically inherit context from the current post, archive, or surrounding template. It enables developers to create more flexible queries directly within Full Site Editing.

Instead of manually defining query parameters, this block uses the *current context* (e.g. post, taxonomy, author, date) to generate relevant results dynamically.

- Query posts by the **same author**
- Query posts with the **same taxonomy terms** (categories, tags, custom taxonomies)
- Query posts by **relative or exact dates**
- Works seamlessly inside **Full Site Editing (FSE)** templates
- Extends the native Query Loop block

## Supported Contextual Queries

This extension allows you to query posts based on:

### Author
- Posts by the **same author**
- Include or exclude the current author

### Taxonomy
- Posts sharing:
  - Some matching terms
  - All matching terms
- Include or exclude:
  - Categories
  - Tags
  - Custom taxonomies

### Date
- Exact matches:
  - Same day
  - Same month
  - Same year
- Relative queries:
  - Before / after current date
  - Same day last month/year
  - Custom ranges (e.g. 1 week, 1 month, n years)

## Example Use Cases

The plugin supports combinations like:

- `IN` same author  
- `IN` same author & different post type  
- `NOT IN` same author  
- Some `IN` same tags  
- All `IN` same tags  
- `NOT IN` same category  
- `IN` same category & `NOT IN` same tags  
- Exact same date  
- Before same year  
- After same month  
- Exact same day last month  
- Exact same day last year  

## Installation

1. Upload the plugin to your `/wp-content/plugins/` directory  
2. Activate the plugin through the WordPress admin  
3. Open the Site Editor (Appearance → Editor)  
4. Add a Query Loop block and select the **Contextual Filters**  

## Usage

1. Insert a Query Loop block  
2. Open the **Contextual Filters**  
3. Configure query parameters using contextual options (author, taxonomy, date, etc.)  

## Contributing

Contributions, ideas, and feedback are welcome!  
Feel free to open issues or submit pull requests.

## License

GPL-2.0-or-later
