# CHAPTER 3 - Open Mode Editing Tutorial

[[toc]]

The  purpose  of this tutorial is to familiarize the first time user of the
KCS with the program's Open and Track mode edit screens.  The tutorial also
provides introductions to the program's representations of various types of
musical  events,  and  to creating and editing control sequences.  The "raw
material"  for  the  editing tutorial consists of three previously recorded
sequences, which are to be loaded from disk.

If you have a multi-timbral synthesizer system, set it up with a buzzy clav
voice  on  channel  1,  a bass on channel 2, and some type of reed or fluid
lead  synth sound on channel 3.  If your synth isn't multi-timbral, set its
MIDI  receive  mode to Omni On/Poly.  If you have a drum machine, set it to
synchronize  to MIDI clock, disable the reception of MIDI channel messages,
and select a simpIe 4/4 pattern.

Now boot the program as described at the end of Chapter 1, and you will see
the  Track  mode  record  screen.   Since  we  will  be  editing  Open mode
sequences,  the  first step is to move to the Open mode edit screen.  Click
on the EXIT button in the lower left part of the screen, and the Track mode
edit screen will appear.

The  Track  mode  edit screen is very similar to the Open mode edit screen,
but  only  tracks can be edited in Track mode, not sequences.  On the right
side  of  the  screen is a list of editing options.  Click on the OPEN MODE
option,  in  the  lower  right  corner,  and the Open mode edit screen will
appear.

Now the sequences to be edited must be loaded in from the disk.  Place your
program  disk  in  the disk drive, and click on the LOAD/SAVE option on the
right  half  of the screen.  A dialog box will appear, and will ask you for
the  file  type  you  wish  to access, the drive to use, and what action to
perform!.   Confirm that the sequence type selected is .ALL and that the A:
drive  is  selected  if  you're  using  an  Atari.   If  not,  change these
selections  by  clicking on the appropriate box.  Click on LOAD, and a file
selection box will appear.

Click on teh name of the file to be loaded (EDITTUTR.ALL) and click OK.

Once the file is loaded, the program will return to the
edit screen which should now look like This:

The  edit screen is divided into two major sections:  the edit options area
on the right side of the screen, and the event list on the left half of the
screen.   The  event  list  displays  the  actual  data  which makes up the
sequence, and the edit options are used to select editing operations, or to
move  other  parts  of  the  program.   There is also a message line at the
bottom  of  the screen, which displays information and prompts when an edit
option  is  selected, and a set of select boxes below the edit options, for
moving to another sequence.

The  edit  cursor,  the  small solid square in the upper left corner of the
event  list, is used to select an event for editing or to set the beginning
or  end  of  a  range of events.  It can be moved to any point in the event
list  by  clicking  on the ncw position, or it can be moved with the cursor
control  keys.   Practice moving the cursor around the screen with both the
mouse and the cursor control keys.

The  edit  screen can only display 21 events at a time:  other parts of the
event  list  can  be  accessed  by  scrolling through the list with the red
scroll arrows, located on the left edge of the event list.  Clicking on any
of  the  top  three sets of arrows will move the diplay window up the event
list,  and  clicking  on  the  lower  sets  moves the window down the list.
Clicking  on the scroll diamonds above or below the scroll arrows will move
the  window  to  the  top  or bottom of the event list, and clicking on the
middle diamond will cause continuous scrolling.  Practice scrolling through
the event list with these controls then return to the top of the list.

Before  editing  sequencc 1, we want to play it through a few times to hear
what  it  sounds  like.   Double click the right mouse button, and the Open
mode  play  screen will appear.  Press the 1 key on the typewriter keyboard
and sequence 1 should start playing on MIDI channel 1.  After listening for
a bit, return to the edit screen by pressing F1.

Sequence  1  sounds  interesting, but is too repetitive, and is out of sync
with  the  drum  machine  and metronome.  To correct these problems we will
adjust  the  timing  of the sequence, shorten it, and make a few changes to
the second repetition of the sequence.

Before doing any editing on the sequence, it's a good idea to make a backup
copy Click on BACKUP, and a confirmation message will appear in the message
line.  Clicking on GET BACKUP will swap the backup and the edited sequence,
for  qufck comparisons.  After you're sure you're done an editing operation
correctly,  make  a  new  backup  so  that you won't have to redo the whole
tutorial if you accidentally mangle the sequence.

The  timing  of  the  sequence is controlled by the data in the TIME field,
which  is the third column in the event list.  Each entry in the TIME field
represents  the  number  of clock steps which go by before the remainder of
that  event occurs.  One quarter note equals 24 clock steps so a TTME value
of  12  means  that an eighth note's worth of time goes by before the first
note  in  this  sequence  piays;  in other words this sequence starts on an
offbeat,  namely the second haaf of the first beat of the measure.  This is
why the sequence doesn't sync properly with the metronome.

