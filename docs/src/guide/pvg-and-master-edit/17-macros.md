# Chapter 17 - Macros

[[toc]]

Single presets in the PVG are designed to be applied in two ways -- either to randomly selected notes (or groups of notes), or globally, to all unprotected notes in a sequence.

The purpose of macros is to allow you to apply presets more selectively, to precisely defined regions within a sequence, and to use more than one preset in creating a given variation.

You can make much more complex edits and variations with a macro than with a simple preset. In a macro, you can specify a series of presets (up to 16 of them) that are to be used in each edit operation, or to create each variation. These presets can be of any type.

You can have different presets operate on different parts of the sequence, perhaps vaying the velocities of notes at the beginning (either deterministically or randomly) and adding ornaments at the end. You can define otherwise identical presets to contain different protection settings, and then apply all of them to the entire sequence, which might (for example) have the effect of making a variation in pitch more likely for notes with low velocities than for notes with high velocities. These are only two examples from among hundreds of possibilities.

The most powerful editing feature on the Macros screen is probably the Cyc (cycle) column. This allows you to apply a preset repeatedly to different parts of a sequence that are separated by a constant value -- for example, putting an accent on the downbeat of every bar, or transposing three out of every eight notes while also giving them a new MIDI channel and a fixed velocity.

Get and Store work the same way with macros that they do with presets. The PVG can store up to 20 macros, each of which can use the 80 presets in any combination.

Using Load and Save for disk operations loads or saves both presets and macros in a singie operation. The Preset List The column at the left side of the Macros screen shows the names of the presets that are currently in memory. To switch from one type of preset to another, click on either of the double arrow icons at the top of the column. Between the arrows you'll see a word that indicates which set of presets you're currently displaying.

Down the center of the screen is a list of the presets that are currently being used in the macro. When you first call up the Macros screen, the list in the center will be blank. If you would like to see what a macro looks like, simply click on Get in the menu and select one of the macros that are shipped with the PVG. We have provided some macros that you might find useful. These use some of the factory presets in various ways.

To add a preset to the bottom of the macro list, simply click on its name in the column at the left. Another way to add a preset to the list is to click on the column of two-digit number fields (green underlines) directly below the word Preset and then enter the numbers of the presets that you want. Their names will not appear in the center column until you do something that causes the screen to be refreshed, but they will be there even though you don't see them.

If you would like to delete a preset from the list, click on its number (the green number at the left side of the central list, not the white number at the far left) and either type over it with the space bar or press the Clr/Home key on the computer. The name will still appear in the list until the screen is refreshed, but the preset will be gone. You can verify this for yourself by blanking out all of the numbers in the list and then clicking on OK. The computer will issue an error message: "No lines in Macro!" (Press any computer key after the error message to return to the edit screen.)

A single preset can be used any number of times in a macro. Each time you add a preset, it will be inserted at the earliest possible position in the list. If you have previously deleted a preset from the middle of the list, the new preset will be added in the hole you have created. There is no utility command for inserting a new preset into the middle of an unbroken list, however.

If there are no presets that you want to delete in the middle of the list and you would like to insert a new preset somewhere other than at the end, simply copy each of the entries in the list manually onto the next entry until you work your way back to the point where you would like to make the insertion.

A line in the list may also specify that the sequence be processed by the pitch map, which is defined in the Master editor, as described in Chapter 18. Enter 81 under Preset to use the pitch map in the line. The From, To, and Cyc switches will have no effect when the pitch map is used in a macro, and the map will be applied to the whole sequence, regardless of any protection settings. If Ops is 0 or 1, the sequence will be "run through" the map once, or Ops times if Ops is greater than 1.

## General Options

Along the bottom of the Macros screen, just above the exit buttons, is a group of buttons that correspond more or less exactly to the options in the GENERAL OPTIONS section of the individual presets. These values override the GENERAL OPTIONS section of the individual presets, which have no effect when a macro is being used. The number under Variations is the number of variations to be created by the macro. Odg, Consec, Evol, and Rev are shorthand for Overwrite Original, Consecutive Mults, Evolving Mults, and Reverse on the preset screen. (See Chapter 3 for more on these options.)

Likewise, the Edit Mode switch performs the same function as the Edit Mode switch in a preset. It causes one variation to be created that overwrites the original.

## Lines

The number following the word Lines is the number of macro lines (individual presets with their associated From, To, and Cyc numbers) to be executed by the macro.

If this number is 0, each line will be executed once.

If it is a positive integer, lines will be selected at random the number of times specified by the Lines number. Note that this may cause some lines to be executed more than once, while others are not executed at all.

## Con Lines

When this switch is highlighted, the program uses a new consecutive line within the macro for each variation in a series. The total number of series items created (and thus the total number of lines executed) will be determined by the Variations parameter in the bottom row.

For some macros, especially in edit mode, it doesn't matter what order the lines are in. Since the Con Lines button causes lines to be executed in order, however, the order may make quite a ditference. If a note has been changed to a new pitch by line 2, for example, it might fail a logical test that takes place in line 5. If the order of the lines were reversed, the result might be quite different.

