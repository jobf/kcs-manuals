# CHAPTER 4 - Open and Track Mode Editing

[[toc]]

The Open mode and Track mode edit screens let you make individual or global
changes  to  pitch,  duration,  velocity,  MIDI channel, and timing for all
notes  in  a  sequence or track.  Notes and other MIDI events can be edited
individually, copied to another sequence or track.  New events can be typed
in  from the computer keyboard, or can be entered in step time using a MIDI
keyboard  in  conjunction  with the computer's keyboard.  In many ways, the
KCS;s  edit  screens  act  as  a  word  processor  designed  for music.  In
addition, the edit screens are used to access the computer's disk drive(s),
to  set the sequencer's operation options, and to move from one mode to the
next.

The edit screens for Open and Track modes are quite similar, though each
mode has a few commands not shared by the other mode.

The edit screen is divided into four sections: the event list on the left
half of the screen, the edit options on the right side, the message line at
the bottom of the screen, and the select boxes, below the edit options. The
event list displays up to 21 events (notes, program changes, control
changes, etc.) of the currently selected sequence or track, and is where
the actual editing takes place. The edit options section is used to select
which editing operation is to be performed, and also contains options for
selecting a new track or sequence, changing modes, setting the sequencer's
operating parameters, and exiting the program. The message line is used to
display messages about certain editing options, and to ask for more
information about other options. The select boxes are used to select a
different sequence or track.

There are two cursors on the edit screen: the mouse pointer, and the edit
cursor. The mouse pointer indicates the current position of the mouse, as
in all ST and Amiga programs, while the edit cursor indicates the point at
which editing will take place, or from which playback will begin if the
right mouse button is clicked.

## The Event List

The  event  list  consists  of  five editable data fields; two fields whose
contents  are  determined  by the program, and a set of icons for scrolling
though the list.  Here is a description of each of the fields:

MSR-ST:  The measure and step at which the event occurs.  For example, 2-13
means  the thirteenth step of measure two.  This is computed by the program
and cannot be changed.

EVNT:   The number of the event.  EVNT is used to specify a range of events
in the sequence or track when you are using the various edit options.  This
is also computed by the program and cannot be changed.

TIME:   The time at which this event occurs in relation to the start of the
previous  event.  Time is measured in steps of the internal or MIDI clock.
Changing  the  current  value will move this event and all subsequent events
forward  or  backward in time (with the exception of entries followed
by  the  ENTER  key  as  described  later  in this chapter).  The range of
permissible values is 0 to 65535.

CH:   The MIDI channel or the event.  The CH field is not used for non-MIDI
events,  or for MIDI events which don't carry channel information.  Channel
numbers must be between 1 and 16.

TYP:   The  event  type.   The  KCS uses over twenty different event types,
which  are  explained  later in this chapter.  The most commonly used event
type is the note on event, which has a TYP value of ON.  The meaning of the
data  in the next three fields is dependent on the data in the TYP field so
the  names  of  these  fields are only meaningful for a note on or note off
event.

NOTE:   The  note  value and octave, where the lowest note on a five octave
keyboard is C2.  Since computer keyboards don't contain flat symbols, flats
are  spectGed  as  the  coresponding  sharps  (B  flat  3  becomes A#3, for
instance.)  The  range  of valid MIDI notes in the KCS is C-1 to G9, though
some  other  companies,  most notably Yamaha, number MIDI notes from C-2 to
G8.

VEL: Key velocity The permissible range is 0 - 127. 

DUR:  The duration of the note, or how long the key was actually held down.
The  range  for  duration  is 1 is 999.  A duration of 0 produces a note on
with  no  corresponding  note  off, which is useful for creating notes with
durations greater than 999 clock steps.

Scrolling  through  the event list is done by clicking the mouse pointer on
one  of  the diamonds or arrows to the left of the event list.  Clicking on
the  top  diamond  moves  the  cursor to the first event in the event list,
clicking  on the bottom, diamond moves to the end of the list, and clicking
on  the  middle  diamond causes continuous scrolling from the edit cursor's
current  position.   When  the middle diamond is used, pressing the CONTROL
key  will  cause scrolling to pause until the CONTROL key is pressed again,
while pressing the ESC causes scrollmg to terminate.

The  scroll  arrows  provide another method for scrolling through the event
list.  Clicking on one of the triple arrows moves the event list forward or
backward  by  eighteen  events,  the  double  arrows  move the list by nine
events, and the single arrows move the list down by one event.  Holding the
left  mnouse  button  down  while  the mnouse pointer is positioned over an
arrow causes continuous scrolling.

The  edit  cursor  may  be  moved  to any point in the event list using the
cursor  keys or by clicking the mouse on the appropriate point in the list.
Note  that  the edit cursor can not be moved into either of the noneditable
fields  (MSR-ST  and  EVNT),  so  clicking the mouse on these fields has no
effect.

## Select Boxes and Edit Options

The  select  boxes which are the small numbered boxes stacked at the bottom
of  the right half of the screen are used to select a new sequence or track
for editing.  In track mode, each of the 48 tracks has its own box.  Tracks
which  contain  data  are  shown as boxes with a number in them while empty
tracks are represented by an empty box.  Clicking on a box will select that
track  for  editing  or  clicking  on  **  will allow you to type the track
number.

Two  sequences  or  tracks  can  also  be  swapped  using the select boxes.
Holding the left or right SHIFT key down when clicking on a select box will
exchange  that  track  or  sequence  with  the  currently selected track or
sequence.   

In  Open mode, only the first 33 primary sequences (A - X) and the first 26
of the secondary sequences (00 - 25) can be acccssed with the select boxes.
Sequences  Y  and  X  are  represented  for use by the program and can't be
dirctly edited.  Seconddary sequences above 25 must be selected by clicking
on ** and typing the sequence numbber.

The  edit options are displayed on the right half of the screen.  An option
is  selected  by  cllicking on its name.  Depending on the option chosen, a
message,  edit  window,  or dialog box may appear.  The specific details on
each option are explained later in this chapter.

While most of the edit options are identified in both Track and Open modes,
there are slight differences in some cases, and some options appear only in
one  mode  or  the  other.   If  this  is the case, it will be noted in the
section on that option.

## Selecting a Range for Editing

Most  of  the  edit  options  will  work on a range of events, as well as a
single  event.   The  range can be entered in the dialog box or edit window
for  that  option,  or a range may be selected with the mouse.  To select a
range of events for editing.  Place the edit cursor at the top or bottom of
the  range,  and  while  holding  the left mouse button down, move the edit
cursor  to the other end of the range.  (This is called "dragging" the edit
cursor.) The selected range will be highlighted, as shown below.

You  can  drag  the  cursor beyond the bottom, of the screen, and the event
list will automatically scroll to the new position.  The selected range can
be played by clicking the right mouse button.

After a range is selected, a new range may be selected in the same way, and
the  active  select  range  can  be toggled between the two by pressing the
ALTERNATE  key.   If a range extends over more than a single screen you can
move from one end of the range to the other by pressing the CONTROL key.

When  a  range  is selected, the first and last event numbers of that range
will be diplayed on the message line.

## Playing the Sequence or Track from the Edit Screen

In additaon to the PLAY edit option found on all three edit screens the KCS
allows  you to play part or all of the sequence or track being edited using
the  mouse  buttons.   On  both the Track mode and Open mode edit screens a
single  right  click on the mouse will play the selected sequence or track,
starting  at  the  location  of  the  edit  cursor.   If  a  range has been
highlighted  a  single  right  click will play only the highlighted events.
Note  that  this occurs even if the selected range has been scrolled on the
screen.   If  a  single  right  click does not produce the expected results
check the message line to confirm that the proper range is selected.

A  double right mouse click will transfer you directly to the Track or Open
play  screen.  If the program seems to have a problem distinguishing single
and  double clicks you can also move to the play screen by holding down the
SHIFT button while right clicking.  The Amiga may have problems with double
clicks if you click too fast; try clicking a little slower in this case.

In Open mode, pressing the left and right mouse buttons simultaneously will
play the currently selected cue.  In Track mode, all limited tracks will be
played  starting  at  the  cue point, or if a range is selected, that range
will be played for the selected track, as well as all other umnuted tracks.

