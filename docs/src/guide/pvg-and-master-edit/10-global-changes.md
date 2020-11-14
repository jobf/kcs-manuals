# Chapter 10 - Global Changes

Two different screens allow you to make changes to all of the unprotected notes of a sequence. Unlike changes to single notes, global changes do not necessarily involve randomness.

If a global change is the only change with a weight, or if a group of global changes have weights and the Changes per Vary parameter is set to 0, then all unprotected notes will be changed in a deterministic manner. 

Global changes can be used to generate variations; one way to do this is to set a PROTECTION value of 5 and then protect some of the scale steps.

Global changes can also be used to make complex edits. For example, protecting all of the scale steps belonglng to a particular key and then transposing by a half-step (using a global pitch change) would bring any non-key notes up or down into the desired key relationship.

Presets containing only global changes can also be used as part of macros to perform quite complex edits on sequences, or to create macro variations. (See Chapter 17 for more on macros.)

To use a global preset to edit a sequence, click on Edit Mode under GENERAL OFIlONS. (This is equivalent to specifying 1 VariatIons, 0 Changes per Vary, and Ovenwrlte Original.) Select the desired operations by glving them weights, and then protect the notes that you don't want to edit (using a PROTECTION factor of 10).

If your keyboard playing is sloppy, you can use global editing to eliminate any double-struck notes in a single-line sequence. Simply protect all notes with times larger than 2, and then select Erase in the Global 1 screen.

If you want to emphasize certain notes in the scale, protect the other notes and then transpose the velocity up, or set it to a high value.

If you would like to double some of the notes in a line on a second MIDI voice module, copy the sequence, protect the notes you want to double, and then use global Erase (in conjunction with a global channel change, if desired).

## Global 1

The options on this screen are used for making the indicated type of change, either a transposition or an inversion in pitch, velocity, or duration, or time reversal or Delete or Erase operation.

### TRANSPOSES & INVERSIONS

These two areas of the Global 1 screen perform similarly to the equivalent functions in the KCS. (While two columns of amounts and weights are provided for each type of change, only one column will be needed if Changes per Vary is set to 0.)

Under INVERSIONS, a CENT (center) value is used to indicate the pivot point across which all values are to be mirrored. For example, a center value of 60 for Velocity would cause a note velocity of 59 to be changed to 61, a note velocity of 70 to be changed to 50, and so on. Center values for pitch must be entered as MIDI note numbers. (C4, which is Middle C on a standard 5-octave MIDI keyboard, is note number 60.)

 > Figure 9 (Original PVG manual page 54) Preset to increase the velocity and duration of all Cs, Es, and Fs

### Time Reverse

This parameter does exactly the same thing as the Time Reverse switch in the Transpose/Auto section of the KCS edit screen: It reverses the order of the events in the sequence.

There are two reasons for duplicating the function in the PVG. First, when Changes per Vary is not set to 0, entering a weight under Time Reverse causes some probability that a reversal will take place. And second, the PVG Time Reverse operation can be used in conjunction with the staccato/legato switch, which will change the durations of all the notes in order to preserve their relation to the following note (which used to be the preceding note).

### Delete & Erase

As usual, the numbers entered in these data fields are weights. Obviously, if you're using a single preset to create a variation, you will want to protect some notes when using Delete or Erase. If you don't, the variation will have no notes in it!

Delete and Erase presets can be used creatively in macros to comb notes at selected bar or step positions out of a sequence.

## Global 2

The functions available on the Global 2 screen are more complex editing functions which have no close analog in the original KCS. All the data types that make up an ON event can be set to a fixed value, or parameters may be rotated or reversed within the sequence.

### SET VALUES

Entering a weight in any of these fields will cause all unprotected notes to be set to the specified value. For example, you could set all occurrences of a particular pitch to a given MIDI channel by protecting all the other pitcheL By performing such an operation several times, you could turn a one-channel sequence into a massively poly-timbral sequence.

 > Figure 9 (Original PVG docs page 56) Preset to put all notes with pitch above C5 and with velocities greater than 100 on MIDI channel 2.

### ROTATE VALUES

A weight in either of the ROTATE VALUES columns will cause all of the values in the source sequence to be shifted downstream by the number of event-steps under CNT (count)

 As usual with Rotate operations, protection is applied to any notes specified under First and Last, but no protection is given to anything else.

If your source sequence contains a fair amount of variety, using several global Rotate operations at a time with different count values can be an interesting way to generate variations. Simply give each Rotate amount a weight of 1, and set Changes per Vary to 0. (Since these operations will be performed globally, you will get the same results every time you use the preset, so use Evolving Mults to get a constantly changing result.)

### TIME REV

The right-hand column of weights in the Global 2 screen is used to generate Time Reverse operations for the corresponding data type (pitch, duration, etc.). Creating a number of consecutive, evolving mults while time-reversing all of the values allows you to turn a short group of notes into a "back-and-forth loop."

The major difference between this type of time reversal and others in the KCS is that here, the order of only a few of the parameters that make up a sequence are reversed, rather than reversing the order of the notes themselves.
