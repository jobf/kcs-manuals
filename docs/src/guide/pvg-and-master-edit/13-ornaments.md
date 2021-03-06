# Chapter 13 - Ornaments

[[toc]]

Up to now, we've been looking at PVG operations that maintain a one-to-one correspondence between the notes of the starting sequence and the notes of the newly created sequence. The notes may be so jumbled or transformed as to be unrecognizable, and a number of variations may be strung together so that the total number of notes increases, but no new notes will be added to the material during the course of any single variation.

Adding new notes, however, is one of the basic ways that musicians vary their material. Doing an entire 32-bar improvised chorus is beyond the scope of the PYG (though some other computer software can do this). What the PVG can do is add new notes around existing ones, using Ornaments presets.

In its most basic usage, the ornaments function can add grace notes or trills to randomly or non-randomly selected notes, much the way a human musician would. You'll find, however, that the ornamentation process can create passages of startling complexity and beauty.

Note that, unlike some of the ornaments performed by human musicians, PVG ornaments never alter the basic value of the notes being ornamented. A triple grace note that lies across the beat, for example, will not cause the main note to start later and have a shorter duration. If you want this effect, you have two choices: Either time-shift and shorten the main note manually on the edit screen, or use the PVG Global screens to edit all of the notes you're planning to ornament before performing the ornamentation. (When notes to be ornamented are being selected at random, only the first process can be used.)

The ten columns on the upper side of the Ornaments screen are used for defining up to ten ornamental notes, which will be added in relation to existing notes in the sequence.

The meanings of the entries under Pitch, Velocity, and Duration will be affected by the settings of the switches immediately below, at the left center of the screen.

PROTECTION and GENERAL OPTIONS apply to the ornament process exactly the way they do to any other type of variation. When Changes per Vary is set to 0, the program will add ornaments to all unprotected notes. When it is set to some value greater than 0, unprotected notes will be chosen at random for ornamentation.

## Offset & Delay

These two settings together determine the rhythmic shape of the ornament.

Offset is the starting time of the ornament in relation to the note being ornamented, and can be either positive or negative. For a simple grace note, you might use an Offset of which (at normal clock resolution) would cause the ornament to start a sixteenth note before the malu note.

The numbers entered in the Delay row determine the starting times of the notes in the ornament in relation to the offset time. All delay times must be positive; that is, the notes in the ornament cannot start before the beginning of the ornament.

A delay time of 0 will cause a note to start precisely at the offset time, while larger delay values will cause notes to start correspondingly later. Note that this system does not force ornament notes to fall immediately before or during the sequence note that they are "ornamenting." They can be offset by relatively large amounts, resulting in less-than-obvious musical relationships. If a large negative offset would cause ornament notes to fall before the beginning of the sequence, they are not generated.

Note also that there is no requirement that the ornament notes be listed on the table in direct rhythmic order from left to right. Normally you will probably want to set the delay of the first note to 0 and use ascending delay amounts as you move to the right; this will make it easier to keep track of what is going on in your ornament. But if you should want to try out the notes of an ornament in some other order, you don't need to retype them from scratch: Simply enter new delay times.

Entering identical delay values for several ornament notes will cause them to be played as a chord. Pitch, Velocity, Duration & Channel Values entered in the columns on the Pitch, Velocity, and Duration rows can be either absolute or relative to the note being ornamented.

When Follow is highlighted for that parameter type, they are relative; when Fix is highlighted, they are absolute. For example, when Follow is switched on for Pitch, entering a 2 under Pitch will cause an ornament note to be generated a whole-step (two half-steps) above the note being ornamented. When Fix is switched on, however, a 2 will cause MIDI note 2 (D-1) to be generated. In the same way, a value of -6 under Duration will cause the ornament note to have a duration 6 clock units shorter than the note it is ornamenting.

## Pitch, Velocity, Duration

Pitch, Velocity, and Duration values can be either positive or negative; but obviously, negative settings are more useful when Follow is selected. Fixed negative values would be meaningless, so the program sets any "negative" notes to the lowest permissible values (unless you select Cut, as described below).

## Channel

The function of the Channel parameters should be obvious: Using these, you can assign each ornament note to its own MIDI channel.

This might be useful for exotic effects, or for layering one or more of the notes in an ornament with a sound from a second module. When there is no entry under Channel, all ornament notes will default to the channel of the note that they are ornamenting,

## Cut

When Cut is switched on to the right of the Velocity or Duration Fix/Follow switch, ornament notes that have negative velocities or durations will be eliminated.

