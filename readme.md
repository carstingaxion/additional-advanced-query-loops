# Contextual Query Loop

## Description

Query loop block-extension to create custom queries based on the post- or template-context. Works with every `core/query` or any of its variations.

https://github.com/carstingaxion/additional-advanced-query-loops/assets/198883/0f077ac4-06ff-44e2-81c9-a92b02b3cff1

> Dear [#WordPress](https://github.com/topics/wordpress) flat mates, where did we put our contextual query block?
>
>You know. The block, that is capable to query posts based on the context it is placed in. This better, related posts query block variation that can show posts by the current author, a given taxonomy or the current post_parent. The one, that doesn’t need any ID, but the object-field to contextualize for any of the query block controls and its attributes.
>
>Please! Where did we put it?
>[Or do I really have to create a new one?](https://dewp.space/@carstingaxion/112348844278058426)

This block helps while templating in FSE, because it inherits some settings from the currently viewed template or surounding block, without the need to *hard code* the attributes of the query block.

This should help query posts by:

- [x] the same author, as the context post.
   - [x] :bulb: exclude the current context-author
- [x] the same term(s), as the current archive or context post.
- [x] the [same day before](https://indieweb.social/@janboddez/112485691901272067) ... 1 week, 1 month, n year :bulb: Idea from [@janboddez](https://github.com/janboddez)
- [ ] the same post parent.
- [ ] a shadow-taxonomy.

---

**Credits to @ryanwelcher** for everything below and 97% of the code within this project.
