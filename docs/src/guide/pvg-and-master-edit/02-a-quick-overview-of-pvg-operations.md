# Chapter 2 - A Quick Overview of PVG Operations

[[toc]]

When you click on PVG in the KCS edit screen, you will find yourself looking at the first of a number of screens that are part of the PVG. You use the PVG by clicking on one or more of the data fields that appear on the screen and then typing numbers from your computer keyboard or incrementing them by clicking the mouse on the arithmetic strip in the lower left corner of the screen.

After entering whatever data you need for your current operation (or recalling a preset that contains the appropriate data), simply click on OK in the lower right-hand corner of the screen, and the pvg will do its thing. When it's finished, it will return you to the edit screen, which now displays the variation that has just been generated, or the last variation in a series of new ones.

If you decide not to create a variation, click on CANCEL instead of OK, and no variation will be generated. 

NOTE: If the PVG is unable to perform your operation, an error message (such as "Track or sequence contains no unprotected notes!") will appear at the bottom of the screen. In this situation, clicking on CANCEL will have no effect. Don't panic. Simply press any key on the computer keyboard, and make whatever changes are necessary.

The PVG will always perform its operations upon whatever track or sequence was in the edit screen just before you clicked on PVG (or upon a region that you have selected within that track or sequence). All of the operations of the PVG (except in-betweens) can be performed on either a track in Track mode or a sequence in Open mode.

In this manual, to avoid confusion, we will refer to source and destination material as sequences.

## Presets

The most basic way of using the PVG is by entering values in the various fields each time you want to create a variation. If you do that, you'll be treating it simply as a variations generator. The "programmable" part of the name should hint that there is more to the software, however.

All of the values that you have entered can be saved together as a preset. The PVG will holdup to 80 presets in memory at a time - 20 each for;

 - varying notes (the first six screens)
 - creating ornaments
 - varying controllers
 - adding controller

You can think of PVG presets as being like the programmable preset sounds in a synthesizer. The most important difference is that in a synthesizer preset, you will normally want to special data values for most or all of the parameter. A typical PVG preset, on the other hand, might contain data for only one or two of the hundreds of parameters, and few presets will be likely to contain data for more than a dozen.

There's no need to use the programmability of the PVG if you don't want to. With a couple of exceptions, all of the data entered in its active buffer (the data displayed when you call up its various screens) will be remembered by the program when you exit back to the edit screen, and will still be there the next time you click on PVG.

If you want to get rid of the data to start building a preset from scratch, simply click on the CLEAR button, which appears in the lower right corner of most of the PVG screens.

Clearing is highly recommended, by the way: Because a single Vary Notes preset in the PVG fills up a number of screens, any stray bit of data left hanging around on a screen that you're not using for your current operation can and will cause drastic unforeseen complications in the results of an operation.

## Macros

Beyond the level of presets is a still higher level of operation called macros. A macro is basically an ordered list of up to 16 of the existing presets, along with a table of data telling where and how the presets will be used. This is the most complex and flexible editing environment found in the KCS (or in any other sequencer that we know of).

Macros allow you to do things like change the velocity or transposition of all notes that fall on selected beats of the bar. The PVG will store 20 macros, just as it will store presets.

A macro can contain presets of any type. A macro does not contain the information in the presets, however; it contains only a list of preset numbers, along with some other information. If you overwrite one of the presets in memory with a new one, you will change the effect of any macro that uses that preset.

The PVG is shipped with a selection of basic editing presets and associated macros. The current set of presets and macros can be stored to and loaded from disk.

## The PVG Screens

If you haven't loaded the KCS, please do so now. In this section, we'll take a quick look at the various modules and features within the PVG. Then, in the following sections, we'll examine each of these modules and features in detail.

The first time you call up the PVG, you'll find yourself in the Changes screen.

Across the upper half of the screen are rows and columns of data fields. These are used for making randomly placed changes in the musical elements listed along the left edge (Pitch, Velocity, Duration, Time, Shift, and Interval).

Below this grid are two other areas, one labelled RESTRICTIONS and one labelled GENERAL OPTIONS.

As in the rest of the KCS, clicking on a word that's green will highlight it black letters in a green rectangle). This is how options are switched on and off. In some cases, several adjacent words can be highlighted at the same time. In other cases, they may function like the buttons on a car radio: Pushing one in will cause another to pop up. We will use the terms "button" and "switch" to refer to these words.

The green word in the lower right-hand corner, however, is a bit different. It's the name of the current preset. Clicking on any letter of this will allow you to type in a new name.

