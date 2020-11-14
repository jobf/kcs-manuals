# Chapter 7 - Changes

[[toc]]

In the last three chapters, we've been dealing with various ways to control and limit the operations of the Changes PVG. In this and the next few sections, we'll be looking at exactly how specific operations of PVG presets are set up.

When you first enter the PVG, you'll see the Changes screen across the top of the screen. The words CHANGE by Constant should appear at the upper left. If they don't, click on Changes in the menu bar.

## AMT & WGT

You'll see a number of rows and columns of data fields in which parameter values can be entered. Several of the columns are headed AMT (amount) or WGT (weight). Understanding amounts and weights is crucial to understanding how the PVG works.

In order for the PVG to make a variation, you must tell it what sort of variation you would like. If you want to make several changes in the source sequence as part of a single operation, you must tell it not only which changes you would like made, but also how many you want in all, and how likely you want any individual change to be.

You might want a lot of changes in velocity, for example, but only a few changes in duration and no changes in pitch. Think of the total number of Changes per Vary (however large or small it may be) as a pie. When you enter data at any position in the weight columns, you are slicing up the pie. You are weighting the likelihood that any individual randomizing operation will be of the type you have chosen.

In our example above, you might enter a weight of 10 in one of the WGT columns in the Velocity row, a weight of 2 somewhere in the Duration row, and no weights anywhere else. Your pie is now sliced conceptually into 12 equal pieces: 10 of them are velocity pieces and 2 are duration pieces.

If you later change the velocity weight to 5 without changing the duration weight, the pie will only be sliced into 7 pieces. Duration will still have only 2 pieces of the pie, but each piece will be larger than it was before, because we're still dealing with a whole pie. In other words, reducing the weight under velocity will have the effect of increasing the probability that any given change will be a change in duration.

Conversely, if you keep the velocity weight at 10 and the duration weight at 2 and add a pitch weight of 50, the likelihood that any individual change will be a duration change will now be very small (2 chances in 62).

Though it isn't immediately obvious on the screen, most of the WGT parameters are paired with AMT parameters in the columns immediately to their left.

The WGT value determines the likelihood that a change will be made by that particular amount. For example, if you enter a WGT of 1 next to a pitch change of 1, you are creating some chance that a pitch- change of a half-step will occur in some note during the course of the variation.

The AMT columns default to some values that you may find useful. If not, you can overwrite them with values of your own. Both amounts and weights can be freely edited.

The WGT of some operations (such as Delete and Erase) does not appear in conjunction with any AMT parameter, because these operations are absolute. You can't erase some amount of a note! Other weights are paired with different parameters, but they operate in the same way, creating a positive probability (or certainty, depending on the nature of the parameter) that this particular change will occur.

No change will be made in a data type for which no positive weight has been set. If a 0 is set under Changes per Vary in the GENERAL OPTIONS section, the PVG will make one change for each weight unit. (The number of changes might appear to be slightly smaller, because some events might be varied more than once.)

If Changes per Vary is not 0, there is no practical difference between giving five different parameters a weight of 10 and giving them each a weight of 1, because all the weights are equal. When Changes per Vary is 0, however, there is an enormous difference.

## Constant, Gaussian, & Signed Changes

The Changes screen contains three sections, each of which has its own type of effect on the musical material. These are labelled at the top of the screen. You'll see six pairs of columns, though, rather than three. This is for convenience, and in order to make more complex variations possible.

By entering positive weights next to three different amounts in one row, you can cause the program to generate changes of these three sizes in a single pass.

With Constant changes, you select the size of the change (and give the size a weight), but the program chooses the direction of the change.

In the case of pitch changes, the pitch of a given note might be either raised or lowered. 

In the case of time changes, the note might get closer to the preceding note, or it might move further away. If you'd like more control, you should use Signed changes.

These two AMT/WGT columns at the right of the screen let you enter either a positive or negative value under AMT. (For negative values, type a minus (-) sign before the number. For positive values, simply type the number as usual.)

Signed changes can be very useful if you want your material to start at one pitch or velocity level and move gradually, through a number of consecutive and evolving mults, to a higher or lower level.