To  stop  the  sequencer  when playing from the edit screen, click the left
mouse  button.   Holding  the SHIFT key when doing this will place the last
event  played  about 2/3 of the way down the edit list, which is handy when
you need to locate a specific event by ear.

When  piaing  from the edit screen, the internal clock is always used, even
if  MIDI  or MIDI W SONG POINTER is selecled as the clock source on the SET
OPTIONS screen.

## Editing or Entering a Single Event

To  change  a value in the event list, move the edit cursor to the location
of  the  value, and type in the new value.  When you start to type, a white
box  called the edit box will outline the fields you may edit.  You can use
the  cursor control and BACKSPACE keys to move over characters in the field
and  the  SPACE bar to clear them out.  The TAB key will move the cursor to
the  next  field,  and  SHIFT-TAB will move the cursor back one field.  The
cursor  can  also be moved to any point within the edit box by clicking the
mouse  on that point.  When you're done entering data press RETURN to enter
the data or UNDO to cancel the change.  Clicking the mouse outsfde the edit
box has the same effct as pressing RETURN.

Since  the program expects to see only certain types of data in each field,
(numbers from, 1 to 16 in the CH field, for example), entering invalid data
in a field will cause your entry to be misinterpreted or ignored.  You must
enter data that is appropriate for the type of event that you are editing.

To  add  notes  to the end of a sequence or track, place the edit cursor in
the  TIME  field  on the first line after the end of the sequence or track,
and enter the data as described above.

In  most  cases, the RETURN and ENTER keys perform the same function in the
KCS,  but  there  is  one  important difference between these two keys when
editing  events.   If  the TIME value for an event has been changed and the
ENTER  key is pressed instead of RETURN, the time of the next event will be
adusted  so  that  the measure and step of that event will remain the same.
See the sect@on on INSERT and ADJUST for more details.

## Defaults and Shortcuts for Event Editing

If  a  field  is  left  empty when entering a note or other event, then the
value  in  that field will default to some value which depends on the event
type and other factors.  If all fields are left blank and the previous line
in the event list is an ON event, then each field will default to the value
in the previous line, except the TIME field, which always defaults to zero.
If  the  previous  event  is  not  an ON event, the defaults are not always
predictable.   Usually, the TYP field defaults to the value in the previous
line,  and all other empty fields default to zero.  If the octave number in
the previous line; the same holds for octave values entered without notes.

There is also a group of single letter abbreviations for commonly used TIME
values.   Typing any of these abbreviations while the cursor is in the TIME
column  will  cause the program to immediately display the selected time in
the  TIME  column .  The TIME abbreviations and the corresponding number of
steps  using  the  system default of 24 steps/quarter note are given in the
following table:

    Key     Value                   Steps   Dotted  Triplet
    A       Last used
    C       Last calculated
    Z       Zero                    0       0       0
    W       Whole note              96      144     64
    H       Half note               48      72      32
    Q       Quarter note            24      36      16
    E       Eighth note             12      18      8
    S       16th note               6       9       4
    T       32nd note               3       5       2

The  "last  calculated" value assooated with the abbreviation "C" refers to
the  value  returned  by  the  most  recent  use  of  the CALC edit option,
described later in this chapter.

A dotted note of any of the types listed can be entered by pressing
CONTROL and the letter at the same time.  A triplet is entered by
pressing SHIFT and the letter.  Changing the STEPS/BEAT setting, on the
SET OPTIONS screen, will change the number of steps for each letter in the
table correspondingly.

## Event Types

The KCS recognizes 22 different types of events. Seven of these are MIDI
events and the rest are non-MIDI. A sequence or track may contain different
types of events. The seven MIDI events that the Keyboard Controlled
Sequencer recognizes are:

    ON - Note on
    OF - Note off (also entered as OFF)
    PG - Program change
    CC - Control change
    AT - Aftertouch, or channel pressure
    PB - Pitch bend
    *  - Single byte event

The non-MIDI events are:

PRIMARY sequence start (1 - 9, A - Z)

    ST - Secondary sequence start
    XX - Sequenct stop
    XL - Loop stop
    MS - Mute sequence
    US - Unmute sequence
    PT - Transpose sequence pitch
    VT - Transpose sequence velocity
    TM - Tempo value
    AC - Accelerando (increase tempo)
    DC - Decelerando (decrease tempo)
    SM - Steps/measure
    RA - Random event
    CU - Wait and see
    DE - Deleted event (rest)

PRIMARY, ST, XX, XL, MS, US, PT, and VT events are ignored when the program
is not in Open mode. ST events can also be used to start PRIMARY sequences
by entering a single digit or letter. Each event type is described in
detail below.

### Note On and Off

ON  events  are the most common events used in the KCS.  The meaning of the
date  in  ecah  field  is  exastly  as  described in the explanation of the
fields.

When recording note on and note off messages, if any note has a duration of
more  than  999 clock steps, the DUR value for that ON event becomes 0, and
the  program records a separate The program maintains 64 duration counters,
Whch  are used to keep track of the durations for up to 64 ON events.  When
this limit is exceeded during playback, the program will cut short the note
that  would  normaly end next, and play the new note.  This should not be a
problem  in  most  applications.   One other important point to be aware of
when  programming  durations is that when note on and note off messages are
programmed  to  occur on the same time step, the note off messages are sent
after the note on messages.  (This is done to keep the note on timing which
is  more critical than note off timing, nice and crisp.) This means that if
you  want  to  create  legato parts without overlapping (slurred) notes the
durations used should be one less than the corresponding TIME values.

### Program Change

PG  events  will  make  the instrument on the specified MIDI channel change
programs.   For  most  synthesizers, you should make sure the instrument is
not  currenly playing a note when it is to change sounds.  Some instruments
may  quietly  shut on the note and make the change, while other instruments
will  make a very undesirable popping sound when changing.  When entering a
program  change,  the  value under NOTE represents the program number.  Not
all  instruments  begin  program  numbering  with 0.  See the synthesizer's
owner's manual, for specifics on your instruments.

    MSR-    ST    EVNT    TIME    CH TYP    NOTE    VOL    DUR
    1-      1     1       0       1         PG      0
    1-      1     2       0       16        PG      5


### Control Change

CC  cvents  are  control change events.  They are generated by a mod wheel,
pedal,  joystick,  sustain pedal, etc.  The value undcr NOTE will represent
the   controller  being  changed.   The  numbers  used  to  represent  each
controller  have  been  pretty  much standardizd by the MIDI manufacturer's
Association,  and are listed in the MIDI chapter.  The value under VEL will
be  the  new value for a control paramater.  The range is 0 - 127, but only
certain  values  may  be  valid  for a particular instrument and type of CC
event.   CC  events  do  not use the DUR column.  The following table shown
part  of  a  sequence  in  which the mod wheel was moved slowly seven steps
after a note was played.

    MSR-    ST      EVNT    TIME    CH    TYP   NOTE      VOL     DUR
    1-      1       1       0       1     ON    C4        64      12
    1-      8       2       7       1     CC              0       2      
    1-      8       3       0       1     CC              1       4      
    1-      9       4       1       1     CC              1       6      
    1-      10      5       1       1     CC              1       8      
    1-      10      6       0       1     CC              1       10  

CC  events  can be recorded in real time, or entered one at a time from the
edit screen.  You will probably find it too time consuming to enter or edit
from  the  edit  control  changes from, a continuous controller (mod wheel,
pedal,  breath  controller,  etc.)  one  event  at a time.  You may find it
useful to enter sudden changes from the edit screen or to create a sequence
of  controller  events and call it up at diffrent points in the piece using
sequence start events in Open mode.

### Aftertouch

AT  events  have values From 0 - 127 in the NOTE feld, 1 and do not use the
VEL  or DUR fields.  Since AT events use up lots of memory when recorded in
real  time, you should set the sequencer to not record aftertouch unless it
is specifically required.

### Pitch Bend

The  value entered under NOTE for PB events can be in the range of -8192 to
8191.  The MIDI spec allows 14 bits for pitch bend, hence the huge numbers.
Not  all  synths  interpret  these values similarly so experiment and check
your manual.  PB events do not use the VEL or DUR columns.

