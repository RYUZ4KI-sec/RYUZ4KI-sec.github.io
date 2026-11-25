---
layout: default
title: Archive
permalink: /archive/
---
<section class="intro"><h1>Archive</h1></section>
{% assign years = site.posts | group_by_exp: "p", "p.date | date: '%Y'" %}
{% for y in years %}
<section class="event-group"><h2 class="event-title">{{ y.name }}<span class="event-count">{{ y.size }}</span></h2>
<ul class="plain-list">{% for p in y.items %}<li><time>{{ p.date | date: "%d/%m" }}</time> <a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{% endfor %}</ul></section>
{% endfor %}
