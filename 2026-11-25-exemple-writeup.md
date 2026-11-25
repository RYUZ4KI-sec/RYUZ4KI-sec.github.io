---
title: "exemple — modèle de writeup à copier"
event: "Mon premier CTF"
category: Web
difficulty: easy
lang: fr
tags: [exemple, modele]
summary: "Une phrase qui résume la chaîne d'exploitation : point d'entrée, pivot, escalade. Flag : NCTF{…}."
---
Supprime ce fichier et copie-le pour chaque nouveau writeup. Le nom du fichier doit être `AAAA-MM-JJ-nom-du-challenge.md`.

## Contexte

Nom du challenge, catégorie, ce que l'énoncé donne (URL, fichier, identifiants).

## Reconnaissance

Ce que tu observes, les commandes lancées et ce qu'elles montrent.

```bash
nmap -sC -sV -p- 10.10.10.10
```

## Exploitation

La chaîne complète, étape par étape, pour que quelqu'un puisse la rejouer.

## Cause racine

Pourquoi la vulnérabilité existe.

## Correctif

Le changement de code ou de configuration qui la supprime.

## Flag

`NCTF{abcd…}` (tronqué jusqu'à la fin de l'événement)