### Single Byte Events

A  single  byte event may be sent over MIDI by entering a * under event TYP
and  the  byte  value to - 255) under NOTE.  This allows sending any system
common or system exclusive information from your sequences.  When sending a
single  byte  command  from  the KCS, specify the command in decimal.  Some
instrument  manuals  may show commands in hex In the following example, the
single byte events would send a MIDI song select command for song 11.

    MSR-ST    EVNT    TIME    CH    TYP    NOTE    VOL   DUR
    1-  1     1       0             *      243
    1-  1     2       0             *      11

System  exclusive  messages can be sent by entering a single byte event for
each  byte  in  the  message.  This is obviously impractical for long sysex
messages such as program dumps, but works well for shorter messages.  NOTE:
IT  IS  THE USER'S RESPONSIBILlTY TO UNDERSTAND HOW A PARTICULAR INSTRUMENT
WILL  RESPOND.   PLEASE  DO  NOT  CALL DR.T'S MUSIC SOFTWARE WITH QUESTIONS
REGARDING THE RESPONSE OF YOUR INSTRUMENTS TO SYSTEM EXCLUSIVE DATA.

Version 1.6 of the KCS has the ability to record short system exclusive
messages as single byte events. See the SET OPTIONS and TIPS AND TROUBLE
SHOOTING chapters for details.

### Sequence Control Events

There  are  eight  types  of  sequence  control events that can control the
playing  of other sequences.  These are PRIMARY events (which start primary
sequences),  ST  events  (which  start  secondary or primary sequences), XX
events  (which  stop  a  sequence),  XL  events (which stop a sequence from
looping),  MS  events  (which  mute  a sequence), US events (which unmute a
previously   muted  sequence),  PT  events  (pitch  transposition)  and  VT
(velosity  transposition).   These event types can be created only from the
edit screen and are ignored if the program is in Track mode or Song mode.

The  next  few  sections  of  the chapter describe how each of the sequence
control  events  work.  For more information on control sequence techniques
see Chapter 13.

### Primary Events

PRIMARY  events are used to start any primary sequence (1 - 9, A - Z), When
a  PRIMARY event is encountered the sequence whose key is specified will be
started  automatically.  The value under NOTE will be a pitch transposition
in   half   steps   while  the  number  under  VEL  represents  a  velocity
transposition.   The permissible range for each is -64 to 63.  If a note is
transposed out of the MIDI keyboard range, it will be transposed to the end
of  its  range.   If  a  channel has been designated as a drum channel (see
Chapter 11), the channel will not be affected by any pitch transpositions.

The  following  sequence  will start sequences A, 2, and F as soon as it is
started.   A will be transposed up two half steps, and 2 will be transposed
down four half steps.

    MSR-    ST      EVNT    TIME    CH    TYP  NOTE     VOL     DUR
    1-      1       1       0             A    2        0       1
    1-      1       2       0             2    -4       0       1
    1-      1       3       0             F    0        0       1

The  value  under  DUR is the number of times the sequence will repeat.  It
overrides  the  originally programed repeat value for the sequeocc.  If the
value  under  DUR is 99, the sequence will repeat until stopped by the user
or by an XX or XL evnt.  A W in the DUR column repeesens a WAIT flag.  This
causes  the  control  sequence  to  wait  until the scquence started by the
sequence  start  event has finished before any new evens can begin.  In the
next  example the program will start sequence A and play it four times.  No
other  event  in the sequence will be played until sequence A completes its
four  repetitions.   When  sequence B is started, the control sequence will
wait again.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                A             0               0      4W
2-      1       2        96                E         -2       8 1
5-      1       3       288                A          7      12 2
5-   1    4      0          B       0         0   2W

### ST Events

ST  events  are  another form of sequence start event.  Secondary sequences
can  only  be started using ST events, or from the numeric keypad.  To type
in  an  ST  event  put the desired event time under the TIME column, put ST
under  TYPE and put the desired sequence (primary or secondary) under NOTE.
If  you  would  like  to specify a piteh transposition, enter it in the VEL
field.   Specify  the  number  of  repeats under DUR.  You cannot specify a
velocity transpisition with an ST event.

Note  that secondary sequences can start other sequences <including primary
sequences)  with  sequence  start event.  In this example, sequences 01, 23
and A are started a measure apart.  Sequence 23 will play twice, transposed
up  eight  half  steps.   Sequence  01 will play four times and the control
sequence will wait for sequence A to finish before proceeding.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0               ST             01              0      1
2-      1       2        96               ST          23              0 2
3-      1       3        96               ST           A              0 4W

### XX and XL Events

XX events are sequence stop events.  They allow you to
automatically stop one or more sequences, even in the
middle of playing. To stop a single sequence with an XX event, enter
XX under TYPE, and the desired sequence, left justified under NOTE as
shown below. 

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

3-      1       1       192                XX     23                    
7-      1       2       384                XX      A
9-      1       3       192                XX     01

More  than one sequence may be stopped with a single XX event by placing an
asterisk  (*)  under  NOTE.   An asterisk by itself will stop all sequences
that  are  currently playing (active), or an asterisk followed by a channel
number  will  stop  all  active  sequences that start with an event on that
channel.   The  following  example  would immediately stop all sequences on
channel 1, then stop the remaining sequences one measure later:

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                XX     *1
2-      1       2        96                XX     *

Note  that  sequence  control  events  that use the * option take longer to
execute  than similar events affecting only one sequence, and may result in
audible delays if overused.

XL  events  are  much like XX events except that the sequences specified in
the NOTE field will continue to play to their ends before stopping.

### MS and US Events

MS  and US events are much like XX and XL events, except that the specified
sequences  will  be  muted rather than dopped.  The main difference is that
when  a  sequence is muted, it will continue to play, but the events in the
muted  sequence will not be executed.  This is useful if, for instance, you
are  creating  a  piece by stringing together complex control sequences and
would  like  to  remove  a  portion of a sequence from, one occurrence of a
particular  section,  without  actually  editing  the  affected  sequences.
Inserting  an  MS  event  in  the master control sequence, followed by a US
event  at  the  appropriate time, will blank out the designated sequence in
that portion of the composition.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR
1-      1       1         0                ST     01             0       1
2-      1       2        96                MS     01          
3-      1       3        96                MS     01

As with the XX and XL events, multiple sequences may be specified in MS and
US events usng a * in the NOTE column.

### PT and VT Events

PT  ana  VT  events cause a pitch or velocity transposition to oocur in the
specified  sequences.   The  sequence number, or an asterisk and an optionl
channel  number,  are  entered  in  the  NOTE column, and the transposition
amount from -64 to + 63, is entered under VEL.  If the DUR column is blank,
the  value  under  VEL is added to the current transposition value for that
sequence,  or if an S is placed in the DUR column, the program will set the
transposition  to  that  value.   Notes  played on the drum channel are not
affected  by  PT  events.   The  pitch and velocity transpositions for each
sequence  are  set  to  0 when the sequencer is started, and transpositions
will be "chased" when starting from a cue point.

In  the following example, secondary sequence 01 is transposed up an octave
from  it's  current  transposition  and  four  measures  later,  all active
sequences  that  start  with  events on channel 3 will be set to a velocity
transposition of 0.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                PT      01    12
5-      1       2       384                VT      *3     0    S

When  a  PT or VT event is encountered in a sequence while playing from the
Open  mode  play screen, the first four letters of the sequence's name will
be  replaced  on  the screen by the sequence's pitch transposition, and the
last four letters by the sequence's velocity transposition.

### TM Events

TM  events  in  a  sequence  will  imnmediately force the internal clock to
change  the tempo to the specified value.  Sequences may have more than one
TM  event.   In  fact,  several sequences may contain TM events.  When a TM
event  as  encountered the tempo will change to that value until another TM
event is encountered.

TM  events have no effct on the tempo if the program is using MIDI clock as
its  clock source, though they are used for calculations when synchronizing
to  an  external clock.  See the section on timing resolution in Chapter 13
for details.