When the visual cursor is on a data field (one of the numbers or empty horizontal underlines), the red arrows at the lower left, called the arithmetic strip, can be used with the mouse as an alternative to typing in values. Again, this system works just the way it does in the rest of the KCS. Clicking on one of the end diamonds will move the parameter to the end of its allowable range, clicking on one of the single arrows will move it by a single increment, and clicking on a double arrow will move it by some larger value, usually by tens.

Along the right side of the screen is a menu that lets you move from one screen to another. Try clicking on various items here to take a quick look at the other screens. You'll find that the GENERAL OPTIONS area is found in all of the screens that are used for editing presets. In most of the screens, the RESTRICTIONS area is replaced by a similar area called PROTECTION. In the Vary Controllers screen, both PROTECTION and RESTRICTIONS appear in an abbreviated form.

While the entire screen blacks out and is redrawn when you move from one menu selection to another, it's important to understand that there is only one set of data under PROTECTION and one set under GENERAl, OPTIONS. For example, whatever data you enter under PROTECTION while on the Swap/Copy screen will still be displayed when you switch to Set Values. For that matter, the same data will still be there if you go off to the Macros screen or the KCS edit screen and then come back.

The changes made in your sequence in the Changes screen mostly have to do with shifting musical values up or down (or, in the case of time, forward or backward) by various amounts. In general, you will specify the amounts, and the PVG will randomly select which notes the changes will be applied to.

The RESTRICTIONS data fields are used to tell the computer what random values you don't want it to generate. For example, if you click on the black-key accidentals (A#, C#, D#, F#, and G#) in the note list, all pitch change operations will produce pitches within the white-key C major scale. There are many operations that restrictions don't apply to, so don't be too surprised if you wind up with some black-key notes in your variation even though you're using the restrictions just mentioned.)

The Defaults dialog box which appears when you click on Defaults in the menu, is used mainly to tell the program what data you would like loaded into the RESTRICTIONS area automatically when you enter the PVG.

The PROTECTION options look superficially similar to the RESTRICTIONS, but are somewhat different in their effects. Protection is used to specify notes in the sequence that you don't want the computer to alter under any circumstances. For example, if you click on the black-key notes, as before, the result of pitch change operations will be that notes can change from one white key to another, or from a white to a black key - but once a given note has become a black key, it can't change any more.

NOTE: In general, protection applies to an entire note, not to the individual data elements that make up the note. In other words, if your preset is randomly changing both velocities and pitches and you have specified protection for some pitches, once a given note has been transposed to one of the protected pitches, its velocity also becomes protected, and will not be changed by any subsequent randomizing operations of this preset.

The GENERAL OPTIONS data fields specify how many changes the PVG will make when it is activated, where the results will be stored, and a few other things. 

The Swap/Copy screen is used for copying data from one part of the sequence onto another part, or for trading (swapping) data between two parts. You will specify the type and amount of data, and the PVG will determine exactly which notes in the sequence to copy or swap with which other notes.

In the Set Values screen, the computer is again deciding exactly which notes of the sequence to alter, but the nature of the result is being completely controlled. Instead of transposing the original pitch of the note up or down by some fixed or random amount, for example, which would be done on the Changes screen, in the Set Values screen the program would replace the original pitch with whatever specific pitch the user had entered. The operations defined by the Global 1 and Global 2 screens are applied not to single notes chosen by the computer, but to the entire contents of the sequence (except to whatever notes are protected by the PROTECTION parameters).

Global operations are used more often in deterministic editing than in generating variations, but they can also be used quite effectively as elements in a complex variation process controlled by a macro. The Split/Pattern screen is used for making complex logical tests.

The INTERVAL PATTERN SELECTION section allows you to define pitch or velocity patterns of up to nine notes and tell the program which note within the pattern to vary. Pattern testing can be used in presets of the Vary Notes type; essentially, the testing is an extension of the tests set up in the PROTECTION area.

The Ornaments screen allows you to add new notes to a sequence. The new notes that are added will have some user-defined relationship to existing notes. The program can add new notes to randomly selected notes within a sequence, or to all unprotected notes. The term "ornaments" suggests turns, appoggiaturas, and trills, but a PVG ornament can be defined in other ways as well - for example, a chord of specified type can be added, or unison doubling on another MIDI channel.

The Add Controllers screen can be thought of as providing another type of ornamentation. Instead of generating new notes around an existing note, it generates controller messages, which might be used for pitch inflections or just about anything else that your synthesizer can do when it receives MIDI controller data.

The Vary Controllers screen is used to make changes in the existing controller events in a sequence. Changes made here can be either global (that is, applied to all the events of a given type) or single (applied to only one event at a time).

The Macros screen is used for assembling lists of presets to be used in a single PVG operation.
