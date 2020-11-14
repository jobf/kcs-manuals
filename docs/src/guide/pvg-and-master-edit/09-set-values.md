# Chapter 9 - Set Values

[[toc]]

Operations that are selected in the Set Values section cause the program to select a single note at random and set it to the value specified. This is different from Changes, in that the result of a Change operation depends partly on the starting value of the note.

For example, a change of velocity with a value of 24 would cause a note that started with a velocity of 60 to end up with a velocity of either 84 or 36. Entering a velocity of 24 on the Set Values screen will cause the randomly selected note to end up with a velocity of 24, no matter what velocity it started with.

Weights and amounts are set as in the Changes section. Six columns of changes with independent weights are available for each type of data, allowing you to make a number of set changes in a single variation.

If Changes per Vary is set to 0, all of the set values you specily will be introduced into the variation. Otherwise, the program will select some of your set values at random each time it makes a variation.

Notes are entered in the pitch change VAL (value) columns as letter names (followed by a sharp sign, if needed) and an octave number.

## Interval

Interval values may be either positive or negative. Unlike the Interval parameter in the Changes section, interval shifts here apply only to a single note; in other words, they operate much like pitch changes in the Changes section. The difference is that a pitch change generated in the Changes section causes a note to move up or down a specified amount with reference to its own starting pitch, while an interval shift in the Set Values section causes a pitch to move up or down into a specified relationship with the previous pitch.

 > Figure 7 (Original PVG manual page 50) Preset to randomly set notes to he an Octave above or below the previous note. Only notes with velocities less than that of the previous note are affected.

## Delete & Erase

Two new options are found in the Set Values section. Both Delete and Erase cause randomly selected notes to disappear from the variation. The difference between them is exactly the same as the difference between the Delete and Erase edit commands in the rest of the KCS: Deleting a note removes its time value from the sequence, causing the sequence to get shorter, while erasing an event causes its time value to be added to the immediately following event, so that the sequence stays the same length.

The Erase feature can be used to create wonderful syncopated bass lines. First, compose a sequence containing a bar or two of continuous sixteenth notes in whatever melodic pattern you like. Then erase some of them from the Set Values screen.

Set the GENERAL OPTIONS to Consecutive Mults but not to Evolving Mults. (Evolving Muits with either Delete or Erase will quickly cause the entire sequence to disappear from the variations!) If your original sequence contains 32 sixteenth notes (two bars of 4/4), set Changes per Vary to 0 and give Erase a weight of 8 or 10.

To add a bit more spice, you might also enter a signed velocity change of 12 on the Changes screen with a weight of 3 or 4, so as to cause occasional accents.