Enter TM under TYP, the desired tempo (in beats per
minute) in the NOTE field, and the tenths portion or the tempo under VEL. 

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                A             0               0      4
2-      1       2        96                E          0       0 1
5-      1       3       288               TM        140       2 
5-   1    4      0          B       0         0   2W

In this example sequence A is played four times, one measure later sequence
E plays one time, and three measures later the tempo is set to 140.2 BPM as
sequence B starts playing.  You should put a TM event as fhc first event in
your control sequence to assure that it always plays at the correct tempo.

To   maintain   optimum   accuracy  when  using  the  real  time  clock  or
synchronizing to an external MIDI clock, you should place all The events on
multiples  of  six clock steps.  This is because MIDI song pointer messages
(which  are  used  in  conjunction  with  tempo  settings  and  a  SMPTE or
equivalent  synchronizer to communicate the time of day between the KCS and
external devices) are quantized in units of six MIDI clocks.

### AC and DC Events
 
AC  and  DC  events  are  used  to create proportional changes in tempo, as
opposed  to  the  absolute changes created by TM events.  Entering a number
between 1 and 3000 under NOTE will cause the tempo to change by that number
of  parts  in  1024.   For example, if an AC event has a value of 1024, the
tempo  will  double,  or if the number under NOTE were 512, the tempo would
increase  by  50%.   AC  events cause an increase in tempo, while DC events
cause  a  decrease in tempo.  AC and DC events can only be entered from the
edit screen.

Gradual  tempo changes can be made by creating a string of evenly spaced AC
or  DC  cvents,  and  playing them along with a sequence or track either by
merging  them into the sequence or track, or by playing them simultaneously
from  a  separate sequence or track.  This example would cause the tempo to
increase ty 1O% over the space of one measure.

MSR     ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                AC     13
1-  13  2        12                AC     13
1-  25  3        12                AC     13
1-  37    4     12          AC       13
1-  49  5        12                AC     13
1-  61  6        12                AC     13
1-  73  7        12                AC     13
1-  85    8     12          AC       13
2-   1    9     12          DE

Generally  speaking the best way to add AC or DC events to a sequence is to
first add one or two by hand to determine the corrcct values and spacing to
use,  then  using  the  PASTE edit option to merge multiple copies of these
events  with  the  sequence  or  track.  As with TM events AC and DC events
should  be  placed  on  multiples  of six clock steps for best results when
using  the  real  time clock.  You should also remember to start any pieces
that  contain AC or DC events with a TM event.  Otherwise, you will need to
reset the tempo each time you play the piece.

### DE Events

DE events are most often used at the end of a sequence to instruct
the computer to wait a specified number of steps before looping or going on
to play the next sequence.  In the following example sequence A starts (and
repeats four times), and four measures later (384 clock counts) the sequence
shown ends.  If another control sequence is waiting for this one, that
sequence will now continue playing.  

MSR     ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0                A             0               0      4
2-      1       2       384               DE         

DE  events  may  also  be  used  to  erase  or silence a wrong note without
affecting  the  numbering of subsequent events, by typing DE over the event
type  of  the  undesired  note.   Clicking  anywhere  on the event line and
pressing the DELETE key followed by RETURN will have the same effect.

### SM Events

SM events are used to change the sequencer's
steps/measure setting during playback.  This will have no effect at all on
the music being played but it will change the operation of the
measure/step counter. 
Use SM events anywhere that the music changes time signatures, and the new
time signature will be used by the
measure/step counter during playback.  The number of steps/measure is
entered under NOTE, and the remaining fields are unused.

If you use a lot of SM events in a portion of a piece to represent a varing
time signature, it may prove less confusing to use a single SM setting that
is  one  beat  long,  and  then  treat  the  measure/step display as a beat
counter.   See  the  SET  OPTIONS  chapter  for  more  information  on  the
steps/measure  setting,  as  well  as a table of common time signatures and
their corresponding steps/measure values.

### RA Events

RA events are used to select one of a number of events at random. The "hat"
out of which an event is drawn is a list of events immediately following
the RA event, and the length of this list is set by the numbmr in the NOTE colun
n.  The
limits for the length of the list are 2 - 255.  After the selected event is
executed, the sequence or track will continue from the next event
after the end of the list. 

Here are two examples that illustrate the use of the RA event. The first
will play one of the five notes in the list, then continue from the G4.
Note that since the D4 occurs twice in the list, it is twice as likely to
be selected as any of the others.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0               RA             5               77  5
1-      1       2         0               ON         D 4              77  5
1-      1       3         0               ON         A 4              77  5
1-   1    4      0         ON      F#4        77  5
1-      1       5         0               ON            D 3              77  5
1-      1       6         0               ON         D 4              77  5
1-      7       7         6               ON         G 4              84  5
1-  13    8      6         ON      A 4        76  4

The next example shows how an RA event is used to change the structure of a
piece of music by selecting from, a list of sequence control events.  The
sequences in the list could each be a set of tom rolls; for instance, which
would inject an illusion of spontaneity into a drum part. 

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0               RA             4               
1-      1       2         0               ST         01       0   1
1-      1       3         0               ST         11       0   1
1-   1    4      0         ST      03         0   1
1-      1       5         0               ST            05               0   1
2-      1       6        96               ST         23       0   1
3-      1       7        96               ST          A       0   4W


The  TIME  values  for the list of possible events are ignored when playing
though  they  should all be set to 0 to avoid confusion when editing tracks
or  sequences  and  especially  to  avoid  conflicts when merging tracks or
sequences.   Also  note  that while the RA event is recognized in all three
modes,  the  list  of  candidate events should only contain events that are
appropriate for that mode.

### CU Events

CU  events  cause  the  sequence, track, or song that contains them to wait
until  a  specified  time  on  the real time clock.  The NOTE, DUR, and VEL
columns  hold the minutes, seconds and tenths of seconds values for the cue
point.  Minutes can be any value from 0 - 255, and seconds, of course, must
be  less  than 60.  CU events are ignored if the MIN:SEC switch, on the SET
OPTIONS screen, is turned off.

Care  should  be exercised when using CU events.  If the time specified has
already  passed  when  the event occurs, the program will think it is late,
and  will spew out notes and MIDI clocks at maximum speed, in an attempt to
catch  up with itself.  This can happen if a sequence containing a CU event
is looped, or if tracks containing CU events are appended or doubled.

See  the  section on TIMING RESOLUTION, in Chapter 13, for more information
on the real time clock.

## Edit Options

The  right half of the screen displays the available edit options.  When an
edit  option  is selected, a message will appear on the message line, and a
dialog box or an edit window may appear.  Dialog boxes and edit windows are
described  in  Chapter 1 of this manual, and details on the individual edit
options appear below.

### Name and Comments

The name of a track or sequence consists of eight characters. When you
start to record on an unnamed track or sequence, the program will name the
track or sequence with the MIDI channel number. The event type will be part
of the name if the first event is not a note. If you click on NAME, the
edit cursor will move to the top of the screen where the name is displayed.
Type in the new name, and press RETURN.

In  Open  mode, a thirty character comment field, directly below the EVENTS
LEFT  line,  can  also  be  accessed by clicking on NAME.  Typing more than
eight  characters  in  the  name,  or  using  the cursor control keys after
Clicking on NAME, will move the edit cursor to the comment field.

### Transpose/Auto

The  TRANSPOSE/AUTO  option manipulates data in a variety of ways.  An edit
window  appears  in  which  you  can  specify  the  range  of  events to be
processed,  the  operation  to  perform,  and  the  parameters  used by the
available  options.   Only one of the available options can be chosen for a
single edit operation.

The  range  of  events  to  be edited is selected by clicking on ALL, EVENT
RANGE,  or MEASURE RANGE.  If either of the last two options is chosen, the
numbers to the right of these buttons set the upper and lower limits of the
range.

Clicking  on UNDO or pressing the UNDO key after a TRANSPOSE/AUTO operation
will return the track or sequence to its previous state.

### Pitch, Velocity, and Duration

