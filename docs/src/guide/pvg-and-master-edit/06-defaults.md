# Chapter 6 - Defaults

[[toc]]

When you click on Defaults in the menu, a window will open in the center of the screen. The settings in this window cause the program to analyze the sequence being varied and set certain parameters in the RESTRICTIONS section accordingly. The values in the Defaults box are stored with each preset.

## Limit Pitch Range

If a number is entered in this space, the program will find the highest and lowest notes in the sequence, and set the Pitch Limits in the RESTRICTIONS section to these outer limits plus the number of half-steps specifled. For example, if the only pitch a sequence contains is C4, setting Umit Pitch Range to 6 would cause the Pitch Umits parameters in the RESTRICTIONS section to default to F#3 and F#4. (These values can later be edited by hand, of course.)

## Limit Velocity Range

This parameter works just like Limit Pitch Range, but with reference to the velocity values in the sequence.

## SD Default Factor

When this parameter is set, the program analyzes the source sequence and sets the values in the SD (standard deviation) column on the Changes screen to .1 times the SD Default Factor times the mean variation from one note to the next in the source sequence. SD values will thus be larger for sequences (and data types within those sequences) which have larger jumps from note to note than for sequences with small changes.

Note: Large values for the SD Default Factor can combine with large values for mean deviation to produce wraparound effects - settings in the SD column that don't correspond in any linear way to the explanation given above. If you don't like these, you can always edit them manually.

## Allow New Scale Positions

When this switch is switched off (not highlighted), the program will analyze the source sequence and highlight under RESTRICTIONS any scale steps that it doesn't find. This is a handy short-cut when you want all pitch changes to stay in the same key you started in.