Place  the  edit cursor over the first digit of the first value in the TIME
field,  type  a  space,  and  look  at the screen.  The white box which now
outlines the first event indicates the data that can be edited.  The CURSOR
LEFT  and  CURSOR RIGHT keys, as well as the TAB and SHIFT-TAB keys@ can be
used  to  move the edit cursor within the box; experiment with these keys a
bit,  then place the cursor over the 2 in the TIME field, type 0, and press
RETURN (not ENTER).

When  RETURN  is  pressed  all the entries in the MSR-ST field will change.
This  field  marks  the location of each event in measures and clock steps.
Note  that  the MSR-ST field now reads 1-1 for the first event, which means
that the first note now occurs on the first step of measure one.

Since  the  essential  theme of this sequence repeats every measure, we can
delete  all  but the first measure of the sequence.  The first event of the
second  measure  is event 13; the event number is listed in the EVNT field.
Click  on  event 13, then while holding the left mouse button down move the
mouse  pointer  all  the  way down to the area between the end of the event
list  and  the  message  line.   The list will scroll down when the pointer
moves  below  the  event  list;  when  the highlight reaches the last event
(event  43)  in  the  sequence,  release the mouse button.  The highlighted
region  has  now  been selected for editing.  (You may need to "jiggle" the
mouse a bit at the end of the event line, to highlight event 43.)

The highlighted portion of the sequence can be played by clicking the right
ouse  button.   Do  this  now  and note that the measure/step display and a
message appear at the bottom of the Screen.

Now  click  on  DELETE in the edit options area.  A dialog box will ask for
the  range of notes to be deleted, which defaults to the range that we just
selected.   To delete the selected range, click on OK.  Clicking on UNDO at
this point will swap the sequence with a backup copy that was automatically
created  as  part of the DELETE operation.  Click on UNDO again to retrieve
the edited version.