Gaussian changes work a bit differently. Here the AMT column is replaced by a column headed SD. This stands for standard deviation, which is a statistical measure of the likelihood that a given change will be of some specified size. The value entered under SD will be roughly the mean value of the changes generated by the program.

To hear how Gaussian changes work, try entering a sequence that consists entirely of a single repeated note. Select Consecutive Mults but not Evolving Mults, enter 10 or 12 under Variations, and choose 0 Changes per Vary. Now enter a WGT of 10 or so and an SD of 1 in the pitch column, and click on OK. The result will be a sequence with many changes of a half- step, some changes of a whole-step, and a few larger changes.

Next, go back to your source sequence again, reenter the PVG, and enter an SD of S or 6. This time, the average size of the pitch changes in the variations will be somewhat larger, but some changes of a half- step or whole-step will still appear.

The size of the standard deviation can also be controlled by the amount of variability in the source sequence itseff. Larger amounts of variability (such as wide scale leaps) can cause a larger SD value to be calculated, resulting in wider changes in the variation. This is done by setting a value under SD Default Fader in the Defaults box (see Chapter 6).

Pitch, Velocity, & Duration Random changes in these elements are made by entering one or more weights and amounts in the appropriate rows. The nature of pitch, velocity, and duration changes should be intuitively obvious. Note that the size and number of the changes may be affected by various settings under PROTECTION and RESTRICTIONS.

## Time & Shift

These two parameters are related, in that they both operate on the time values of the MIDI notes in the source sequence. The difference is that when the time of a note is changed with Shift, a complementary change is made in the time value of the following note, in such a way that the overall length of the sequence is not changed.

For example, if times are being shifted with an amount of 6 and all the notes in the original sequence are 12 docks apart, then when the program shilts a note backward in time (subtracts 6 from its time value, giving it a new time value of 6) it will also add the same time value to the following note (12 + 6 = 18). Using Shift is a great way to add syncopations to a sequence.

You can use Evolving Mults and swapping to create a constantly evolving line, or simply generate repeated small variations on the same source materiai. Time changes will change the overall length of the sequence. This can be useful for generating several closely related sequences that will gradually move out of sync with one another as they loop, because their lengths are no longer the same.

The PVG will not change the time of a note if the result of the operation would be to move it forward or backward past another note, changing the order of the notes. (If you want to change the order of the notes, use the Swap/Copy screen.) In this situation, the program counts the "change" as part of its total, but no change is actually made.

 > Figure 4 (original PVG manual page 41) Preset to produce various small random changes in pitch, velocity, and duration, and small shifts in time. The total length of the sequence will remain unchanged. No note will be mcved less than 6 steps from the previous note, and velocities created will be in the range 24-84.
 
## Staccato/Legato

This switch at the bottom of the Changes and Global 1 sections is used in conjunction with Time and Shift operations to preserve the relationships between the end of one note (that is, its duration) and the beginning of the following note (its time value). When a note moves backward in time, the note before it is shortened by the amount that it is moved, and its own Oo duration is lengthened. When it moves forward in time, the note before it is lengthened, and the note itself is shortened.

This portion of the program operates by converting durations into a different form before the time changes are made, and converting them back alterward. As a result, some durations that are not actually involved in a particular change may be altered up or down by one unit.

Also, using Stacatto/Legato with a sequence that contains chords will tend to produce notes that have a duration of 1. This can be fixed quickly using the Chords page of the Master Editor.)

## Interval

The effect of an interval change is not to move the absolute pitch of a single note but to change the interval relationship between a single pair of notes. (Changing a single pitch changes two intervals - the one between that note and the preceding note, and the one between that note and the following note.) So an interval change has the effect of transposing everything in the sequence that follows the randomly selected interval.

As explained in Chapter 5, the program does not check to see that the transposed notes are still within the allowed note range, or that they still fall on allowed scale steps. This may seem at first to be a shortcoming of the program, but in fact it offers some interesting musical possibilities.

If you don't like the non-key notes that are created by an interval shift, you can always use a global transposition along with protection of the notes that you do want, in order to put the offending notes back into the correct key.