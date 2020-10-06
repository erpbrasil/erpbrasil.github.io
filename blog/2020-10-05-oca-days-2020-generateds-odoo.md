---
slug: auto-import-export-xml-generateds
title: Odoo models XML import/export using generateDS to generate bindings from arbitrary XSD schemas
author: Raphaël Valyi
author_title: CEO @ Akretion
author_url: https://github.com/rvalyi
author_image_url: https://avatars0.githubusercontent.com/u/16926?s=400
tags: [erp, generateds, odoo, python, xml]
---

In this talk I will show you how you can generate Odoo mixins from an arbitrary XSD grammar and I will be using UBL (Universal Business Language) as an example. You can then inject these mixins into existing Odoo models and get them import from XML and export as XML enforcing the grammar.

In many countries, electronic invoicing can be done with 10 extra invoice fields and hand written XML serialization code. But that was not possible in Brazil where only our electronic invoicing schema is 8000 lines long and we have other such very complex fiscal documents... From my Java expertise and XML courses, I knew we could do better than manually coding kilometers of XML serialization code and having to maintain it later. I hacked generateDS quite deeply, got my patches accepted and created an Odoo plugin inspired from the Django model generator.

Today it is in production in OCA/l10n-brazil and literally saved us hundreds of thousands lines of code, making our localization sustainable as an open source model. But the OCA modules were done in a very generic manner and it may help you to get Odoo talk with your own specific XSD grammar. This can also be used for the Unified Business Language (UBL) for instance.

In this talk I will show you how you can generate Odoo mixins from an arbitrary XSD gramar. You can then inject these mixins into existing Odoo models and get them import from XML and export as XML enforcing the gramar.

In many countries, electronic invoicing can be done with 10 extra invoice fields and hand written XML serialization code. But that was not possible in Brazil where only our electronic invoicing schema is 8000 lines long and we have other such very complex fiscal documents...

From my Java expertise and XML courses, I knew we could do better than manually coding kilometers of XML serialization code and having to maintain it later. I hacked generateDS quite deeply, got my patches accepted and created an Odoo plugin inspired from the Django model generator.

Today it is is production in OCA/l10n-brazil and literally saved us hundreds of thousands lines of code, making our localization sustainable as an open source model. But the OCA modules where done in a very generic manner and it may help you to get Odoo talk with your own specific XSD gramar. This could also be used for the Unified Business Language (UBL) for instance.

About the Speaker
Raphaël Valyi is a MS degree engineer from the Ecole Centrale de Lyon. He started his first open source project in 2003, started working with Odoo in 2007 at Smile. He then founded Akretion in Sao Paulo Brazil in 2009 who was later extended to France and is one of the OCA founder and main contributor.

https://odoo-community.org/event/oca-days-2020-online-training-and-learning-event-2020-10-15-2020-10-16-121/track/odoo-models-xml-import-export-using-generateds-to-generate-bindings-from-arbitrary-xsd-schemas-47
