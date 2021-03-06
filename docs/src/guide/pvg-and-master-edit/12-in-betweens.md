# Chapter 12 - In Betweens

[[toc]]

Another basic operation that the PVG can perform is to create one or more sets of sequences (or consecutive mults) that are linear interpolations between any two existing sequences.

The in-between generator does not use any of the settings on the main PVG screens. When you activate it by clicking on In- betweens at the bottom of the menu, its window will pop up.

In-betweens can be created only in Open mode. Note that there is no stipulation that the two sequences used for in-betweens must have the same number of notes in them. In fact, some of the most striking results of the in-between feature come from using a starting sequence that has only a single note and an ending sequence that consists of a whole phrase. (Autocorrecting the in-betweens is also a good idea, if you're interested in increasing the understandability of the output.)

Each of the in-betweens will have some number of notes intermediate between the number of notes in the starting and ending sequences.

## Sequence

Enter on this line the number of the sequence that you want to use as the end-point for the in-between process. (The sequence from which you entered the PVG will be the starting point.)

## Number of Sets

This number determines how many interpolations the program will make between the starting sequence and the ending sequence. It is not a linear setting, however. The number of sequences created is equal to 2n - 1, where n is the value in this field. The range of n is 1 to 5. The number of sequences created (or the length of the combined sequence, if Consecudve Mults is selected) can get to be quite large when this setting is on.

## Autocorrect

This value works exactly like the Autocorrect value in the KCS edit menu; it restricts the time values of the generated sequence(s) to multiples of the number entered in this data field.

Autocorrecting is especially useful when generating in-betweens for sequences that have different rhythms or different numbers of notes, as it will make the output sound more coherent.

## Consecutive Mults

This switch works exactly like the one in the GENERAL OPTIONS section. It causes all of the in- betweens to be stored consecutively in the same output sequence.

## Restrict Scale Positions

This switch is used for telling the In-Between generator what scale positions you would like it to use.

If you click on OK to start generating in-betweens when the Restrict Scale Positions switch is highlighted, you will get a second window with a scale positions display like the one in RESTRICTIONS and PROTECTION. This defaults to the notes contained in the starting and ending sequences, but you may select any combination of scale steps that you prefer.
