if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.83da33b8.js",revision:null},{url:"assets/404.md.83da33b8.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.38944863.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.38944863.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ac99d538.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ac99d538.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.38cd41c6.js",revision:null},{url:"assets/animation-controllers_death-commands.md.38cd41c6.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.f1461c4c.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.f1461c4c.lean.js",revision:null},{url:"assets/animation-controllers_index.md.52a82aa5.js",revision:null},{url:"assets/animation-controllers_index.md.52a82aa5.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.e9e61fc3.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.e9e61fc3.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.688f46a9.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.688f46a9.lean.js",revision:null},{url:"assets/app.9bf8f8bb.js",revision:null},{url:"assets/blocks_applying-effects.md.b3eb03ff.js",revision:null},{url:"assets/blocks_applying-effects.md.b3eb03ff.lean.js",revision:null},{url:"assets/blocks_block-materials.md.f76bbff5.js",revision:null},{url:"assets/blocks_block-materials.md.f76bbff5.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.893952b2.js",revision:null},{url:"assets/blocks_block-shapes.md.893952b2.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.1ce774ee.js",revision:null},{url:"assets/blocks_block-sounds.md.1ce774ee.lean.js",revision:null},{url:"assets/blocks_block-tags.md.66eb2913.js",revision:null},{url:"assets/blocks_block-tags.md.66eb2913.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.893e750d.js",revision:null},{url:"assets/blocks_block-texture-variation.md.893e750d.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.b23a84d4.js",revision:null},{url:"assets/blocks_blocks-16.md.b23a84d4.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.4e892c7b.js",revision:null},{url:"assets/blocks_blocks-intro.md.4e892c7b.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.876eea5f.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.876eea5f.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.f2732398.js",revision:null},{url:"assets/blocks_custom-tree.md.f2732398.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.c2182bc9.js",revision:null},{url:"assets/blocks_fake-blocks.md.c2182bc9.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.c42102c1.js",revision:null},{url:"assets/blocks_flipbook-textures.md.c42102c1.lean.js",revision:null},{url:"assets/blocks_index.md.06a29b1b.js",revision:null},{url:"assets/blocks_index.md.06a29b1b.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0682c2ca.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0682c2ca.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a872dc5b.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a872dc5b.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.a8ee8609.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.a8ee8609.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.f87106ef.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.f87106ef.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.229715da.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.5e2bbe40.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_index.md.34b4e2bb.js",revision:null},{url:"assets/commands_index.md.34b4e2bb.lean.js",revision:null},{url:"assets/commands_mcfunction.md.13dd61b7.js",revision:null},{url:"assets/commands_mcfunction.md.13dd61b7.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.cfeced99.js",revision:null},{url:"assets/commands_nbt-commands.md.cfeced99.lean.js",revision:null},{url:"assets/commands_new-execute.md.0053e272.js",revision:null},{url:"assets/commands_new-execute.md.0053e272.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.a51f68e3.js",revision:null},{url:"assets/commands_relative-coordinates.md.a51f68e3.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.d6b2a3a0.js",revision:null},{url:"assets/commands_scoreboard-operations.md.d6b2a3a0.lean.js",revision:null},{url:"assets/commands_selectors.md.37599901.js",revision:null},{url:"assets/commands_selectors.md.37599901.lean.js",revision:null},{url:"assets/commands_tellraw.md.a6f5a043.js",revision:null},{url:"assets/commands_tellraw.md.a6f5a043.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.ecea4b29.js",revision:null},{url:"assets/commands_tick_json-creations.md.ecea4b29.lean.js",revision:null},{url:"assets/commands_timers.md.78871927.js",revision:null},{url:"assets/commands_timers.md.78871927.lean.js",revision:null},{url:"assets/concepts_contents.md.b0283cd5.js",revision:null},{url:"assets/concepts_contents.md.b0283cd5.lean.js",revision:null},{url:"assets/concepts_emojis.md.7060953d.js",revision:null},{url:"assets/concepts_emojis.md.7060953d.lean.js",revision:null},{url:"assets/concepts_index.md.27f61d4c.js",revision:null},{url:"assets/concepts_index.md.27f61d4c.lean.js",revision:null},{url:"assets/concepts_molang.md.cd2a85e6.js",revision:null},{url:"assets/concepts_molang.md.cd2a85e6.lean.js",revision:null},{url:"assets/concepts_namespaces.md.271e2dcb.js",revision:null},{url:"assets/concepts_namespaces.md.271e2dcb.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.0fef1573.js",revision:null},{url:"assets/concepts_overwriting-assets.md.0fef1573.lean.js",revision:null},{url:"assets/concepts_shaders.md.c6aecdd1.js",revision:null},{url:"assets/concepts_shaders.md.c6aecdd1.lean.js",revision:null},{url:"assets/concepts_sounds.md.525fa631.js",revision:null},{url:"assets/concepts_sounds.md.525fa631.lean.js",revision:null},{url:"assets/concepts_subpacks.md.dd5ade22.js",revision:null},{url:"assets/concepts_subpacks.md.dd5ade22.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.d42915e3.js",revision:null},{url:"assets/concepts_text-and-translations.md.d42915e3.lean.js",revision:null},{url:"assets/concepts_textures-list.md.40cf3bea.js",revision:null},{url:"assets/concepts_textures-list.md.40cf3bea.lean.js",revision:null},{url:"assets/contribute-how-to.md.42423bce.js",revision:null},{url:"assets/contribute-how-to.md.42423bce.lean.js",revision:null},{url:"assets/contribute-style.md.33f22206.js",revision:null},{url:"assets/contribute-style.md.33f22206.lean.js",revision:null},{url:"assets/contribute.md.f220a120.js",revision:null},{url:"assets/contribute.md.f220a120.lean.js",revision:null},{url:"assets/discord.md.e8bdea1d.js",revision:null},{url:"assets/discord.md.e8bdea1d.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.b7909470.js",revision:null},{url:"assets/documentation_advanced-molang.md.b7909470.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.2d614058.js",revision:null},{url:"assets/documentation_creative-categories.md.2d614058.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.2ac88adf.js",revision:null},{url:"assets/documentation_fog-ids.md.2ac88adf.lean.js",revision:null},{url:"assets/documentation_index.md.1e10838e.js",revision:null},{url:"assets/documentation_index.md.1e10838e.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.fd5cf493.js",revision:null},{url:"assets/documentation_material-config-description.md.fd5cf493.lean.js",revision:null},{url:"assets/documentation_materials.md.1a3dcce6.js",revision:null},{url:"assets/documentation_materials.md.1a3dcce6.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.fed0f141.js",revision:null},{url:"assets/documentation_pack-structure.md.fed0f141.lean.js",revision:null},{url:"assets/documentation_projectiles.md.8cc815a1.js",revision:null},{url:"assets/documentation_projectiles.md.8cc815a1.lean.js",revision:null},{url:"assets/documentation_queries.md.993429a6.js",revision:null},{url:"assets/documentation_queries.md.993429a6.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.9ad45715.js",revision:null},{url:"assets/documentation_shared-constructs.md.9ad45715.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.b4bb4dc7.js",revision:null},{url:"assets/documentation_sound-definitions.md.b4bb4dc7.lean.js",revision:null},{url:"assets/entities_boat-entities.md.da686a36.js",revision:null},{url:"assets/entities_boat-entities.md.da686a36.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.aa7e7f51.js",revision:null},{url:"assets/entities_detecting-other-entities.md.aa7e7f51.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.11aa415a.js",revision:null},{url:"assets/entities_disabling-team-damage.md.11aa415a.lean.js",revision:null},{url:"assets/entities_dummy-components.md.496aecca.js",revision:null},{url:"assets/entities_dummy-components.md.496aecca.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.d0a2dde6.js",revision:null},{url:"assets/entities_dummy-entities.md.d0a2dde6.lean.js",revision:null},{url:"assets/entities_entity-attack.md.f5c02b4d.js",revision:null},{url:"assets/entities_entity-attack.md.f5c02b4d.lean.js",revision:null},{url:"assets/entities_entity-events.md.8c1fe021.js",revision:null},{url:"assets/entities_entity-events.md.8c1fe021.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.669a10f5.js",revision:null},{url:"assets/entities_entity-holds-item.md.669a10f5.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.b990fc2a.js",revision:null},{url:"assets/entities_entity-intro-bp.md.b990fc2a.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.fe61eace.js",revision:null},{url:"assets/entities_entity-intro-rp.md.fe61eace.lean.js",revision:null},{url:"assets/entities_entity-movement.md.b97fd04f.js",revision:null},{url:"assets/entities_entity-movement.md.b97fd04f.lean.js",revision:null},{url:"assets/entities_entity-properties.md.1ec6c03a.js",revision:null},{url:"assets/entities_entity-properties.md.1ec6c03a.lean.js",revision:null},{url:"assets/entities_flying-entities.md.9241fd91.js",revision:null},{url:"assets/entities_flying-entities.md.9241fd91.lean.js",revision:null},{url:"assets/entities_index.md.b0cbcc64.js",revision:null},{url:"assets/entities_index.md.b0cbcc64.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.39cc95a8.js",revision:null},{url:"assets/entities_introduction-to-aec.md.39cc95a8.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.198ecb61.js",revision:null},{url:"assets/entities_invulnerable-entities.md.198ecb61.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.72a95f97.js",revision:null},{url:"assets/entities_look-at-entity.md.72a95f97.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c09730b5.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c09730b5.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.c2978d71.js",revision:null},{url:"assets/entities_npc-dialogs.md.c2978d71.lean.js",revision:null},{url:"assets/entities_render-controllers.md.06d64880.js",revision:null},{url:"assets/entities_render-controllers.md.06d64880.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.9f272fae.js",revision:null},{url:"assets/entities_runtime-identifier.md.9f272fae.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.8455b109.js",revision:null},{url:"assets/entities_sleeping-entities.md.8455b109.lean.js",revision:null},{url:"assets/entities_solid-entities.md.efd3edb8.js",revision:null},{url:"assets/entities_solid-entities.md.efd3edb8.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.ae2e23eb.js",revision:null},{url:"assets/entities_spawn-rules.md.ae2e23eb.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.36f473f6.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.36f473f6.lean.js",revision:null},{url:"assets/entities_timers.md.30a92023.js",revision:null},{url:"assets/entities_timers.md.30a92023.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.3a2da33b.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.3a2da33b.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.49edfc18.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.49edfc18.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.e1295350.js",revision:null},{url:"assets/entities_village-mechanic.md.e1295350.lean.js",revision:null},{url:"assets/entities_vuc-full.md.8741ba4e.lean.js",revision:null},{url:"assets/entities_vusr-full.md.2cc66912.js",revision:null},{url:"assets/entities_vusr-full.md.2cc66912.lean.js",revision:null},{url:"assets/graph-test.md.d9fb1efc.js",revision:null},{url:"assets/graph-test.md.d9fb1efc.lean.js",revision:null},{url:"assets/guide_addons.md.0e040365.js",revision:null},{url:"assets/guide_addons.md.0e040365.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.010a4375.js",revision:null},{url:"assets/guide_advancedmanifest.md.010a4375.lean.js",revision:null},{url:"assets/guide_blockbench.md.5d07dc6a.js",revision:null},{url:"assets/guide_blockbench.md.5d07dc6a.lean.js",revision:null},{url:"assets/guide_custom-entity.md.3b4d45cd.js",revision:null},{url:"assets/guide_custom-entity.md.3b4d45cd.lean.js",revision:null},{url:"assets/guide_custom-item.md.01c24c41.js",revision:null},{url:"assets/guide_custom-item.md.01c24c41.lean.js",revision:null},{url:"assets/guide_download-packs.md.3478daa6.js",revision:null},{url:"assets/guide_download-packs.md.3478daa6.lean.js",revision:null},{url:"assets/guide_format-version.md.0170de1d.js",revision:null},{url:"assets/guide_format-version.md.0170de1d.lean.js",revision:null},{url:"assets/guide_index.md.a5d70770.js",revision:null},{url:"assets/guide_index.md.a5d70770.lean.js",revision:null},{url:"assets/guide_introduction.md.31f08692.js",revision:null},{url:"assets/guide_introduction.md.31f08692.lean.js",revision:null},{url:"assets/guide_loot-table.md.ea7f4b76.js",revision:null},{url:"assets/guide_loot-table.md.ea7f4b76.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.9d2c49d5.js",revision:null},{url:"assets/guide_project-setup-android.md.9d2c49d5.lean.js",revision:null},{url:"assets/guide_project-setup.md.b1e4056f.js",revision:null},{url:"assets/guide_project-setup.md.b1e4056f.lean.js",revision:null},{url:"assets/guide_software-preparation.md.50ee113f.js",revision:null},{url:"assets/guide_software-preparation.md.50ee113f.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.ed60128b.js",revision:null},{url:"assets/guide_troubleshooting.md.ed60128b.lean.js",revision:null},{url:"assets/guide_understanding-json.md.5899363c.js",revision:null},{url:"assets/guide_understanding-json.md.5899363c.lean.js",revision:null},{url:"assets/hacktoberfest.md.fb15f0b4.js",revision:null},{url:"assets/hacktoberfest.md.fb15f0b4.lean.js",revision:null},{url:"assets/index.md.2e4ecf9d.js",revision:null},{url:"assets/index.md.2e4ecf9d.lean.js",revision:null},{url:"assets/items_attachables.md.469be32d.js",revision:null},{url:"assets/items_attachables.md.469be32d.lean.js",revision:null},{url:"assets/items_custom-armor.md.c93a86d7.js",revision:null},{url:"assets/items_custom-armor.md.c93a86d7.lean.js",revision:null},{url:"assets/items_custom-weapon.md.51592c48.js",revision:null},{url:"assets/items_custom-weapon.md.51592c48.lean.js",revision:null},{url:"assets/items_enchantments.md.e3c9994b.js",revision:null},{url:"assets/items_enchantments.md.e3c9994b.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.e5ee7f2e.js",revision:null},{url:"assets/items_equipped-item-commands.md.e5ee7f2e.lean.js",revision:null},{url:"assets/items_index.md.cd11b802.js",revision:null},{url:"assets/items_index.md.cd11b802.lean.js",revision:null},{url:"assets/items_item-identifiers.md.1642051c.js",revision:null},{url:"assets/items_item-identifiers.md.1642051c.lean.js",revision:null},{url:"assets/items_items-16.md.8629e989.js",revision:null},{url:"assets/items_items-16.md.8629e989.lean.js",revision:null},{url:"assets/items_items-intro.md.b1d5cc94.js",revision:null},{url:"assets/items_items-intro.md.b1d5cc94.lean.js",revision:null},{url:"assets/items_spawning-items.md.81e47ed9.js",revision:null},{url:"assets/items_spawning-items.md.81e47ed9.lean.js",revision:null},{url:"assets/items_spear.md.71d00c7a.js",revision:null},{url:"assets/items_spear.md.71d00c7a.lean.js",revision:null},{url:"assets/items_throwable.md.36d1e89b.js",revision:null},{url:"assets/items_throwable.md.36d1e89b.lean.js",revision:null},{url:"assets/items_tool-durability.md.9f5648bc.js",revision:null},{url:"assets/items_tool-durability.md.9f5648bc.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.01593840.js",revision:null},{url:"assets/items_troubleshooting-items.md.01593840.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.eb221788.js",revision:null},{url:"assets/items_vanilla-usage-items.md.eb221788.lean.js",revision:null},{url:"assets/items_vui-full.md.f3a3ad3c.js",revision:null},{url:"assets/items_vui-full.md.f3a3ad3c.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.14b4279f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.14b4279f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.76419a9d.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.76419a9d.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.ae4357a7.js",revision:null},{url:"assets/json-ui_best-practices.md.ae4357a7.lean.js",revision:null},{url:"assets/json-ui_index.md.820e4213.js",revision:null},{url:"assets/json-ui_index.md.820e4213.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2eed2761.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2eed2761.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.2f5556ec.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.2f5556ec.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b8a44259.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b8a44259.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.e2e845dd.js",revision:null},{url:"assets/json-ui_string-to-number.md.e2e845dd.lean.js",revision:null},{url:"assets/loot_index.md.021d36e7.js",revision:null},{url:"assets/loot_index.md.021d36e7.lean.js",revision:null},{url:"assets/loot_item-functions.md.c7e58f31.js",revision:null},{url:"assets/loot_item-functions.md.c7e58f31.lean.js",revision:null},{url:"assets/loot_loot-tables.md.3eb8c235.js",revision:null},{url:"assets/loot_loot-tables.md.3eb8c235.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.d8527ca1.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.d8527ca1.lean.js",revision:null},{url:"assets/loot_recipes.md.4f19a156.js",revision:null},{url:"assets/loot_recipes.md.4f19a156.lean.js",revision:null},{url:"assets/loot_trade-tables.md.ad61b216.js",revision:null},{url:"assets/loot_trade-tables.md.ad61b216.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.7010b7e4.js",revision:null},{url:"assets/loot_trading-behavior.md.7010b7e4.lean.js",revision:null},{url:"assets/meta_addon-performance.md.c7a80301.js",revision:null},{url:"assets/meta_addon-performance.md.c7a80301.lean.js",revision:null},{url:"assets/meta_index.md.2ab3048a.js",revision:null},{url:"assets/meta_index.md.2ab3048a.lean.js",revision:null},{url:"assets/meta_jq.md.06b185f7.js",revision:null},{url:"assets/meta_jq.md.06b185f7.lean.js",revision:null},{url:"assets/meta_style-guide.md.0f7474c0.js",revision:null},{url:"assets/meta_style-guide.md.0f7474c0.lean.js",revision:null},{url:"assets/meta_useful-links.md.23e1eb57.js",revision:null},{url:"assets/meta_useful-links.md.23e1eb57.lean.js",revision:null},{url:"assets/meta_using-schemas.md.0f04eb02.js",revision:null},{url:"assets/meta_using-schemas.md.0f04eb02.lean.js",revision:null},{url:"assets/meta_version-control.md.ead8900c.js",revision:null},{url:"assets/meta_version-control.md.ead8900c.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.3bb074d3.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.3bb074d3.lean.js",revision:null},{url:"assets/nbt_index.md.86f84152.js",revision:null},{url:"assets/nbt_index.md.86f84152.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.23d77b5f.js",revision:null},{url:"assets/nbt_mcstructure.md.23d77b5f.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.5fb77bf7.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.5fb77bf7.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.f5d4786a.js",revision:null},{url:"assets/nbt_step-by-step-example.md.f5d4786a.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.3eaafed5.js",revision:null},{url:"assets/nbt_structure-limits.md.3eaafed5.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.bcadda0e.js",revision:null},{url:"assets/particles_disabling-particles.md.bcadda0e.lean.js",revision:null},{url:"assets/particles_index.md.0314ed53.js",revision:null},{url:"assets/particles_index.md.0314ed53.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.525b6529.js",revision:null},{url:"assets/particles_particles-and-sounds.md.525b6529.lean.js",revision:null},{url:"assets/particles_particles.md.4edb778f.js",revision:null},{url:"assets/particles_particles.md.4edb778f.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.76215e06.js",revision:null},{url:"assets/particles_vanilla-particles.md.76215e06.lean.js",revision:null},{url:"assets/privacy.md.3108e974.js",revision:null},{url:"assets/privacy.md.3108e974.lean.js",revision:null},{url:"assets/scripting_api-environment.md.9aa4db9e.js",revision:null},{url:"assets/scripting_api-environment.md.9aa4db9e.lean.js",revision:null},{url:"assets/scripting_custom-command.md.8c3decb2.js",revision:null},{url:"assets/scripting_custom-command.md.8c3decb2.lean.js",revision:null},{url:"assets/scripting_game-tests.md.5dd9c0e7.js",revision:null},{url:"assets/scripting_game-tests.md.5dd9c0e7.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.45af1562.js",revision:null},{url:"assets/scripting_gametest-form.md.45af1562.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.b48c500b.js",revision:null},{url:"assets/scripting_gametest-qna.md.b48c500b.lean.js",revision:null},{url:"assets/scripting_index.md.669a971f.js",revision:null},{url:"assets/scripting_index.md.669a971f.lean.js",revision:null},{url:"assets/scripting_resources.md.eb7c9487.js",revision:null},{url:"assets/scripting_resources.md.eb7c9487.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.b7b4920d.js",revision:null},{url:"assets/scripting_saving-loading.md.b7b4920d.lean.js",revision:null},{url:"assets/scripting_script-net.md.eb12a3a8.js",revision:null},{url:"assets/scripting_script-net.md.eb12a3a8.lean.js",revision:null},{url:"assets/scripting_script-server.md.77488a4a.js",revision:null},{url:"assets/scripting_script-server.md.77488a4a.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.8a05f943.js",revision:null},{url:"assets/scripting_script-watchdog.md.8a05f943.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.72c69611.js",revision:null},{url:"assets/scripting_scripting-intro.md.72c69611.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.e67922b8.js",revision:null},{url:"assets/scripting_starting-scripts.md.e67922b8.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.7e2096aa.js",revision:null},{url:"assets/scripting_troubleshooting.md.7e2096aa.lean.js",revision:null},{url:"assets/scripting_typescript.md.cc2a60df.js",revision:null},{url:"assets/scripting_typescript.md.cc2a60df.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.930f89d8.js",revision:null},{url:"assets/scripting_what-is-script.md.930f89d8.lean.js",revision:null},{url:"assets/servers_index.md.75b7194d.js",revision:null},{url:"assets/servers_index.md.75b7194d.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.6f124fa3.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.6f124fa3.lean.js",revision:null},{url:"assets/servers_server-software.md.562fd492.js",revision:null},{url:"assets/servers_server-software.md.562fd492.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.26fee77e.js",revision:null},{url:"assets/test.md.26fee77e.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.d389e9c5.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.d389e9c5.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.3453dc34.js",revision:null},{url:"assets/visuals_animation-effects.md.3453dc34.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4c5cd4ad.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4c5cd4ad.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.32cf1ce3.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.32cf1ce3.lean.js",revision:null},{url:"assets/visuals_death-animations.md.15c78d26.js",revision:null},{url:"assets/visuals_death-animations.md.15c78d26.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.0daf3463.js",revision:null},{url:"assets/visuals_glowing-texture.md.0daf3463.lean.js",revision:null},{url:"assets/visuals_index.md.ee0f1a88.js",revision:null},{url:"assets/visuals_index.md.ee0f1a88.lean.js",revision:null},{url:"assets/visuals_introduction.md.9ea974ed.js",revision:null},{url:"assets/visuals_introduction.md.9ea974ed.lean.js",revision:null},{url:"assets/visuals_leash-position.md.1fca25f8.js",revision:null},{url:"assets/visuals_leash-position.md.1fca25f8.lean.js",revision:null},{url:"assets/visuals_materials.md.6ded8fe8.js",revision:null},{url:"assets/visuals_materials.md.6ded8fe8.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.78c81541.js",revision:null},{url:"assets/visuals_math-based-animations.md.78c81541.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.eb7e34a0.js",revision:null},{url:"assets/visuals_player-geometry.md.eb7e34a0.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.b7e512c2.js",revision:null},{url:"assets/visuals_remove-shadows.md.b7e512c2.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.5a873479.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.5a873479.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.757a3dae.js",revision:null},{url:"assets/visuals_structure-presentation.md.757a3dae.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.e5c8ad3f.js",revision:null},{url:"assets/vr_editing-your-first-model.md.e5c8ad3f.lean.js",revision:null},{url:"assets/vr_index.md.e92f23ff.js",revision:null},{url:"assets/vr_index.md.e92f23ff.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.c04e58c3.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.c04e58c3.lean.js",revision:null},{url:"assets/vr_pack_setup.md.aa3c7c8e.js",revision:null},{url:"assets/vr_pack_setup.md.aa3c7c8e.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.40595bd4.js",revision:null},{url:"assets/world-generation_biome-tags.md.40595bd4.lean.js",revision:null},{url:"assets/world-generation_biomes.md.090a4ed0.js",revision:null},{url:"assets/world-generation_biomes.md.090a4ed0.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.717b172d.js",revision:null},{url:"assets/world-generation_custom-ores.md.717b172d.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.44af697f.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.44af697f.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.7c30434f.js",revision:null},{url:"assets/world-generation_feature-types.md.7c30434f.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.ac1b3d32.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.ac1b3d32.lean.js",revision:null},{url:"assets/world-generation_index.md.2a1d2157.js",revision:null},{url:"assets/world-generation_index.md.2a1d2157.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.0172c604.js",revision:null},{url:"assets/world-generation_structure-features.md.0172c604.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.d1255745.js",revision:null},{url:"assets/world-generation_surface-builder.md.d1255745.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.2594156d.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.2594156d.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