The  PITCH, VELOCITY, and DURATION and Duration transpose options allow you
to transpose (change by a constant amount) or invert the pitch, velocity or
duration  of  all  ON  and  OFF  events  in  the  range  processed.   Pitch
transposition  has  many obvious uses and is found in all serious sequencer
programs.   Inversion  and velocity and duration transpositions are logical
extensions  of  this  concept.  You will probably transpose pitch much more
often  than any of the others, but they are there any time you have use for
them.

After selecting PITCH, VELOCITY, or DURATION, click on TRANSPOSE or INVERT.
The  number next to TRANSPOSE is the transposition amount (-63 to +63), and
the   value  beside  INVERT  sets  the  center  point  for  the  inversion.
Transposing  pitch  by  -12  drops  all  notes down one octave, and a pitch
transposition  of 7 would raise the pitch up seven half steps (a fifth).  A
velocity  transposition  of 24 increases all MIIDI velocities by 24 (making
the  notes  louder  or brighter, depending on your synth's response to MIDI
velocity),  and transposing duration by -3 shortens all notes by three time
steps (making notes more staccato).  The program will assign the largest or
smallest allowable value to a pitch, velocity or duration if you attempt to
transpose  out  of  range.  It is possible to transpose pitch, velocity and
duration to values that are not useful for your instrument and patch.

Selecting  INVERT causes high values to become low and low values to become
high.   The  acceptable  range  for  the  inversion  point is 1 - 127.  The
program  will  perform  the  inversion  around  the  value  you enter.  For
example, if you invert velocity around 50, a velocity of 70 will become 30,
while a velocity of 20 will become 80.

If  you are inverting pitch, the number that you enter must be the MIDI key
number of the pitch that you wish to invert around.  MIDI key numbers range
from  0  for  the  lowest  MIDI key (C - 1 in our notation), to 127 for the
highest,  G9.   The  MIDI  chapter has a table of note values and MIDI note
numbers.   To invert pitch around middle C, enter a value of 60.  Inverting
the  C  scale  from,  sequence  1 around middle C will produce a descending
scale  that  goes from C4 down to C3.  Be careful, though, since inversions
will  usually  cause  the part to change keys, except for certain inversion
points.   In  the example of the C minor scale, inverting around 60 changes
the scale to a G Phrygian scale, while inverting around 62 gives an E minor
scale, etc.

### Auto-Correct

AUTO-CORRECT is used to round all of the TIME and/or DUR
values in a track or sequence to multiples of some number.  This is usually
done to smooth out the timing of a less than perfect recording but can also
be used for special effects.  The number next to AUTO-CORRECT sets the
step count for
auto-correction.  After auto-correction all times in the selected range
will be a whole number multiple of the step count.
The following table shows the step counts corresponding to several
common note values at the
stdandard 24 steps/beat: 

3 for 32nd notes                4 for l6th note triplets
6 for l6th notes                8 for 8th note triplets
12 for 8th notes                16 for quarter note triplets 
24 for quarter notes    48 for half notes 
96 for whole notes

The  number  next  to  DUR  on  the  same  line has a similar effect on the
durations  in  the  selected  range:   The entry is optional.  You can also
quantrize  only  the duration by leawng out the value for step count.  When
duration  is auto-corrected, the resulting duration values are actually one
less  than  the  nearest  multiple of the duration auto-correct value.  For
instance,  entering  a  value  of  6 for duration auto-corretion results in
duration  values  of 5, 11, 17, etc.  instead of 6, l2 and 18.  This allows
notes  played  on  monophonic instruents to retrigger when legato parts are
played,  by  ensuring  that  a  note off message is sent before the next ON
event in the sequence or track.

When  a  portion of a track or sequence containing events other than ON and
OFF  events  is  auto-correted,  the program treats all the non-note events
between  each  pair  of On events as part of the first note, and moves them
along  with  that note.  This is handy when a sequence contains pitch bends
or  other controller messages that you want to time to particular notes.  If
you want to auto-correct a part without affecting the non-note data use the
SPLIT  edit  option to separate the note data to another track or sequence,
as described later in this chapter.

### Compress/Expand

The  COMPRESS/EXPAND  option  changes the timing of the overall sequence or
track.   This  option  can  also  be  used to speed up or slow down a part,
relative   to   the   other   part  of  your  song.   The  number  next  to
COMPRESS/EXPAND  sets  the amount of compression or expansion (in percent),
and the DUR button on the same line causes durations to be affected as well
as  time.   Each  note's  TIME  and/or  DUR value will be multiplied by the
amount  you  enter, divided by 100.  Entering an amount of 200 results in a
sequence or track which is twice as long as the original, 50 makes the part
half as long, etc.

### Time Reverse

The TIME REVERSE option will re-arrange events
so that they play in reverse order.  The TIME values of
the first and last notes are not changed and if the last event in the range
selected is a DE event it won't be
affected either.  Note that since the value in the TIME
field represents the amount of time that elapses before
an event occurs time reversal will not preserve the relationship between an
event's TIME and DUR values.  For example, consider the following sequence:


MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0        1   ON       C 3           50  10
1-  13  2        12        1   ON            D 3              50  10
1-  25  3        12        1   ON            E 3              50  10
1-  37    4     12     1   ON      F 4        50  10
1-  49  5        12        1   ON               G 3              50  10
1-  61  6        12        1   ON            A 3              50  10
1-  73  7        12        1   ON            B 3              50  10
2-   1    8     24     1   ON      C 4        50  94
3-   1    9     96         DE      

Reversing the order of tbe sequence yields:

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0         1  ON               C 4           50  94
1-  25    2      24         1  ON            B 3              50  10
1-  37  3        12         1  ON            A 3              50  10
1-  49          4     12      1  ON      G 3        50  10
1-  61  5        12         1  ON               F 3              50  10
1-  73  6        12         1  ON            E 3              50  10
1-  85  7        12         1  ON            D 3              50  10
2-   1    8     12      1  ON      C 3        50  10
3-   1    9     96         DE

Now  the  C4  with  the  duration  of 94 sustains while the other notes are
playing.   In  a  case such as this you might want to swap the durations of
events 2 and 9, to preserve the original timing relationships.

### Channel Assign

CHANNEL  ASSIGN  changes the MIDI channel numbers of events in the selected
range.   If  only  the  first  of  the two data fields to the right of this
switch  contains  a  value,  all events will be assigned to this channel if
these  values  are present, then consccutive events will be assigned to the
next  higher  MIDI  channel within the specified range.  This is useful for
playing polyphonic parts on a synth in mono mode, or for adding space to an
arrangement.

### Velocity Scale

Selecting  VELOCITY  SCALE  will  create  a "velocity fade-in" or "velocity
fade-out",  depending  on  the  values you gve it.  The values next to this
button  represent  the  beginning and ending velocities; leaving the second
field empty will set all velocities to the first value.

The range for velocily is 0 - 127, with 127 being the loudest or brightest.
Synths  that  respond  to  velocity  can  then  be programmed to respond in
sevcral different ways, so the result of your velocity scale will depend on
the  particular  patch  you  are  using  on  your  instrument.   Here  is a
monophonic  sequence  consisting  of  sixteenth aod eighth notes all at the
same velocity.

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0        1   ON               C 3        50  10
1-      7       2         6        1   ON            C 3              50  10
1-  13  3         6        1   ON            C 3              50  10
1-  19    4      6     1   ON      C 3        50  10
1-  25  5         6        1   ON               C 3              50  10
1-  31  6         6        1   ON            C 3              50  10
1-  37  7         6        1   ON            C 3              50  10
1-  43    8      6     1   ON      C 3        50  10
1-  55    9     12     1   ON      C 3        50  10

If  we  apply  velocity scaling and enter a starting velocity of 100 and an
ending velocity of 1, the sequence will now look like this:

MSR-    ST      EVNT    TIME       CH  TYP      NOTE            VOL     DUR

1-      1       1         0        1   ON               C 3       100  10
1-      7       2         6        1   ON            C 3              89  10
1-  13  3         6        1   ON            C 3              80  10
1-  19    4      6     1   ON      C 3        66  10
1-  25  5         6        1   ON               C 3              58  10
1-  31  6         6        1   ON            C 3              45  10
1-  37  7         6        1   ON            C 3              34  10
1-  43    8      6     1   ON      C 3        23  10
1-  55   10     12     1   ON      C 3         1  10

