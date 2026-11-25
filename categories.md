---
layout: default
title: Catégories
permalink: /categories/
---
<section class="intro"><h1>Catégories</h1></section>
{% assign cats = site.posts | group_by: "category" | sort: "name" %}
{% for c in cats %}
<section class="event-group"><h2 class="event-title">{{ c.name }}<span class="event-count">{{ c.size }}</span></h2>
<ul class="plain-list">{% for p in c.items %}<li><a href="{{ p.url | relative_url }}">{{ p.title }}</a> <span class="diff diff-{{ p.difficulty }}">{{ p.difficulty }}</span></li>{% endfor %}</ul></section>
{% endfor %}