Return  to  the  Open  mode  play  screen by double clicing the right mouse
button,  and press 1 on the typewriter keyboard.  The sequence starts okay,
but loses sync at the start of the first repetition; something is obviously
not  right.   Press Fl to return to the edit screen and look at the data in
the  MSR-ST field.  The sequence ends on measure 1, step 85, which makes it
84  steps long; but a full measure of 4/4 time at 24 steps per quarter note
is  94  steps.   The  sequence  must  be  extended by 12 steps if it[ is to
synchronize properly with the drum machine.

To  add  an  event to the end of the sequence, place the cursor in the TIME
field  immediately  below  the  last event in the list, and enter 12.  Move
over to the TYP field and type DE.  The screen should now look like this:

The  data  on the TYP field indicates the event type.  All the events up to
this  point  have been ON events, which represent note on and off messages.
ON  events  make  up  the  majority  of  most sequences.  The DE event is a
"deleted  event",  a dummy event in which nothing occurs except the passage
of  time.  When used at the end of a sequence, it sets a time delay between
the  occurrence  of the previous event, and the start of the next sequence.
Press RETURN, go to the play screen and play sequence 1.  Everything should
sync properly now.

Upon  listning  to  the  sequence,  it  seems that it might make a bit more
musical  sense  to double its length and make a slight change to the second
half.   We'll  do this by first copying part of the sequence into the paste
buffer, and then pasting it at the end of the original sequence.

Since  there  is  no  need  to duplicate the DE event, we only need to copy
events  1  to 12 into the paste buffer.  Place the edit cursor on event l2,
and highlight the events from 1 to 12 by holding the left mouse button down
and  moving the mouse pointer to event 1.  (This is known as "dragging" the
mouse).   Click  on COPY and an edit window will appear on the screen.  The
default  parameters  will  work  for this operation, so click on OK.  These
events are now stored in the paste buffer.

Move  the  edit  cursor  to event 13, and click on PASTE.  A rather complex
edit  window  will  appear  for  the  moment,  just  confirm that INSERT is
selected in the upper left corner, and enter 12 for FIRST EVENT TIME.  This
is  to  made up for the DE event and its associated TIME value that weren't
copied.   Click  on OK and move to the end of the event list by clicking on
the bottom scroll diamond.  The screen should now look like this:

If  your  sequence doesn't end with a DE event on MSR-ST 3-1, retrieve your
backup copy and go through the cut and paste proeedure again.

The  last  step  in  editing  sequence  1 is to make a slight change in the
second  measure  by  erasing the last note in the sequence.  Place the edit
cursor on event 24, and click on ERASE.  When the dialog box appears, click
on  OK to erase event 24.  ERASE is similar to erasing a small section of a
tape  recording and doesn't affect the timing of the sequence, while DELETE
is  more  like  cutting  out  a  piece  of  the tape, since the sequence in
shortened when events are deleted.

Now double click the right mouse button to go to the Open mode play screen,
and  start  sequence 1.  While the sequence is running press the DELETE key
the  word  ALIGN will appear on the screen.  Watch the measure-step display
and,  while  the  measure  is  an  even  number,  press 2 on the typewriter
keyboard.   This  will  start  sequence 2 at the start of the next measure.
This  simple three note bass line fits with sequence 1, but the timing is a
bit rough.

Return  to  the  edit  screen and move to sequence 2 by clicking on the box
labeled  2  at the bottom of the right part of the screen.  Note that while
the  TIME  values in sequence 1 were all multiples of six, this is not true
for sequence 2.  This can be fixed with the AUTO-CORRECT option.

Click  on  TRANSPOSE/AUTO  in the edit options area and an edit window will
appear.   This  is  where most of the data maniplation operations are done.
Click  on  AUTO-CORRECT  and confirm that 6 is entered in the space next to
AUTO-CORRECT.   When  this  is  done, click on OK at the bottom of the edit
wndow.   The  sequence  is  now  auto-corrected; the four values under TIME
should be 0, 192, 6, and 186.

Now  let's  return  to  the  play screen and cue sequences 1 and 2 to start
together.   First press the DELETE key to align the sequences, and then ESC
to  pause  the  sequencer.  The word PAUSE will appear above ALIGN; press 1
and  2  to  select these sequences, and press ESC a second tune to turn off
PAUSE and start the sequencer.  After listening to this for a bit, wait for
an  even  numbered  measure and press 3 on the typewriter keyboard to start
sequence 3.  This lead line was recorded using quite a bit of mod wheel and
foot  pedal  motion,  perhaps too much:  but the notes themselves are okay.
The best thing to do is probably to strip the controller data from the note
data and to re-record the controllers at a later time.

Return  to  the  edit  screen  by  pressing  Fl.  Sequence 3 looks a little
different  from  the  earlier  sequences  because of the mod wheel and foot
pedal data it contained.  The CC events represent data from these and other
continuous controllers.  The value under NOTE is the MIDI controller number
for  that  event (1 for mod wheel, 4 for foot pedal), and that under VEL is
the  value  of  that controller.  Scroll through the sequence, and note two
facts:   first,  that  continuous  controllers use up much more memory than
notes do, and second, that the many CC events make it difficult to view and
edit the ON events.

CC events can be deleted from a uequence using the ERASE CNTROLLERS option,
which   is   reached   from  the  TRANSPOSE/AUTO  edit  window.   Click  on
TRANSPOSE/AUTO,  followed  by  ERASE CONTROLLERS and OK.  Sequence 3 should
now look like this:

The  note  data  from  the  lead  synth part is much easier 3 read with the
controlier data eliminaned, and can be edited more easily as well.

Now  that we've got all three parts edited, let's combine them into a short
song.   This as done using primary sequence start events in a separate Open
mode  sequence  known as a control sequence.  Primary sequence start events
are  represented in the event list by the number or letter of the sequence,
and  the  NOTE,  VEL,  and  DUR  fields  are  used  to  indicate  the pitch
transposition,  velocity  transposition,  and  number  of  repeats for that
sequence.

We will create the control sequence in sequence A, which doesn't exist yet,
and  therefore  is  not shown in the select boxes at the bottom of the edit
options  area.  To get to a sequence that isn't shown here, click on the **
symbol in the last select box and enter A in response to the prompt.  Place
the  cursor  on  the  single  DE event, and press the INSERT key.  When the
white  box  appears, type in the following data, pressing RETURN after each
line  and  moving  the  edit cursor up or down with the cursor control keys
after the last line.

    MSR   ST   EVNT   TIME   CH TYP   NOTE   VOL   DUR
    1-    1    1      0      1        0      -20   2W
    1-    1    2      0      1        0      0     4
    1-    1    3      0      2        0      0     2W
    1-    1    4      0      3        0      0     1
    1-    1    5      0      1        0      0     2W
    1-    1    6      0      2        0      0     12W

The  W's  in the the duration fields are WAIT flags which cause playback of
the  control  sequence  to  wait  until  the  sequence in that line is done
playing.   In this example, starting sequence A will pause until sequence 1
finishes  its  two  repetations.   After waiting for the TIME value of zero
steps,  sequences  1 and 2 will start and run for 2 repetitions of sequence
2;  after  which  sequences 1, 2 and 3 will start together.  the -20 in the
VEL  field  for  event  1  causes sequence 1 to play its note velocities 20
units lower than normal.

This  sequence  can  be played from the Open mode play screen just like the
others were, but there is another method for playing sequences that is more
convenient  when  editing.   Place  the edit cursor on the first event, and
click  the right mouse button; the sequenoc will play from the first event.
Clicking  the  left  button  will  stop  the sequence.  The sequence can be
played  from  any  event  by placing the edit cursor on that line and right
clicking which makes it easier to listen to just part of the sequenoe.

This  tutoril  has  by  no  means  covered  the  full range of edit options
available  on  the  KCS,  but  you  should  now be familiar enough with the
sequencer  operaton  to  get  started  making  some music.  More details on
editing can be found in Chapter 4.