Note  that  the difference in velocity between the last two events is twice
that between any other two events.  This is because the KCH scales velocity
linearly  over  time, NOT the number of events.  Since the time of the last
note  is twice that of the others, the velocity drops twice as much in that
time period as in the others.

### Erase Controllers and Clear Deletes

The  ERASE CONTROLLERS option is used to strip all MIDI data except note on
and  off  events  from  the selected range.  CLEAR DELETES is a convenience
feature which erases all DE events from a sequence or track, except for the
final  "trailing  DE,  if  any.  This option affects the entire sequence or
track.

### Insert and Adjust

These  options  are  used  to insert new data in a sequence or track at the
current  position of the edit cursor.  Clicking on either will create a new
blank  line  ahead  of  the current event, at which point new events can be
typed in as describwd earlier in this chapter.

When  INSERT  is  selected,  events  are simply inserted in the sequence or
track,  with  no  adustments to timing.  When ADJUST is chosen, the program
will  attempt  to  keep the length of the sequence constant, by subtracting
from the TIME value of the first event after the insert point.  If the TIME
value  for  this  event  becomes  0,  the program will no longer be able to
adjust,  and  the  length  of  the  sequence or track will increase as more
events are entered.

You can also insert nrw material by pressing the INSERT key.  In this case,
the  program,  will  use  the  most recently chosen of the INSERT or ADJUST
options.

When you have finished inserting use the cursor keys to move to a new event
line or click the left mouse button.

### Cut, Copy, and Paste

The  CUT,  COPY,  and PASTE options are among the most powerful in the KCS.
These  commands  utilize  what  we  call the paste buffer.  You can use the
paste buffer to move and copy part or all of a sequence or track to another
sequence or track.  The same paste buffer is used for Open and Track modes,
so  you  can  use this to move information between the two modes.  Any time
you CUT or COPY, the previous contents or the paste buffer are discarded.

### Cut

The  CUT  command  will  delete  or erase the events in a desired range and
place  the events into the paste buffer.  The CUT edit window allows you to
set  a  range by event or by measure.  Cutting all the events in a sequence
or  track is not allowed.  Click on EVENT RANGE or MEASURE RANGE to set the
range;  the values to the right of these buttons contain the start and stop
points for the cut.

DELETE  ORIGINAL  and  ERASE  ORIGINAL  affect the data that is left in the
original  sequence  or  track.   DELETE  ORIGINAL will remove the specified
section  and  shorten  the  sequence  or track.  ERASE ORIGINAL removes the
events  specified  but  adds  their time values to the next event after the
selected range, thus preserwng the original timing.

ZERO FIRST TIME forces the TIME value of the first event to zero: this is
usually the most convenient value when pasting.  Click on OK and the data
will be moved to the paste buffer.  This data will remain in the paste
buffer until you next use the CUT or COPY command. 

### Copy

The  COPY  command is identical to the CUT command except that the selected
range  is  not  deleted  or  erased from the sequence or track.  It is also
possible to copy all of a sequence or track.

### Paste

Once  you  have  moved  data  into  the  paste buffer using the CUT or COPY
command,  you  can  use the PASTE command.  There are a number of different
ways  to  paste  material to a track of sequence, which are outlined below.
Because  the  PASTE edit window has so many options, a HELP button has been
provided, next to the standard edit buttons.

When  you  use PASTE in Track mode, remember that all tracks will loop when
track  1 finishes playing.  Notes that are pasted onto a track at a measure
and step that is past the end of track 1 will not sound when all tracks are
played  at once, and extending track 1 will cause a gap in the other tracks
when the sequencer loops.

#### PASTE OPTIONS

INSERT  will  placw  the  contents  of  the  paste  buffer at the specified
location, without changing the existing data at the paste location.  INSERT
is  like cutting a piece of tape, and splicing in one or more copies of the
paste  buffer.   The  rest of the sequence will be pushed back in time, and
the sequence will become longer.

REPLACE  will  take  the  contents  of  the  paste buffer and put it at the
specified  location.  The previous contents of the sequence will be written
over  for  the  length of the phrase.  REPLACE is like erasing a section of
tape and replacing it with the contents of the paste buffer.  The timing of
events after the end of the paste will not be altered.

MERGE  will  mix  the contents of the paste buffer with the sequence.  Both
parts will play with their original timing.  The result will be the same as
if both the sequence and paste buffer were played together.

MERGE  TO  END  is similar to MERGE, except that copies of the paste buffer
are  mixed  into  the  sequence,  one after the other, until the end of the
sequence  is  reached.   A  simple  application  would be to have the paste
buffer consist of one note, say a bass drum hit on a drum machine.  Setting
the  phrase  length to 98 steps (one measure) and performing a MERGE TO END
would cause one bass drum hit to be added every measure of the sequence.

FILL  TO  END  is  like  REPLACE,  except  that all data is erased from the
sequence  after  the  paste  location.   This  data is replaced with enough
copies  of  the paste buffer to make the resulting sequence the same length
as the original.

After  an  INSERT  or REPLACE paste operation is executed, the pasted range
will  be  highlighted  in  the event list.  This allows you to see that the
paste was done properly.

#### PHRASE LENGTH

The  length  of  the phrase which is pasted to the new location can also be
changed  by  entering  a phrase length, in measures and steps, under PHRASE
LENGTH.   These  features  can  be  particularly useful when doing multiple
pastes.   Note  that the program will not allow you to increase the time or
decrease  the  phrase  length in a way which affects the relative timing of
the event being pasted.

#### LOCATION

There  are  two different ways to select a paste location:  either by event
number,  or by specifying a measure and step.  If you specify EVENT NUMBER,
the paste occurs immediately before the event specified to the right of the
button.  If you want to paste at the beginning of the sequence, enter 1.

#### MEAS/STEP  is  used  primarily  when  you  want  to paste at a point in the
sequence  which is not a location of an event in the sequence.  The program
will  do  the  paste  before  any  event  at the selected measure and step.
Remember,  the  sequence or track begins at measure 1, step 1, and the next
step of any new measure in step 1 of that measure NOT step 0.

The  values  for  EVENT  NUMBER  and  MEAS/STEP will default to the current
location of the edit cursor.

#### Times to Paste and First Event Time

You  can  also  select  the number of times you wish to paste.  The program
will  paste copies of the paste buffer, one after the other, for the number
of  times  selected.   TIMES  TO  PASTE  is  used for the first three paste
options only; it is ignored if you select FILL TO END or MERGE TO END.

FIRST  EVENT TIME sets the time of the first event in the paste, same as in
the CUT and COPY edit windows.

### Backup, Get Backup, and Undo

Clicking on BACKUP will make a copy of your current sequence or track.  The
message  "Backup accomplished" will appear on the message line, or an error
message will appear if there is no room for the copy.  It is a good idea to
make a backup before making any change that can not easily be reversed.

The  GET  BACKUP command exchanges your current sequence or track data with
the  most  recently  made  backup.  This allows you to swap and compare the
sequences.

A  separate  backup  sequence  is created whenever a TRANSPOSE, CUT, PASTE,
DELETE, ERASE, or SPLIT operation occurs.  Clicking on UNDO or pressing the
UNDO  key  will  swap  this  sequence  with  the  altered original track or
sequence.

The  manual  and automatic backups are stored by the program in sequences Y
and  Z,  respectively.   You  can thus hear either backup sequence from the
Open  mode play screen by pressing the appropriate key.  If you decide that
you  want to keep both your edited material and the backup, copy the edited
sequence  or  track  to  a  new  location and retrieve the original data by
clicking on GET BACKUP or UNDO.

If  you are planning extensive changes to a sequence or track, you may wish
to  make  a  copy of your original using one of the copy commands described
below before you start editing and then make frequent backups as you edit.

### Delete and Erase 

DELETE  and  ERASE  are used to remove a range of events from a sequence or
track.   DELETE  will  shorten  the  length of the sequence or track, while
ERASE  preserves  the length of the sequence or track .  by adding the time
values  of  the events that are erased to the time or the first event after
the selected range.

