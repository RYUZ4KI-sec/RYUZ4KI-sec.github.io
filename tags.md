---
layout: default
title: Tags
permalink: /tags/
---
<section class="intro"><h1>Tags</h1></section>
{% assign tags = site.tags | sort %}
{% for t in tags %}
<section class="event-group"><h2 class="event-title">{{ t[0] }}<span class="event-count">{{ t[1].size }}</span></h2>
<ul class="plain-list">{% for p in t[1] %}<li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{% endfor %}</ul></section>
{% endfor %}
