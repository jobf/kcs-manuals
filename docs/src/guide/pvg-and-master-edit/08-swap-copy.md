# Chapter 8 - Swap/Copy

[[toc]]

A good musical ear has a tremendous capacity for remembering patterns - that is, groups of notes that have specific relationships to one another. Because of this, introducing entirely new elements into the patterns, using the Changes Section, may not always be the musical effect you're looking for.

If you'd rather keep all of the existing elements intact, but rearrange them into a new order, the Swap/Copy section is the tool for the job. Since the Swap/Copy operations only use the existing material in your source sequence, there is no need for a set of RESTRICTIONS parameters like those on the Changes screen in order to avoid creating new values.

## SWAP, ADJ, & COPY

Although they aren't labelled as such, all three of the columns on the left are WGT (weight) columns. That is, entering a number here creates a likelihood that the type of change selected will occur.

Entering a number under Swap causes the PVG to select two notes at random and copy the value of the selected type of data (pitch, duration, etc.) of each onto the other. Swapping a single data type a number of times is a good way to randomize the ordering of that data in the sequence without introducing any new values.

ADJ (Adjacent) is a special type of Swap operation that always uses two notes that are next to one another.

COPY is like half of a Swap operation. As before, two notes are chosen at random, but now the copying process is one-way rather than reciprocal. Using COPY a number of times will have the effect of reducing the amount of variety in the sequence. For example, if you start out with lots of different pitches and then copy pitches over and over, you could easily end up with a sequence that has only two or three repeating pitches in it. If you do this while simultaneously introducing an occasional new value from the Changes screen - well, who knows what you might get?

 > Figure 5 (original PVG manual page 44) Preset to pick notes at random and swap their pitches or velocities with another note. The note lollowing the selected note will he used half of the time.

Another trick you might like to try would be using Reverse in the GENERAL OPTIONS section along with the Copy operations, so that your evolving mults will be stored in the opposite order from the one in which they were generated. This could create a sequence that starts with only a few pitches (or velocities, durations, etc.) and then becomes gradually more complex in an interesting way.

You can get a similar, though not identical, result by generating the variations without Reverse and then using the Time Reverse command (under the Transpose/Auto menu selection) in the KCS edit screen.

### PROCESS CONSECUTIVE

Four different types of operations can be performed in this section, depending on which switch (Copy, Copy From Seq, Time Reverse, or Rotate) is highlighted at the right side. These switches are radio buttons: Only one of them can be active at a time, and it will govern all PROCESS CONSECUTIVE operations that are weighted.

Entering a number under CON tells the program how many consecutive notes you want it to perform the operation on. For example, entering a 3 on the pitch line under CON and giving this a weight will create a likelihood (or certainty, depending on what else the preset is or isn't doing) that the program will choose exactly three consecutive notes on which to perform the selected operation.

Two CON columns are provided, so that you can perform identical operations on consecutive ranges of two different lengths at the same time.

#### Copy

Using the Copy switch under PROCESS CONSECUTIVE causes the program to select a consecutive group of notes (the number of notes being determined in the CON column) and copy the values of the selected data type to a target group of notes also selected at random.

Doing this operation a number of times will reduce the overall variety in the sequence, but in a more interesting way than if you were copying only single notes. Short patterns will tend to replicate across the sequence, though not in any predictable fashion.

#### Copy From Seq

The Copy From Seq option works in conjunction with the Copy Seq parameter just below it.

The program will go to the sequence whose number is entered under Copy Seq, choose a consecutive group of notes, and copy the selected data (pitch, duration, etc.) from these notes onto a consecutive group of notes in the sequence being varied. The result is that the variation will be a mixture of elements from two sequences, the sequence being varied and the sequence named under Copy Seq.

One interesting way to use this would be to create a "dummy sequence" of some specialized source material, such as a velocity accent pattern. The dummy sequence could be the same length as the number of notes entered under CON, in which case the same material would always be copied into the variation, or it could be longer, providing less predictable results.

The difference between copying from a sequence with the PVG and doing a Blend operation with the Master Editor is that blending will affect the entire sequence, while the PVG will choose only a particular segment (or segments) of the sequence at random to copy data into.

#### Time Reverse

This option causes the values chosen (velocity, pitch, etc.) to be shuffled around within the consecutive region in such a way. that they play back in opposite order.

#### Rotate

This option takes the values chosen and passes them down the line toward the end of the consecutive region, with the last few values wrapping around to the beginning of the region. The number of steps that each value will be advanced is determined by the Rotate By parameter.

While Rotate By will not accept a negative number as an input, you can easily get the effect of rotating values backwards by entering a Rotate By value that is the desired number of steps less than the size of the consecutive region. For example, if the CON value is 9 and the Rotate By value is 7, the apparent result will be to rotate everything by -2.

## Xtime

Most of the items listed at the left side of the Swap/Copy screen function just as you would expect them to, causing changes in the types of data indicated. One new item is found here, however.

Xtime is an abbreviation for "except time." Entering a weight here will cause all of the elements of a note except its time to be affected by the operation. The result is that the rhythm of the variation will be the same as that of the original sequence, while other elements will have been shifted around.

This could be particularly useful for creating variations to play along with composed music -- even four-bar riffs in 4/4 time -- because it will preserve the rhythmic structure while shifting the other elements.

## Copy Loop

The Copy Loop switch in the lower right corner of the Swap/Copy screen works in conjunction with the PROCESS CONSECUTIVE options. When Copy Loop is activated, the program looks at the source sequence as a closed loop, and has the opportunity to define a region containing some notes at the end followed by some at the beginning.

 > Figure 6 (Original PVG manual page 48) Preset to oopy 2 or 3 oonsecutive pitches scIeTted at random from sequence 1 into the current sequenre. Sequence 1 is treated as a loop.
