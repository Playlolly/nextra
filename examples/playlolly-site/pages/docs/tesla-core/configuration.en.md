---
title: Configuration
---

import Callout from '@playlolly/nextra-theme-docs/callout'

# Configuration

The configuration file can be found in the Playlolly Tesla Core Resource under `/shared/config.lua`.

## Frameworks

<Callout type="warning">
  Only enable one framework at a time, otherwise you will encounter problems.
</Callout>

### `qbCore`

Support for the QBCore framework. For the Tesla Core to work properly with QB Core, we recommend using [our configuration](https://github.com/Playlolly/qb-core/commit/a574efbf10ee4a36e76a9aa8cbdff1671f2e90fb#diff-e75a7954b9086c1a3e21721e0027c56b0c96cd91cc933f19b5210be60a41bd6e).

**Type:** `boolean`\
**Default:** `true`

### `esx`

Support for the ESX framework.

**Type:** `boolean`\
**Default:** `false`

### `vRP`

Support for the vRP framework.

**Type:** `boolean`\
**Default:** `false`

## Notifications

### `default`

Usage of the default notification system.

**Type:** `boolean`\
**Default:** `true`

If it is set to false, please use the following function to use a custom notification system. (The function name must be `CustomNotification`.)

```lua
function CustomNotification (message)
  SetNotificationTextEntry("STRING")
  AddTextComponentSubstringPlayerName(message)
  DrawNotification(false, false)
end
```

## HUD

### `vehicles`

Vehicle hashes for HUD support.

**Type:** `object`\
**Default:** `{ -252836656, 2006210393, 967185883, 1281801152, -1290262746, 1717202867, -964913869, -450863688, 2014463299 }`

### `visibility`

Visibility of the Tesla Head Up Display (HUD).

**Type:** `boolean`\
**Default:** `true`

### `speedMeasurement`

Speed measurement system using `KM/H` or `MPH`.

**Type:** `string`\
**Default:** `'KM/H'`

## Superchargers

### `vehicles`

Vehicle hashes for supercharger support.

**Type:** `object`\
**Default:** `{ -252836656, 2006210393, 967185883, 1281801152, -1290262746, 1717202867, -964913869, -450863688, 2014463299 }`

### `mapBlipVectors`

Vector locations for the supercharger map blips.

**Type:** `object`\
**Default:** `{ vector3(-598.74, -2166.83, 5.99), vector3(-1006.07, -1641.55, 4.56), vector3(-2077.59, -298.51, 13.28), vector3(-50.87, -1764.61, 29.09), vector3(1161.94, -1499.23, 34.69), vector3(294.88, -1239.24, 29.28), vector3(-730.49, -907.24, 19.04), vector3(1154.81, -329.18, 69.05), vector3(266.37, -324.51, 44.92), vector3(644.06, 285.27, 103.21), vector3(2569.07, 308.97, 108.6), vector3(-1824.85, 783.56, 138.12), vector3(2546.94, 2609.6, 37.94), vector3(1018.0, 2665.3, 39.63), vector3(42.01, 2791.33, 57.88), vector3(-2533.82, 2350.38, 33.06), vector3(-2533.82, 2350.38, 33.06), vector3(1703.31, 4937.61, 42.08), vector3(1721.21, 6418.76, 33.8), vector3(-204.48, 6226.38, 31.49), vector3(2664.34, 3262.05, 55.24), vector3(1957.35, 3760.39, 32.2) }`

### `mapBlipId`

Set a custom Supercharger blip ID. An overview of all available blip ID can be found [here](https://docs.fivem.net/docs/game-references/blips).

**Type:** `number`\
**Default:** `354`

### `mapBlipColor`

Set a custom Supercharger blip color. An overview of all available blip colors can be found [here](https://docs.fivem.net/docs/game-references/blips/#BlipColors).

**Type:** `number`\
**Default:** `75`

### `mapBlips`

Visibility of Supercharger markings on the map.

**Type:** `boolean`\
**Default:** `true`

### `mapBlipsTesla`

Only show Supercharger markings on the map if you are in a Tesla.

**Type:** `boolean`\
**Default:** `false`

### `chargeRate`

Time until a tesla is fully charged (from 0-100%).

**Type:** `number`\
**Default:** `30.0`

### `detectionRadius`

Detection radius to start the charging process.

**Type:** `number`\
**Default:** `5.0`

### `levelSamples`

How many samples the battery level is updated after ( more samples the more accurate).

**Type:** `number`\
**Default:** `1500.0`

### `multiplier`

Energy consumption when driving (higher means higher energy consumption).

**Type:** `number`\
**Default:** `0.33`
