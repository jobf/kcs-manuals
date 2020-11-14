# Chapter 4 - Protection

[[toc]]

There will often be portions of a sequence that you don't want affected by the PVG. For example, you might want each variation to begin with the same set of notes and diverge thereafter. Or you might want to exempt the low notes, in order to keep a bass line intact while the chords above it are being varied.

This is what the PROTECTION sub-screen is for. (If you want to protect events that fall in cyclic rhythmic relationships, you'll need to use a macro rather than the PROTECTION parameters.)

The PROTECTION section appears whenever you click on Swap/Copy, Set Values, Global 1, Global 2, Split/Patra, Ornaments, or Add Cntrls in the menu. Protection is also active when the Changes screen is being used, even though the PROTECTION area is not visible.

Protection would be pointless in the controller variation process, since it protects notes, not controller events.

Entire events are protected by the protection feature, not the individual data (note number, time, duration, channel, and velocity) that make up the event. If you're using the PVG to alter some pitches and some velocities in a single operation, and you have protected the F#s, then if a note happens to be transposed to F# during the course of an evolving mult, neither its pitch nor its velocity will be varied by later operations.

The protection tests are applied to a note's current values (which may already have been modified in the course of creating a variation), not to its original values. Certain operations, such as interval changes in the Changes section, can move a note from a protected pitch to an unprotected pitch - after which it might be varied further by some later operation.

## Probability of Protection

The number just to the right of the word PROTECTION on the screen is a probability factor with a range from 0 to 10. When this is set to 0, the data in the PROTECTION section will have no effect, no matter how it is set. When the probability factor is 10, the events you choose to protect will absolutely be protected. When the factor is 5, protected events have a 50% chance of being protected. In other words, they will have 50% less chance of being chosen by a random operation than unprotected events. The probability factor is not applied to the protection of events at the beginning and end of the sequence under First and Last. These events will be absolutely protected in all cases. The probability factor can be used in conjunction with global changes to protect some notes (chosen at random) but not others. This essentially defeats the nature of global changes, forcing them to operate pretty much like the usual random changes.

## Scale Positions

Clicking on any of the note names in the PROTECTION sub-screen, causing it to be highlighted in inverse video, protects all notes with that pitch. To clear the display, click on the X to the right of the note names.

## R (Reverse)

To the right of each line in the PROTECTION section is a letter R. This is a switch. When you click on it, it reverses, or logically inverts, the effect of the corresponding line.

For example, if you have selected MIDI channels 3 and 7 under Chn, notes that fall on channels 3 and 7 will be protected, while all other notes will be fair game for the PVG's processes. If the R to the right of Chn is highlighted, however, all notes except those on channels 3 and 7 will be protected.

## First & Last

Enter here the number of events at the beginning and end of the sequence that you want to be exempted from the variation process. If you have highlighted a range of notes in the edit screen before entering the PVG, you will notice that the limits of the range appear initially in the First and Last data fields.

If you have edited these numbers and would like to get them back, click on the RANGE button at the bottom of the screen. Note: While the PVG's Vary Note presets do not vary non-note events (such as program changes at the top of a sequence), these events will be counted in figuring out what range you want to vary.

## Chn

Here you can specify one or two MIDI channels; events on these channels will be protected (or exempted from protection by clicking on R to reverse the operation).

Note that while the rest of the parameters in this column specify ranges of values to be protected, the data entered beside Chn refers to specific numbered channels, not a range of channels. If you would like to protect notes on a number of channels, use the R switch.

If you have a track with data on a number of channels, you can unmerge it into separate single-channel tracks by making several copies of the track, protecting the channel you want to keep in a given track, and using the Erase parameter on the Global 1 Screen to get rid of everything else.

Single channels can also be split off by protecting all other channels and using the SPLIT button on the Split/Pattern screen.

## Pit

Enter the lower and upper limits of the pitch range that you would like protected. Use note names and octave numbers (such as C3 - F#4). If you enter a pitch in one data field but not the other, the other will be set to its extreme limit.

Vel, Dur, & Tim Data entered in these fields will have exactly the same effect with respect to velocity, duration, and time values. That is, events in a sequence whose values for any of these parameters fall within the protected range will not be varied. Protecting time or duration values might be an easy way to edit or vary certain portions of a sequence in a way dependent on the rhythm.

 > Figure 1 (Page 28 original PVG manual) PVG preset to erase all A#'s and C#'s with velocity less than 96.

## Int & VInt

The range of values entered in these fields will protect a note when its interval or velocity interval (velocity shift) with respect to the preceding note falls within the selected range. For example, protecting an Int range from 6 to 8 will prevent the program from making any changes in notes that are an augmented fourth, perfect fifth, or minor sixth above the preceding note. Falling intervals must be protected by negative numbers. Data entered under Int and VInt will have no effect unless you click on the Int or VInt abbreviation itself to switch it on.

## NTim, NInt, & NVIn

These parameters operate exactly like Int and VInt, except that the program determines whether or not a note is protected by checking its relationship with the following note.

Values entered under NTim will protect an event when the time of the next event (NTim means "next time") falls within that range. If you have improvised a number of quick phrases with long pauses between them, you might use NTim to protect the last note in each phrase, since the following note would have a large time value.

NInt works exactly the same way with reference to the interval relationship between the note about to be varied (or protected) and the following note.

NVIn checks the velocity interval between the current note and the following note. Nint and NVIn must be switched on by clicking on the abbreviation itself.

 > Figure 2 (page 29 original PVG manual) Preset to randomly set velocities of notes with rising intervals, i.e. notes with a pitch greater than that of the preceeding note. The first and last three notes of the sequence are not changed. 7 evolving variations are created, with two changes per variation.