When Cut is switched off, these notes will still appear in the output sequence, but will have a velocity or duration of 1.

## COPY

There may be times when you would like to use a bit of material that is already recorded in a sequence as ornamentation for this or some other sequence.

You can load the ornament table automatically by clicking on COPY. The table will be loaded with the notes at the beginning of the current sequence, or the current range if one is lit up on the edit screen.

The program will set up the ornament table so that the first ten notes after the first (that is, notes 2 through 11) would be added to the first if the ornamentation process were applied to it.

The copy will stop before ten notes if it encounters something other than a note (such as a program change or controller message) in the sequence or range. The program checks to see whether you have selected Fix or Follow, and loads the table accordingly.

## Loop, Length & Shift

There may be times when you want an ornament to Shift consist of a small number of notes that are repeated several times. (For example, a trill consists of two notes repeated several times.)

To do this, simply enter the note group once in the ornament table, and then enter the number of times you want this group to repeat under Loop.

The Loop value must always be at least 1; if it were 0, no ornament would be generated.

The Length parameter is used to specify how far apart the iterations of the loop will be. (It does not actually determine the length of the ornament, which could be longer or shorter.)

For example, if Offset is set to -24, Loop to 4, and Length to 6, the program will generate four identical ornaments for each note that it acts on, one starting 24 clocks before the note, one 18 clocks before, one 12 docks before, and one 6 clocks before.

The values under Shift determine how each iteration of the loop will relate to the previous one. For example, if you want an ornament to start with low velocities and get louder each time it is added to the sequence, you should use a positive shift value in the Velocity row.

Shifting the pitch will cause each successive ornament to be higher or lower than the one before; with large loop values, you can create some wonderful cascading effects using Shift.

 > Figure 10 (Original PVG docs page 71) Preset to echo all # notes every 6 time steps until the next note, or the end of the sequence, is reached. The first note will create a velocity 12 steps higher than the original, but each subsequent note will have its velocity reduced by 12. The echo notes will be stored in the next available sequence.

## Mod & Max

There may be times when you want the number of loops in the ornament to depend on the material being ornamented.

For example, you might want to attach long trills to high notes and shorter trills to low notes, or add longer ascending glissandi to notes with low velocities than to those with high velocities. In this situation, you will use the Mod and Max (modulation and maximum) parameters.

Mod and Max apply only to the looping process, not to single ornaments. The number of loops can never be greater than set by the Loop parameter.

Modulation will have the effect of making the number of loops smaller.

The value under Max is the point in the velocity or pitch range beyond which you want the modulation to have little or no effect. For example, entering a Max of 60 under pitch makes Middle C (MIDI note 60) the upper or lower limit of the modulation.

When the Mod value is negative, notes above the Max will be modulated (that is, be ornamented with fewer iterations of the loop), while those below the Max will be relatively unaffected. When the Mod value is positive, notes lower than the Max will be modulated.

For more predictable results, we suggest that you experiment with various Mod and Max settings using a test sequence consisting of a single pair of notes, one high and one low in either pitch or velocity. Once you're clear what effect the settings have with two notes at the extremes of the range, fill in some additional notes in the middle and note how the curve operates.

## Split

This flag, when highlighted, causes the ornaments to be stored on the next available sequence or track rather than on the original. One variation is created, and the Variations, Overwrite Original, and Edit Mode settings are ignored.

## Extend

This flag allows new notes to be added that would fall after the end of the original sequence or track.

## Next Note Lim, Duration Lim, Abs

These flags are used to control in various ways whether or not the looping material will extend past the end of the note being ornamented.

When Next Note Lim (limit) is switched on, no new loop will be started after the beginning of the note following the ornamented note, no matter how many loops the program is set to create.

When Duration Lim is switched on, no new loop will be started after the end of the current note (that is, after its duration is complete).

The two Abs (absolute) flags are similar in function to the flags immediately to their left.

While Next Note Lim prevents a new loop from being started after the beginning of the note following the ornamented note, it does not shut off the current loop, which may continue sounding for some time, depending on how many notes are in it. The adjacent Abs flag, on the other hand, will shut off the current iteration of a loop, at whatever point it may have reached, when the new note in the sequence is reached.

The Abs flag next to the Duration Lim flag does the same thing with reference to the current note's duration - that is, it shuts off the current iteration of the loop whenever the note being ornamented ends. The duration of ornament notes is not affected by the shut-off, however.