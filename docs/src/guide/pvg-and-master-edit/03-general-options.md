# Chapter 3 - General Options

[[toc]]

The basic idea of the Programmable Variations Generator is that it will make one or more changes in the contents of a track or sequence, and then store the results of its operations.

Two questions come up immediately: First, how many changes will the PVG make in a given operation? And second, where will the results be stored? These questions are dealt with in the GENERAL OPTIONS section of the screen, which is part of all nine screens (Changes, Swap/Copy, Set Values, Global 1, Global 2, Split/Pattern, Ornaments, Add Controllers, and Vary Controllers) that are used in creating presets.

## Overwrite Original

If you want to replace your sequence with the new material created by the PVG, click on Overwite Original so that it is highlighted in inverse video. (Don't worry - if you don't like the new material, you can always click on Undo in the KCS edit screen and retrieve the previous version.) Overwrite Odginal will be used most often when doing edits with the PVG, as there's usually no need to keep the unedited version of a sequence lying around. When creating variations, you'll more likely want to keep the original, at least temporarily, as a reference and as a source for further variations.

## Consecutive Mults & Evolving Mults

The next two selections, Consecutive Mults and Evolving Mults, are used when the PVG is generating more than one variation on the starting material. The number of variations that it will make at a time is selected by entering a number under Variations on the second line of the GENERAL OPTIONS section. When Consecutive Mults (i.e., multiples) is highlighted, all of the variations will be stored consecutively on a single track.

Be sure to check the time of the final DE event in your sequence before using Consecutive Mults, and set it to some appropriate value (such as the downbeat of the following bar). The reason for doing this is that the first event in each consecutive variation will start with reference to the time of the last DE event in the previous variation. Normally, a final DE event that's set seven or eight bars late because that's when you got around to stopping the recording process won't make any difference in the music, but in this case it will.

When you click on Evolving Mults, a very interesting thing happens. Without Evolving Mults, each variation created by the PVG in a given operation will be based on your original sequence. The Evolving Mults option causes the PVG to base each new variation on the preceding variation. What effect this will have depends, obviously, on what the preset is doing. If it is setting every note to a fixed pitch, using Evolving Mults would be ridiculous, because once the notes have been set to this pitch, no further evolution can take place.

When used with the randomixing options in the Changes and Swap/Copy sections, though, Evolving Mults can generate some wonderful patterns, where each new note or accent created by the computer becomes part of subsequent phrases. A single five-note or six-note phrase, subjected to various procedures in conjunction with Evolving Mults, could easily become the raw material for a long and convoluted piece of music.

Note that if you specify Consecutive Mults, the program will append the variation(s) to a copy of the original sequence, unless you are overwriting the original and doing a single variation.

## Reverse

If the Reverse button is highlighted along with Consecutive Mults and Evolving Mults, the variations will be stored in the opposite order from the order in which they were created: The last-created variation will be at the beginning of the sequence, and the original version will be at the end. (The order of the individual notes within each variation will not be reversed, however.)

## Changes per Vary

The number entered under Changes per Vary controls the number of operations the program will perform in the process of creating each new variation. This number interacts with the numbers entered in the WGT (weight) columns.

Only changes for which you have entered non-zero weight values will be selected by the program. For example, if the only types of changes that have non-zero weights are pitch changes by 12 units (half-steps) with a weight of 2 and velocity changes by 24 units with a weight of 1, then each change will have a 2/3 chance of being a 12-unit (one octave) pitch change and a 1/3 chance of being a 24-unit velocity change. This will be explained more fully in Chapter 7, under the heading AMT & WGT.

If you select 0 under Changes per Vary, you will not get zero changes. Instead, the numbers under WGT will directly determine the number of changes made. The program will make one change for each weight unit. In the above case, this would mean three changes per variation--two one-octave pitch changes and one velocity change.

## Edit Mode

The Edit Mode button is a quick way of setting up a preset so as to make a single set of changes in your original sequence. Selecting Edit Mode is equivalent to selecting Overwrite Original and entering 1 under Variations. OK, CLEAR, CANCEL & RANGE.

Since the PVG's exit buttons are below the GENERAL OPTIONS section of the screen, we will discuss them here.

Click on OK when you have selected or edited a preset and you arc ready to have the machine generate its variation(s). Depending on how much material is being generated, you may be returned to the edit screen almost instantly, or the process may take a number of seconds. If you wish to abort the process, press the ESC key.

Note: If you click on OK without having selected any operations, you will see an error message at the bottom of the screen that says, "No weights set, cannot vary!" In this situation, you must exit the PVG by pressing a key on the computer keyboard.

Use the CANCEL button if you want to go back to the edit screen without generating any variations.

The CLEAR button is used for resetting all weights to zero. If you have been experimenting with the PVG's parameter settings during a session, we recommend that you use CLEAR before starting to set up a new preset. If you neglect this step, you may easily leave a parameter somewhere with a non-zero weight, which can cause confusion, wasted time, and useless musical results.

The RANGE button will appear to the left of the CLEAR button if you have selected a range in the edit screen (highlighting it by clicking and dragging on the note list) before entering the PVG.

Also, if you have selected a range, you will find that the events at the beginning and end of the sequence that fall outside this range are now protected in the PROTECTION section. This data in the PROTECTION section can still be edited if desired; the purpose of the RANGE button is to restore these values in the PROTECTION section if they have been altered, so you won't have to exit back to the edit screen to see what the range limits are.

## Preset Name

To the right of the Edit Mode switch are the name and number of the current preset. (If you are entering the PVG for the first time in a session, you won't see a number. The number will appear when you select Get in the menu and choose an existing preset, or when you store your new preset in one of the memory locations.) When you click on any letter of the name, the visual cursor will move to this letter, allowing you to type in a new name. Names can be up to 16 characters long.

Be sure to give a preset a new name before storing it. If you don't, you'll end up with several presets named Default and no easy way of telling which is which.