After  choosing  one of these options, a dialog box will prompt you for the
range  of  events to be removed.  The beginning and end of the range can be
specified  by  typing  in the event numbers for each, or they can be set to
the beginning by clicking on START or END.  It is not possible to delete or
erase an entire sequence or track - at least one event must remain.

### Text and Map

Clicking  on  TEXT  provides  access to a 16 line by 68 character text area
which  can  be used to hold comments about a piece.  The text area is saved
and loaded with .ALL files.

The mouse and the BACKSPACE and cursor control keys can be used to move the
cursor  around  the  text  area, and the CLR HOME key will erase the entire
line which holds the cursor.  Note that .ALL files saved by versions of the
program  before  1.5  will  display gibberish in the text area when loaded.
This  is  normal,  and  can be written over with no danger of damaging your
data.

The MAP option displays a map of all track, sequences, and songs in memory,
including their names, comments and lengths in measures and events, as well
as  the  channel number and event type of the first event in each track and
sequence.   The  map and text area may be listed to a printer by pressing P
after  the  map is displayed on the screen.  The CONTROL key will terminate
printing when sending the map to a printer.  If SHIFT is held down when MAP
is  selected.   The map will be sent directly to the printer, without going
to the screen.

### Print

PRINT  sends  a  copy of the current sequence or track to the printer.  The
range  is  set  as  described  above  for DELETE and ERASE.  If there is no
printer  conected  or if the printer doesn't respond, a dialog box will ask
if you want to abort or try again.

### Change Repeats

This  option,  which  only appears in Open mode, sets the number of times a
sequence  will play when started from, the Open mode play/record screen.  A
dialog  box  will ask you to specify a number from 1 - 99.  Enter 99 if you
want the sequence to repeat immediately.  When a sequence is started from a
control  sequence,  it  will  play the number of times that are specifed by
that control sequence.

Step Time Track 

STEP  TIME APPEND is used to enter notes at the end of the current sequence
or  track  with the step time recording feature of the KCS.  See Chapter 9,
STEP  TIME  RECORD  for  more  information.   If you are in Track mode, you
should remember that the entire length of all tracks is the length of track
1.  Appending to track 1 thus increases the effective length.  Appends that
make  another  track  longer than track 1 will not be heard when all tracks
are played together.

STEP  TIME  TRACK  allows you to create a new track in step tine.  A dialog
box  will  ask  the  measure  at  which you wish to start recording and the
program  will set the time of the first event recorded so that it is at the
selected measure.  This feature allows you to add new material at any point
in a set of tracks.

Pressing F1 or left clicking on EXIT when in step time record will return
you to the edit screen. 

Find and Calc 

FIND  is  used  to  locate  a  particular  measure  in a track or sequence.
Entering  a number after clicking on FIND will place the edit cursor on the
event nearest to the start of that measure.

The  CALC  option  is  a  convenience  for  calculating the number of steps
between  two points.  Click on CALC, and an edit window will prompt you for
two  measure/step  values,  the  second  of  which  defaults to the current
position of the edit cursor.  After entering the values and clicking on OK,
the  difference  between  those  two points, in steps, will be shown on the
message  line.   If the exit button labeled CORRECT is chosen intead of OK,
the  program will attempt to "correct" the time of the current step to that
in  the  second  measure/step  entry  by  adding the calculated time to the
current  time.   This  allows you to enter a new event location in terms of
it's  measure and step directly in the CALC window without dealing with the
TIME setting.

After CALC is used to compute a time value, typing a "C" in the TIME column
will enter the calculated time value at that point.

Split 

SPLlT  allows  you to split the current sequence or track into two parts by
note  value.  A dialog box will ask you to specify the entire sequence or a
range.  It will also ask for a split point.  This must be entered as a MIDI
note number (60 = middle C).  All note events with note values greater than
or  equal  to  the  entered  note number will be copied to the first unused
sequence  or track and erased from, the original sequence.  Selecting SPLIT
with  a  split  point  of 60 will therefore remove all in notes at or above
middle  C  (C4)  from the current sequence or track and place them on a new
one.

SPLIT  followed  by  CHANNEL  ASSIGN  allows you to create a split keyboard
effect  for  a part that was recorded on a single MIDI channel.  It is also
possible  to  nondestructively  separate  all  the  note data in a track or
sequence  from  any  control  changes,  pitch  bends  or non-MIDI events by
setting  the  split point to 0; in this case, all note data will be sent to
the  new sequence or track, and the original sequence or track will contain
only the other data types.

Vary 

The  VARY option is used to generate a variation on the current sequence or
track  by randomly changing the pitches, velocities, and/or location of the
ON  events  in  the sequence.  The original sequence or track is unaffcted,
the  variation  is piaced in the first available sequence or track, and the
variation  is  selected  for editing.  In Track mode, the original track is
also muted.

The VARY dialog box displays six variation presets, and asks for the number
of  individual  variations  to  perform.   The  actual number of variations
performed  might  be lower, as sometimes a note will be randonly chosen for
variation  more than once.  The presets consist of different algorithms for
altering  the  sequence or track.  HALFSTEP changes the pitch of a randomly
selected  note  by  a semitone.  This will add new notes to the sequence or
track  and  thereby  change  the  tonality of the phrase.  PITCHES randomly
transposes  selected notes by larger amounts, but won't allow any new notes
to  be  created.   (For  instance,  if  the  original sequence consisted or
nothing  but C4s and C5s, the variation might contain C4, C3, C5, etc., but
no Bs or other notes.)

SWAPS  will@ randomly swap the pitches and velocities of two notes; if they
are  adjacent  notes,  the  time,  channel  and duration values may also be
swapped.  The first note of the sequence or track is not affcted by SWAPS.

DYNAMICS  randomly  varies  the  velocities of the notes in the sequence or
track.   The  amount  or  variation  is  determined  by  the  amount in the
original.

MIX  1  and  MIX  2  make  random  changes  to  the pitches, velocities and
durations  of  selected  notes.  The amount of variation will depend on the
amount  of  variation  in the original sequence or track.  MIX 1 will allow
new  notes  to  occur,  and  MIX 2 only permits notes that are found in the
original to be used.

The  VARY  feature in the KCS is a very early spinoff from the Programmable
Variation  Generator/Master  Editor  portion  or the Level II KCS, which is
available  as  an  upgrade to owners or the current KCS.  Contact us or see
our advertising for details.

Copy Sequence, Copy Track to Track and Copy Track to Seq

Each  of  these  options  makes a permanent copy of the current sequence or
track.   In  Open mode, the COPY SEQUENCE option will bring up a dialog box
asking  you  to  select the sequence that you wish to copy to.  The default
will  be  the  first unused sequence.  If you copy to an existing sequence,
that sequence will be lost.

In Track mode, there are two ways to make a copy.  COPY TRACK TO TRACK will
copy  the current track to the first unused track.  Remember that both this
track  and  the  current  track will play unless you mute one of them.  The
MUTE and SWITCH features described in Chapter 6 allow you to easily compare
the original and edited track within the context that they are to be used.

COPY TRACK TO SEQ is used in the same way as COPY SEQUENCE.  This option is
useful for making a backup that will not be heard with your other tracks in
Track  mode.   It is also useful if you have a part that you want to use in
Track  mode  in more than one context, as you can use the COPY SEQ TO TRACK
option to get it back into Track mode at a later time.

Copy Seq to Track 

This  option  copies  an  Open mode sequence into the first unused track in
Track  mode.  Note that neither this option or the APPEND and MERGE options
descrebed  below  will have any effect on the sequence being copied, merged
or appended.

Seq to All Tracks and All Tracks to Seq

These  options  allow  you to move data back and forth between the 48 track
tape recorder environment of Track mode and individual Open mode scquences.
These  sequences can be chained or otherwise combined into longer pieces in
Song mode or by using control sequences in Open mode.

SEQ  TO  ALL  TRACKS  copies  an  Open  mode sequence into Track mode.  All
existing  tracks  are erased by this Option.  Events in the sequence copied
will  be  sorted  by MIDl channel, with each channel assigned to a diffrent
track, which makes this option handy for unmerging open mode sequences, for
editing  channels  independently  and  for  splitting up sequences recorded
from,  another sequencer.  Each track will be named with the channel of the
data that it contains.

