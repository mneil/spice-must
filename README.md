# SpiceMust

A poorly named "random" human readable name generator based on foods. SpiceMust is a non reentrant library that will generate up to `79507` unique strings and has low memory overhead.

## Usage

`npm i spice-must`

```javascript
const spiceMust = require("spice-must");

for (let i = 0; i < 50; i++) {
  console.log(spiceMust.flow());
}

// ChickpeasSyrupFenugreek
// ChickenMangoesClove
// CodDatesAsafoetida
// PeanutsBarleyMace
// ParmesanCornCelery
// YogurtPrunesOnion
// SunflowerCouscousSafflower
// PumpkinFigsTurmeric
// PistachiosCerealShallot
// BeefBagelsLoomi
// ....
```

or ESM

```javascript
import spicemust from "spice-must";

for (let i = 0; i < 50; i++) {
  console.log(spiceMust.flow());
}

// CodMolassesCinnamon
// TofuBarleyCelery
// GoudaFigsDill
// EdamamePotatoesMahlab
// FlaxTapiocaShallot
// TunaCornflakesAnise
// TurkeyWheatClove
// HempRiceAnnatto
// SpirulinaCornAmchur
// FishMilkCumin
// ....
```