Another example: If a preset that performs pitch transposition has a PROTECTION value set for notes with high velocities, it makes a big difference whether another preset that increases velocities is executed before or after the first. Consecutive line execution can also be important when evolving mults are being generated.

## Range Unit

Three choices are available for the range unit setting: Event, Step, and Meas (measure). This choice determines how the program will interpret the From, To, and Cyc values in the list. 

he choices correspond precisely to the three values computed by the KCS at the left side of the edit screen event list: MSR (measure), ST (step), and EVNT (event).

A quick glance at this screen should give you an immediate understanding of how From, To, and Cyc will be interpreted. Let's look at a simple example using the values From = 1, To = 1, Cyc = 3, with a preset in the list that globally transposes notes down by an octave.

When Event is selected as the range unit, the program will look through the source sequence and transpose every thlrd event (because Cyc = 3) down an octave -- provided, of course, that that event is a note.

When Meas is selected as the range unit, all of the notes in every third measure (again, because Cyc = 3) will be transposed down an octave.

When Step is selected as the range unit, the program will begin counting its clock steps at the beginning of the sequence, and transpose any note that falls on a clock step divisible by 3.

## Ops

Each line in a macro has four parameters associated with it - From, To, Cyc, and Ops.

The Ops (operations) number, in the right-most column, overrides the Changes per Vary number in the preset. As with Changes per Vary, a 0 setting will cause the program to make one change for each WGT (weight) value in the preset, while any other number will cause that number of changes to be generated by the line.

## From/To Ranges & Cycles

The From, To, and Cyc parameters replace the First and last parameters in the PROTECTION section of the individual presets. These two PROTECTION parameters (and only these two) are always ignored when a macro is used.

From and To values are used to specify a range of events, measures, or steps within each measure to which the preset in that line will be applied. The effect of From, To, and Cyc values thus depends on the range unit setting (see above).

If you set From to 5 and To to 11, the preset will be applied to events 5 - 11 of the sequence if Event is selected, to measures 5 - 11 if Meas is selected, and to any events that fall on clock steps 5 - 11 of each measure if Step is selected.

The range unit will always be of the same type (Event, Step, or Meas) for all the lines at any given time. If the To value is left blank, the program will begin executing the preset at the From point and proceed to the end of the sequence. Likewise, if a value is entered under To but nothing is entered under From, the program will assume that From is 0.

A From value can be negative, which can be useful when the range unit is set to Step, allowing you to anticipate a beat. (See the example below.)

The Cyc (cycle) value allows you to specify that a line is to be applied repeatedly to sections of the sequence separated by the Cyc value. For example, with a range unit of Event, a From/To of 3 - 5, and a Cyc of 12, the preset will be executed for notes 3 - 5, 15 - 17, 27 - 29, 39-41, and so on.

In order for a Cyc value to be operative, it must be larger than the To value. This prevents two conditions: First, you can't use a macro in such a way that a line operates on overlapping regions. This would happen, for example, with a From of 3, a To of 9, and a Cyc of 2, which (in combination with a range unit of Event) would cause the line to operate on events 3 - 9, 5 - 11, 7 - 13, and so on, if that were permitted by the program. And second, you can't start (or end) a cyclic edit in the middle of a sequence.

The cycle must be continuous from one end to the other (except that the beginning of the first occurrence of the cycle may fall before the beginning of the sequence, if the From value is negative, and the sequence may end in the middle of the last occurrence of the cycle).

If a range was highlighted in the KCS edit screen when vary was selected, the word RANGE will appear on the bottom line. Clicking on this will cause the range unit to be set to Event, and the From and To values for each line in the macro to be set to the start and end points of the highlighted range. Unless you enter a Cyc value, this will cause all of the lines to operate exclusively on the range.

Cycling can easily be applied creatively to generate patterns that have a natural rhythmic cycle.

For example, suppose we want to emphasize all the notes that fall in the first beat of every measure. Assuming that we are using the KCS defaults of 24 steps per beat and % steps per measure, we would choose a preset that transposes velocity up (using the Global 1 screen) or sets it to a high value (using the Global 2 screen), then enter 1 under From, 24 under To, and % under Cyc, and select Step as the range unit.

If we wanted instead to emphasize notes that fall within three clock steps of any quarter-note, we would set From to -2, To to 4, and Cyc to 24. Emphasizing the first measure in every four-measure phrase would simply be a matter of selecting Meas as the range unit and then setting From, To, and Cyc values of 1, 1, and 4.

"Emphasizing" is really too narrow a concept to illustrate the wealth of possibilities. The PVG could be used to add pitch-bends or ornaments to notes within any of the ranges just discussed, or to randomize pitches and destabilize event times, or to make all of these changes at once in overlapping regions.

The power of macros extends far beyond our ability to visualize what we might do with them musically.

 > Figure 14 (Original PVG docs page 96) Figure 15 (Original PVG docs page 96) Figure 16 (Original PVG docs page 97)