ALL  TRACKS  TO SEQ will merge the data from all active tracks (tracks that
are  not muted) into a single Open mode sequence.  The length of the merged
sequence   will  be  determined  by  the  length  of  Track  1.   For  some
applications  you  may want to create different sequences using this option
with different combinations of muted and unmuted tracks.

When  ALL  TRACKS  TO  SEQ  is  chosen  an edit wmdow will appear after the
sequence  selection  dialog  box in which you can enter a name and comments
for  the sequence.  The comments for the sequence will default to a list of
the  unmuted tracks or the list can be cleared by clicking on the field and
pressing CLR HOME.  The edit window also has a button labeled INCLUDE MUTED
TRACKS.  If INCLUDE MUTED TRACKS is turned on, all tracks will be copied to
the  new  sequence, regardless of their status.  ALL TRACKS TO SEQ can also
be selected directly from, the Track mode play screen with the !  (SHIFT-1)
key.

Append and Append Seq to Track

These  options  allow  you  to  append an Open mode sequence to the current
sequence  or  track.  A copy of the appended sequence is simply tacked onto
the end of the sequence or track being edited.

Merge

Available  in Open mode only, this option merges a second sequence with the
sequence  being  edited.   The  sequence  will  now  sound  as  though both
sequences  were  playing at once.  In track mode, this task is accomplished
using the BACKSLASH key from the play/record screen.

Delete Sequence and Delete Track

These  options  allow you to delete an unwanted track or sequence.  A dilog
box  will  request  the sequence or track number; the selection in this box
defaults  to the current track or sequence.  Sequences Y and Z and track 1,
can not be deleted.

Clear and Double 

CLEAR erases all tracks in memory.  It does not erase anything from Open or
Song modes.  An edit window will allow you to set the length of all tracks,
in  measures.   If you do so, the program will create track 1 with a single
DE  event  whose  TIME  is  the  desired  length.   This will determine the
effective  length  of any additional tracks that you record.  If you change
your  mind,  you can also cancel the operation from this wondow.  After the
clear  operation,  the  program  will put you on the Track mode play/record
screen.

DOUBLE  simply  doubles  the  length of all tracks.  Any events which would
havc played after the end of track 1 are lost.  Since the length of track 1
sets  the loop point for all 48 tracks, you could extend a set of tracks by
half  their  length  by using the DOUBLE option, then shortening track 1 by
the required amount.

Ext (Atari ST Only)

If  your ST has 1 meg or more of memory, the EXT option can be used to load
up  to  four other Dr.  T programs into memory at once, thanks to our mulli
Program Environment (MPE).  Clicking on EXT will cause a GEM file selection
window  to  appear, where you must select a .INF file for the program to be
loaded.  This file contains information about the program to be loaded.  If
there is enough memory available to load the new program, it will be loaded
and  a  three letter abbreviation for the new program (FTN for Fingers, for
example) will appear on the EXT line.

Once an external program is loaded, clicking on it's abbreviation will take
you to that program, or clicking here while holding down the SHIFT key will
erase the last prcgram loaded and free up the memory used.

Note that the external programs use memory that would otherwise be used for
event  storage,  so  there  are some tradeoffs involved in loading mulyiplr
programs,  especially  on  the  1040 ST (as opposed to a Mega ST, that is).
Some programs, especially our algorithmic composers, may also overwrite one
or  more sequences when they are loaded.  Check the manual for each program
for  this  type  of  thing  before loading the program, in order to prevent
accidental and unsightly loss of data.

Programs to be loaded via the MPE MUST be loaded from drive A. It is not
possible to load MPE programs from a hard disk, even if the original disk
is inserted in drive A. Attempting to do so will result in a system crash.
.INF files may be stored on any drive, however.

WorkBench, NewCLI, and Drag Bar -> (Amiga Only)

These  buttons are used to access the Amiga's multi-tasking functions.  The
WORKBENCH  switch is used to toggle the state of the WorkBench window (that
is  open  the  WorkBench if it's closed, or close it if it's open).  If you
attempt  to  close  the  WorkBench while a window is open on the WorkBench,
either a CLI wndow or a window from some other program, the KCS will not be
able to close the WorkBench.

The  NEWCLI  switch  is  used  to  open  a CLl window.  When this button is
selected,  the WorkBench screen will move to the fore and a CLI window will
appear.   The  operation  of  the  KCS will be suspended until you type the
command "EndCLI".

The  DRAG  BAR -> button is intended as a reminder on how to toggle the KCS
drag  bar  at the top of the screen.  Moving the mouse to the right edge of
the  screen  and  clicking  the  left mouse button will cause a drag bar to
appear  at  the  top  of  the  screen.   You can now move the KCS screen in
relation  to  any  other screens using the gadgets on the drag bar, as with
most other Amiga programs.

The  Amiga  version of the KCS will continue running when other windows are
in  use  (except  as  noted  above), so you may use any of your other Amiga
software  (including  Dr.   T's  Caged Artist patch editors for the Amiga!)
while  your  music  plays.   See  your  Amiga  documentation  for  more  on
multi-tasking.

Play and Play/Record

These  options  take  you  to  the  play  screen  of  the mode that you are
currently in.  The Track and Open mode play screens are described in detail
in  Chapters 6 and 7.  The Track Mode Play screen automatically puts you in
record.   To  record  in  Open  mode,  you have to select the record option
described below.

The PLAY option displays a dialog box with five options.  GO TO PLAY SCREEN
takes  you  directly  to  the play screen.  Double clicking the right mouse
button  from  the edit screen (or single clicking the right mouse while the
SHIFT  key  is  held  down)  will  accomplish the same thing.  PLAY CURRENT
SEQUENCE plays the sequence or track currently displayed.  PLAY FROM CURSOR
POSITION  plays the current sequence or track from the position of the edit
cursor;  clicking  the  right  mouse button once does the same thing.  PLAY
CURRENT  CUE  plays the sequence or track from the current cue point, which
can  be  set from the play screen, or with the SET AND PLAY NEW CUE option.
In  Open  mode, a dialog box will ask for a sequence and a starting measure
when  the  SET  AND  PLAY CUE optIon is selected; play will then start from
this  point.   In  Track  mode,  the  dialog  box will ask you to enter the
measure  of  the  new  cue  point, and all tracks will be started from that
measure.

If  you choose any option other than Go To PLAY SCREEN, the edit sreen will
be  displayed  during play.  The word PLAY will appear on the mcssage line.
You  can  stop  play  at any point by pressing the left mouse button or Fl.
You  can  also  restart play from, the beginning by pressing FlO, the SPACE
bar,  or  the right mouse button.  Tf you do neither, the word PLAY will be
erased  and  all  edit  functions  will  return  to  normal as soon as play
completes.

If  a  range  of events is highlighted, then clicking the right ouse button
will play only that range.  If no events are highlighted clicking the right
mouse will play the track or sequence from the edit cursor position.

Record 

This  is  used  to  enter the record screen from Open mode only.  Open mode
recording is described in detail in Chapter 7.

Load/Save 

Thc LOAD and SAVE options are described in detail in Chapter 10.

Set Options 

This  feature  lets  you  change  a  number  of parameters that are used by
different  parts  of  the  program.   It  brings  up an edit window that is
described in more detail in Chapter 11.

TRACK Mode, OPEN Mode, and SONG Mode

These options, only two of which are available from any screen, are used to
move  between  the program's three operating modes.  When you enter Open or
Song  modes, the program, will place you on the edit screen; when you enter
Track  mode, the program will place you on the play/record screen.  You can
then get to the Track mode edit screen by pressmg F1 or clicking on EXIT.

Colors (Amiga Only)

When  the  COLORS  option  is  selected, a small requestor box will appear,
where  you  may  adjust  the screen colors used by the program.  The screen
colors are automatically saved and loaded with enviroment (.ENV) files.

Quit 

QUIT  will  exit from the KCS and return you to the desktop (or WorkBench).
Be  sure  to  save your data before quitting.  A dialog box will ask you to
confirm the choice.
