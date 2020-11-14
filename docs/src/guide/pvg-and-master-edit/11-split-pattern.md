# Chapter 11 - Split/Pattern

[[toc]]

The Split/Pattern screen allows you to make the decision as to whether to process a note based on that Split/Pattern note's relationship to up eight other notes in the sequence. It also allows you to perform splits based on those relationships, or to split out all the unprotected notes in a sequence.

The Split/Pattern screen might best be thought of as an extension of protection. It performs certain logical tests not on individual events, but on groups of events. Only notes that pass these tests will be varied.

Pattern testing is done by the program at the same time as protection testing, so operations such as rotating, for which no protection testing is done, do not use pattern testing. Pattern testing works in conjunction with all presets that vary notes, but not with Ornaments, Add Controllers, or Vary Controllers.

Pattern testing works a bit differently than other areas of the PVG, so it may be a bit intimidating at first, but after you work with it for a while the concepts should become clear.

The idea is that in the Split/Pattern screen the user specifies an interval pattern using the row of symbols. The pattern test looks for patterns which logically match the pattern you have specified. When the program is creating a variation and pattern testing is active (that is, when something other than Off has been selected in the row of buttons on the left side of the screen), only notes which meet the test criteria in the pattern test can be varied. A pattern that is interrupted by any non-note event will not be identified by the program. When the PVG is making a number of changes in a single variation, the pattern testing is done again before each new change. If a note has been changed, it may fail a logical test that it would have passed a moment before. This is true as well when the Split operation is performed: Notes that have been split are replaced by DE events, and will fail all logical tests.

There are four types of symbols in the INTERVAL PATTERN SELECTION area -- end markers, note selector buttons, data fields, and arithmetic test symbols.

## E (End)

The end markers appear as capital E's. These are radio buttons; only one can be highlighted at a time.

An end marker is used to set the last note in the pattern that you are defining. For a two-note pattern, click on the E nearest the left end. This is above the second eighth- note symbol; there is no E above the first note symbol because the idea of a one-note pattern is meaningless. For a three-note pattern, click on the second E (the one above the third note), and so on. Any data in fields to the right of the E will be ignored.

## Note Buttons

The note selector buttons, which appear as eighth-note icons on the screen, are used to indicate which of the eight (at most) notes in the pattern is the one you want to vary. Again, these are radio buttons, so only one of the notes in each selected pattern can be altered in the course of creating a variation (unless you select Use Whole Pattern).

If you select the note button on the left end, each note that is to be varied will be tested to see if it can be the first note of the selected pattern; if you highlight the second note, each note will be tested to see if it can be the second note of the pattern, etc.

## Interval Data Fields

The data fields are used to specify the size of the interval that is to be tested in identifying patterns.

The fields operate like those in the pitch and interval areas of the Changes screen: Intervals are specified in number of half-steps, and negative numbers must be used to specily a descending interval.

Data must be entered in the field between each pair of notes to the left of the currently active end marker. If you do not enter any data, the program will use a default value of 0 (a unlson interval).

## Arithmetic Tests

The arithmetic test symbols, which are the row of < = > icons below the interval pattern, are not radio buttons; they can be switched on or off in any combination. The symbols below each interval data field are usod to tell the program what logical condition to test for with respect to that interval.

If you select the equals Sign for each interval (the simplest logical condition), then a pattern of notes in the sequence will be a match for your specified pattern only if all of the intervals are equal to the values you have selected.

If you select the greater than sign, then all intervals larger than the value you have indicated will produce a match.

By clicking on more than one symbol at a time, you can specify the following logical criteria: 
 - greater than
 - less than
 - equal to
 - less than or equal to (both the less than and the equal symbol are highlighted)
 - greater than or equal to (the greater than and equal symbols together)
 - not equal to (the greater than and less than symbols, but not the equal symbol)
- any interval (all three highlighted)

This last option appears a bit silly, but it could be useful, for example, to vary the third note before any interval of an octave, no matter what the intervening intervals might be.

## Use if Match & Use if no Match 

The Use if Match and Use if no Match buttons tell the program what to do when it finds a pattern that matches your criteria.

If you select Use if Match, then notes will be varied only in the patterns you have selected. If you select Use if no Match, patterns that match your criteria will be protected, and notes in all other patterns will be varied.

## Split/Pattern Use Whole

This button overrides the setting of the note symbols in Pattern the pattern row.

When Use Whole Pattern is selected, each note to be varied will be tested to see if it can be the first note of the selected pattern. The variation process you have specified in your Vary Notes preset will be applied not to the single note indicated but to all of the notes in the pattern as if they were a single note. (Since a pattern must consist of more than one note, the total number of notes varied by the preset will usually be several times larger than the number specified by the Changes per Vary parameter or the weight parameters.)

By specifying a pattern in which all of the arithmetic test icons are highlighted, you can specify that the same random change or Set Value operation will be applied to up to eight consecutive notes.

Note that the Use Whole Pattern feature cannot be used with Swap and Copy operations.

## Extend

The Extend operation causes the program to test the notes of the pattern as before, but to continue to recognize as part of the pattern any additional notes that pass the test you specify under the last interval (the one at the right end of the pattern row). This allows you to process a longer pattern, if it consists of some regular shape such as rising or falling intervals, for as long as it lasts.

If Extend is selected, the first note in the pattern will always be the one that is varied; the note button is overridden.

If any of these options other than Off is selected, all of the other screens that control Vary Notes presets will display the words Using Preset to the right of the GENERAL OPTIONS label.

## Velocity Intervals

This switch is used to test for patterns in note velocity rather than pitch. As with pitch, the velocity intervals test is applied not to individual velocities but to relations between adjoining pairs of velocities.

 > Figure 9 (Original PVG docs page 63) Pattern selection screen to process notes only if their pitches are different from the pitches of the preceding AND following notes.

## SPLIT & Delete Split Notes

In addition to the OK and CANCEL exit buttons found on every screen, the Split/Pattern screen has a SPLIT button.

When you tell the PVG to perform a SPLIT operation, it checks all of its PROTECTION parameters, including the pattern matching if this is active, and copies all of the unprotected notes to a new sequence.

If you switch on Delete Spilt Notes, the copied notes will also be deleted from the original sequence. Since the protection criteria are quite diverse, you can easily split material of a number of different types, such as notes with long or short duration or notes of a given pitch or pitches, and park them in a sequence by themselves for further editing.