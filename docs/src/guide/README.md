Dr. T's Keyboard Controlled Sequencer

[[toc]]

# Chapter 1 - Getting Started

Thank  you  for  purchasing  Dr.  T's Keyboard Controlled Sequencer for the
Atari  ST  or  Commodore  Amiga.   You  now  owm  the  most  powerful music
processing  program  available  at  this time.  Before reading this manual,
check  your disk directory for a file entitled README.  If one exists print
or  view  the  file  before  diving into the manual.  The file contains any
corrections  or  additions  to this manual which were made after it went to
press.  This manual is current for version 1.6 of the KCS.

If  you haven't already done so, turn to Appendix 1 of this manual and read
it  carefully.   This  appendix contains important information on obtaining
backups, warranty service, and customer support.  We have made every effort
to  test  the program and eliminate serious software bugs.  Still, there is
always  some  possibility  that  bugs  exist.   We  suggest that you become
thoroughly  familiar  wdth the program before using the sequencer on stage.
Dr.   T's  music  Software  assumes  NO RESPONSIBILlTY for losses caused by
software errors or other problems in using the program!

## How to Use This Manual

The  Keyboard  Controlled  Sequencer  is  a program which operates in three
modes  and performs several independent, yet inter-retated, functions.  Our
philosophy  in  designing this program has been to give the musician a wide
variety  of  methods  for  creating and manipulating music while imposing a
bare  minimum, of restrictions on the form of that music.  This allows each
user to develop a unique method of creating music without regard to our own
ideas of what form the music should or should not take.

In  addition  to  this  chapter,  the  manual  contains  two short tutorial
chapters  describing  the  six  disk  operations and sequencer options, and
several   chapters  of  application  notes  and  general  information.   We
recommend  that  you  start  by  reading  this  chapter  and the tutorials,
followed by Chapter 4 (OPEN AND TRACK MODE EDITING) for more information on
editing  and  Chapter  11  (SET OPTIONS) for information on the sequencer's
operating  parameters.   Refer  to  the  other chapters as the need arises.
Once  you  become familiar with all the features of the Keyboard Controlled
Sequencer,  you  will develop your owm method of using it, depending on the
equipment you are using and your own personal approach to music.

## Program Overview

The   Keyboard  Controlled  Sequencer  provides  three  distinct  modes  of
operation:   Track  mode,  Open  mode,  and  Song mode.  In Track mode, the
program  acts  as a 48 track tape recorder with many special functions that
make  it  far  more powerful than an actual tape deck.  Open mode is a more
generalized  sequencing  system  which  allows  for  completely independent
looping  of  up  to  128  separate  sequences.   Song mode is used to chain
sequences created Track and Open modes into complete songs much like a drum
machine.

The  three modes allow different approaches to be used for different pieces
of  music  depending  on  the  requirements of the piece or the mood of the
composer.   An  entire  song can be done in Track or Open mode without ever
going to the other two modes or a composition could be started in one mode,
edited  in  another,  and  completed  in  a  third mode.  Individual notes,
phrases  sequences  or  entire  songs can be easily transferred between the
various   modes  using  special  copy  commands,  or  with  cut  and  paste
techniques.   Sequences  and tracks can also be merged, unmerged, split, or
appended to other sequences or tracks.

Sequences and tracks can contain any type of MIDI data including note data,
continuous  controllers  pitch bend, aftertouch, system exclusive messages,
and real time commands.  Tempo changes can be added at any point in a track
or  sequence.   In  addition,  Open mode sequences can contain events which
start,  stop,  and  otherwise  influence  other  Open mode Sequences.  This
provides  a  means  for creating music of enormous complexity, or it can be
used   simply   as  an  alternate  method  for  creating  traditional  song
structures.

Each mode has its own edit and play/record screens.  While each edit screen
has  some  unique  features,  many  of the editing commands, as well as the
overall operation of the edit screens, are similar in all three modes.  The
three play screens each have their own special methods for interacting with
a sequence as it is Playlng.

Which  mode you choose for a given piece of music will depend on your level
of  familiarity with the program, as well as the requirements of the piece.
Users who are familiar with the Commodore or Apple versions of the KCS will
probably  want  to  dive  right  into  Open  mode, to take advantage of its
expanded  structuring  capabilities.   If you are new to sequencing but are
familiar  with  multi-track tape recording you may want to work exclusively
in  Track  mode until you have finished a couple of small pieces.  Once you
feel comfortable with Track mode, you can transfer your tracks to Open mode
for  assembly  into songs, either in Song mode or, after you've gained more
experience,  with  Open  mode  control sequences.  We do some or our pieces
exclusively  in Track mode, other pieces in Track and Song modes, and other
pieces using the generalized control structure of Open mode.

The  KCS  supports  a  number  of  load  and  save  operations, for maximum
flexibility  in  transferring  music  from  one file to another.  Indivdual
songs,  tracks, and sequences may be saved, all 48 tracks may be saved as a
block,  or  the  entire contents of memory .  may be saved.  MIDI files are
supported  via an external conversion program, and the settings of a number
of  important  playback and record options can be saved in an "environment"
file.   As  with  any  piece of Software, it is a good idea to periodically
save  a  copy  of your work to disk in case of an accident.  Any work which
takes  more  than  15  minutes is probable worth backing up, and you should
also  keep alternate takes of pieces in progress, as well as archive copies
of completed works.

## Open Mode Sequences

A  sequence  in  Open mode may contain any type of MIDI data or commands to
start  or  stop  other  sequences.   Sequences  are divided into two types,
primary  and  secondary.  There are 35 primary sequencesc designated by the
single  numerals  1  -  9, and the letters A - Z.  Primary sequences can be
started  and  stopped  from  the  Open  mode  play  screen  by pressing the
appropriate  alphabetic  or  numeric  key.   The remaining 93 sequences are
called  secondary sequences and are designated by two digit numbers from 00
through  92.  These sequences may be started from the Open mode play screen
by  pressing  two  digits  on  the  numeric  keypad.  They playback of both
primary  and  secondary  sequences  may be independently controlled in real
tine  using  the computer keyboard, and as many sequences as desired can be
played simultaneously.

The  KCS  contains  two  reserved  sequences,  sequence  Y  and sequence Z.
Sequence  Y  is  used  from,  the  edit screen by the BACKUP function.  The
program  will  not  let  you create or edit sequence Y, but you may play or
append  an  existing sequence Y.  Sequence Z is used as an automatic backup
for certain editing functions, and is not accessible to the user.

## Using the Keyboard and Mouse

The  Atari ST and Amiga keyboards consist of a basic typewriter layout with
a  row  of  ten  function keys above, a group of cursor control and editing
keys  to the right, and further right, a numeric keypad.  Dr.  T's Keyboard
Controlled  Sequencer uses the mouse to move the edit cursor, to access the
various  options  on  all  three edit screens, to oontrol playback from the
edit  screens,  and  to  control  playback  and  rocording  in  Track mode.
Clicking  the  left mouse button selects the option under the mouse pointer
or  places  the  edit  cursor at that point, while clicking the right mouse
button,  or  both  buttons  at once, select a play option.  When we use the
expression  *Click  the  mouse on xxx", we are asking you to move the mouse
pointer  to xxx and then to click the left button.  "Double click" means to
click the appropriate button twice in quick succession.

The  computer  keyboard  is  used  heavily  on  the various play and record
screens.   the  functions  or  the keys vary from screen to screen, and are
described  in  detail  in  Chapters  6 - 9, and summarized in the Appendix.
When selecting tracks or sequences on the play and recoed screens, numerals
on  the numeric keypad will NOT have the same effect as the numerals on the
typewriter  keyboard.   Function  keys  Fll  - F20 are accessed by pressing
SHIFT  and  Fl  -  FlO.   The  function  of  the FlO key is also duplicated
throughout  the  program  by  the SPACE bar.  In many cases, the RETURN and
ENTER  keys  will perform the same function, though there are some parts of
the  sequencer in which these keys act differently.  Such instances will be
pointed out in the manual, as well as the Appendix.

## Special Note for Amiga Users

Fortunately  for  us  at  Dr.   T's, the Atari ST and the Amiga are similar
enough  that  no  significant changes had to be made to the program when we
ported  it from the ST to the Amiga.  Due to some slight differences in the
two  computer's  keyboards,  however,  some  of  the  keys used for control
functions in the program are not available on both computers.  In the Amiga
version  of the program, we have substituted the following keys for keys on
the Atari keyboard.

    Atari ST        Amiga
    UNDO            Right AMIGA key
    INSERT          Right ALT key
    CLR HOME        Shift-DEL
    Numeric (       Numeric - (1000 only)
    Numeric )       Shift-Numeric - (1000 only)
    Numeric *       Numeric . (1000 only)
    Numeric /       Shift-Numeric . (1000 only)

## Edit Windows and Dialog Boxes

When  selecting  an edit operation or some other function in the KCS, it is
often  nccessary  to  provide  additional  information to the program.  Two
methods  are  utilized  to set the parameters for these operations.  Dialog
boxes  are  an  element  of  the ST's GEM operating system, and are used to
enter  data  for  some functions in the ST version of the program, and edit
windows,  which  were  specifically  designed  for  the  KCS,  are  used by
operations requiring more than a few data entries in the ST version, or for
all operations in the Amiga version.

Dialog  boxes,  which  are  described in the manual that came with your ST,
appear  in  the  center of the screen when certain operations are selected.
The  box  will  contain  two or more edit buttons, and possibly one or more
areas for entering numeric data or text, called data fields.  Clicking on a
data field will place the cursor at the end of that field and the BACKSPACE
and  ESC keys can be used to clear the data field.  When done entering data
click  on  the  appropriate  exit  button.   If  one of the exit buttons is
heavily outlined, it can also be selected by pressing RETURN.

Some  dialog  boxes may have radio buttons as well, which are used to choose
one  of several options.  These buttons are similar to the buttons on a car
radio, because selecting one will turn the previous selection off.

Edit windows are used by moost operations which have more than two or three
options  to  setect.  Some edit windows are quite small, while one, the SET
OPTIONS  window,  occupies  the  entire  screen.   Edit  windows contain an
assortment  of radio buttons, data fields, and exit buttons but, look quite
different  from, dialog boxes.  The radio buttons are the cyan (blue-green)
text  areas which describe the various options used to turn an option on or
off  (called toggling), while others are used to select one or another of a
set  of  mutually  exclusive choices (such as one of the three clock source
options).   Whether  a  button  is  a toggle switch or a selector switch is
usually   obvious   from   context,   and   is  easily  determined  through
experimentation.

Data  may  be  typed  into the data felds, or data can be entered using the
arithmetic  strip,  which  is  a  row of red arrow and diamond icons at the
bottom  of  the  edit  window.   After clicking on a data feld, clicking on
different  parts  of  the  arithmetic  strip  will  change the value there.
Clicking  on the leftmost diamond sets the entry to its lowest legal value,
the right diamond selects the highest value, and the middle diamond selects
the  center  of that parameter's range.  Clicking on the >>> or <<< symbols
increases  or  decreases  the  entry by ten units, while > and < change the
value  by  one  unit.  The functions of each of the icons in the arithmetic
strip are duplicated by the M, <, COMMA, L, PERIOD, >' and / keys.  The CLR
HOME  key will clear a data field, which is not always the same as entering
zero.  The cursor control keys can also be used to move from one data field
to another.

The  exit  buttons for the edit windows are the white text at the bottom of
the edit wAndow.  The RETURN key duplicates OK, and the UNDO key duplicates
the CANCEL button.

## Hard Disks and Multiple Programs

Hard  disks  can  be extremely useful in a studio or live MIDI system.  The
KCS  can  be installed on a hard disk, but the oriUnal program disk must be
inserted  in  drive  A:   on the ST, or any floppy drive on the Amiga, as a
"key  disk"  when  the program boots.  In addition to the KCS program file,
you  will  need  to  copy the files DEFAULT.ENV and DEFAULT.VRY to the hard
disk.

For Atari ST owners who would like to have more than one program, available
for  use  at  any  time,  a new feature which allows this has been added to
version  1.6 of the KCS.  The Multi Program Environment (MPE) allows you to
load  up  to  four additional Dr.  T programs into the computer at once, by
releasing  memory  normally  used for sequence storage for use by the other
programs.   Note  that  the KCS is NOT compatible wdth other programs which
perform  this  function  externally  such  as  K-Switch.  Because of memory
limitatations  when  the KCS is running the only desk accessory you may use
with the KCS is CONTROL.ACC, which was suppUed with your Atari.

In the Amiga version of the KCS, the Amiga's multi-taskung features
are fully suppoded.  Chapter 4 contains complete details. 

## Equipment Hookup

Depending  on  the equipment you have, there can be several ways to connect
the  various  synthesizers,  drum machines, sync boxes, etc.  Basically you
want  to  connect your recording synth or master keyboard's MIDI out to the
computer's  MIDI  in  then  connect  the  computers  MIDI out to the master
synth's  MIDI  in.   If  you're using an Atari ST, you can connet your MIDI
cables diretly to the computer's built-in MIDI port.  If you have an Amiga,
you  can  use  any commercial or home-built MIDI interface that connects to
the  Amiga's  serial  port.   (This  includes  just  about every Amiga MIDI
interface  on  the market, wnth the notable exception of Roland's MPU 401.)
It  is considered good practce to plug the MIDI interface into the computer
before turning your system on.

If you have more than one synth, you will need to connect any additional
synths to the computer using a MIDI through jack on your master
synthesizer, if present.  Assign each instrument to its own MIDI channel,
and make sure that data reception is enabled on each instrument.  If you want
to use  drum, machine or other MIDI clock source as a master clock while
recording you will need a MIDI merger to connect the computer's MIDI input
to both devices simultaneously. 

When  connecting  your system, there are two common conditions to watch out
for  that  can  cause major headaches.  The first is a MIDI loop, caused by
routing  the  computer's  MIDI out back to its input, either through a MIDI
merger  or  a  synth  with  a  built  in merge or echo function.  The other
condition,  which  occurs  only  on  the  Atari  ST,  is caused by the ST's
slightly  nonstandard MIDI output jack.  While the MIDI spec calls for pins
1  and  3  of  a  MIDI connector to be left open, the ST uses these pins to
provide  a thru connection from the ST's MIDI in.  Normally, this would not
be  a  problem, but some manufacturers of MIDI cables also violate the MIDI
spec and short these two pins to pins 4 and 5, which carry MIDI data.  When
used  with  the ST, these cables can cause data to become garbled, so check
your cables carefully before using them.  Worse yet, some instruments short
these  pins  together at their MIDI inputs, so that even simple 5 conductor
MIDI  or  DIN  cables  can  cause  the  problem!   If seeminly correct MIDI
connections  result in playback problems, check for these conditions.  MIDI
connectors are optically coupled so a wrong connection will at worst result
in no data transmissi@on.

## Running the ST KCS

To  run  the  Keyboard  Controlled  Sequencer  on  the Atari ST, insert the
program  disk  in  the  disk  drive  and turn the computer on, or press the
computer's  reset button.  The desktop will appear, with the disk directory
enclosed in a window.  Double click on the icon labeled KCS16.PRG,, and the
program  will  load and run.  <Note that future versions of the program may
have  slightly different file names.) The program will come up on the Track
mode record screen.

## Running the Amiga KCS

The  KCS  program  disk is a bootable WorkBench disk.  After the WorkBench
appears,  run  the  program  by double clicking on the large monitor-shaped
icon, or by typing KCS when in CLI.

Before  the program finishes booting a requestor box will appear, where you
may  allocate  a  portion  of  the  Amiga's free memory for use as sequence
storage.  The amount of memory reserved for the KCS is expressed in events,
where  an  event  is the equivalent of a note on/off pair, and is six bytes
long.   The  default  is 50% of the Amiga's free memory, but you may select
any  proportion  you  want.   The trade off here, of course, is that if you
allocate  all  your  memory  to  the KCS, you'll be able to store a maximum
number  of  notes  in  the  sequencer,  but  yu  won't  have as much memory
available  for  any  other programs such as patch editors.  You may want to
adjust  this  slider  differently at the start of each session depending on
how  much multi-tasking you plan to do.  This setting can't be changed once
it's  set without re-starting the KCS.  After you click on OK the program's
Track mode play/record screen will appear.

# CHAPTER 2 - Track Mode Recording Tutorial

The  purpose  of this tutorial is to familiarize the first time user of the
KCS  with  the  program's Track mode play/record screen.  The tutorial also
provides  an  introduction  to  the  Song mode edit screen, the set options
screen, and to transferring data between the three modes.

If you have a multi-timbral synthesizer system, set it up with a four voice
fuzz  guitar or similar patch on channel 1, and a two voice dynamic bass on
channel 2.  Your recording keyboard should be set to play some sort of horn
or  other  contrasting  sound  on  channel  3.   If  your instrument is not
multi-timbral, set its MIDI receive mode to Omni On/Poly.

If  your  drum machine recognizes MIDI note messages as drum hits, then set
its  mode  to Omni Off/Poly, and its channel to 16.  If it has programmable
drum key assignments, set them according to the table at the end of Chapter
12; if not, it should work as is.  If your drum machine can't be played via
MIDI, set it to sync to MIDI clock and select a plain vanilla 4/4 pattern.

Boot  the  program as described at the end of Chapter 1, and the Track mode
Play/record  screen  will appear.  If your system is connected as suggested
in  Chapter  1,  the sequencer is ready to record immediately.  (If you are
using  a  master  keyboard and a set of expander modules, you will probably
need  to  turn  on MIDI mergng by clicking the mouse on the MERGE button in
the lower right corner of the screen.)

Play  a  few notes on your recording keyboard, and the sequencer will gtart
to  record.   The metronome will start to tick, and the MIDI channel of the
first MIDI message recorded will be displayed for track 1 in the upper left
corner  of  the  screen.  Record a few bars of keyboard noodling then press
the  FlO  key.   The  sequencer  will  continue to record to the end of the
measure, and then loop back to the beginning of track 1.  The material that
you just recorded should now play back.

If  you were to continue playing on your keyboard, recording would start on
track  2,  and  both tracks would loop at the end of track 1.  This process
can  be repeated for all 48 tracks, in much the same way that drum machines
allow continuous overdub recording.

Now  click  on  the EXIT button at the bottom of the screen.  The sequencer
will stop, and the Track mode edit screen will appear.  This screen is used
for  editing tracks, and for accessing other parts of the program.  In this
case,  we  want  to  load a set of previously recorded tracks from disk, so
insert  the  KCS  program  disk  in  drive A and click on LOAD/SAVE, in the
second column of text on the right half of the screen.

The  LOAD/SAVE  dialog  box will now appear on the screen.  The .ALL button
(and  the  A:   button on the Attari) should be highlighted; if not, change
these  settings  by  clicking on the appropriate button.  Click on the LOAD
button  and a file selector box will appear.  Click on the name of the file
to be loaded (RECORTUT.ALL) followed by OK.

Once the file is loaded, the program, will return to the play/record scree,
which should now look like this:

The  play/reoord  screen  is  divided into two major sections:  the control
panel  at  the bottom of the screen, and the track status area, at the top.
Thc  control  Panel  contains  buttons  for  the  most important Track mode
recording  functions, and there is a set of hidden controls for lesser used
runctions.   The status area shows the status and name of each of the first
36  tracks.   A  message  line at the bottom of the screen diplays messages
regarding the status of various hidden controls, and other information.

Click  the  mouse  on  the  PLAY button to start the sequencer.  Six of the
eight  tracks  in  use  will  start  to  play.   The RECORD button is still
highlighted,  which  indicates  that  the sequencer is ready to record.  We
won't  bem  recording  anything  for  a  while,  so click on this button to
disable recording.

The  control panel contains other buttons which correspond to controls on a
tape  deck.   The  PLAY,  STOP,  and  PAUSE  buttons  perform  the  obvious
functaons,  and  the << and > > icons next to the CLOCK display are used to
change  the  sequencer's  tempo,  or  speed.   All  of  these  controls are
activated  by  left  clicking on them, just as if they were actual physical
buttons.   Experiment with these controls then return the sequencer to PLAY
status at a comfortable tempo.

Click the mouse on the display for track 1 in the status area, and the word
MUTE will appear on that line, and the track will be silenced.  Clicking on
the  track  again,  or  pressing  the  1  key  on  the computer's typewiter
keyboard, will unmute the track.

Note  that  the  MUTE button is highlighted.  If MUTE is on, then selecting
any  track,  either  with the mouse or by pressing a track key will mute or
unmute that track.  The track keys are single keys on the computer keyboard
which  correspond to one of the 48 tracks, and are listed in the right hand
column  under  TRACK in the status area.  Experiment with the MUTE function
on  the  other tracks, using the mouse and the track keys.  (You might want
to avoid unmuting track 6 at this point, as his track is in a different key
than the others.)

After  you  get a feel for muting tracks, return each track to its original
MUTE  status (see the screen shot earlier in this chapter) and unmute track
4.   This  track  is  a slight variation on track 5, and doesn't contribute
anything of interest, yet.

Hold  down  the SHIFT key and press F1.  The MUTE light will go off and the
words "SHIFT 1" will appear on the message line.  Click on track 4, and the
hi-hat part will be augmented by a slightly delayed version of itself.

Click  on  track  4  again to increase the delay time.  At this setting, it
sounds  less  like  an intentional delay and more like slop, so let's shift
the  track  back  one  step.  Press SHIFT and F4, and the message line will
change  to  SHIFT  1.   Click on track 4 once, to return it to its slightly
delayed position.

MUTE,  SHIFT  1,  and  SHIFT  - 1 are all part of a set of functions called
track  options.  A track option determines what will happen to a track when
it  is  selected  with  the mouse or its track key.  There are over a dozen
different  track  options, but only one can be turned on at any time.  Some
track  options  can be selected on the control panel, while others can only
be  selected  from the computer's keyboard.  Another important track option
which  can be accessed from the control panel is the SOLO option.  Click on
the  SOLO  button,  and  experiment  with  the  track option on each track.
Select  MUTE  when  you have soloed every track and they will all return to
their originl statuses.

Now  let's  copy  these  tracks  into  Open  mode  sequences, which will be
assembled  into  a  song  in Song mode.  The ALL TRACKS TO; SEQ Option will
copy  all  unmuted  tracks  into  a  specified sequence.  By muting various
combinations of tracks and copying all tracks to a number of sequences it's
possible  to  build  sections  of  a  song in Track mode.  We will use this
technique to make a short song from these tracks.

Stop  the  sequencer,  and  mute  tracks  1,  2  4,  6, and 8.  Press the !
(SHIFT-1)  key,  and  an  edit window labeled COPY TO SEQUENCE will appear.
This window allows you to specify a sequence number, name, and comments for
the  sequence.   (For  the moment, ignore the INCLUDE MUTED TRACKS button.)
The  sequence  number  defaults to the lowest empty sequence (in this case,
sequence 2), and the comments field will show a list of the unmuted tracks.
Cllck on OK or press RETURN to copy the unmuted tracks (tracks 3, 5, and 7)
into sequence 2.

Now, using the method described in the last paragraph copy the following
track combinations into sequences 3 to 8: .

Mute tracks 1, 2, 4, and 6, and copy the other tracks into sequence 3. 

Mute tracks 1, 4, and 6, and copy the other tracks into sequence 4,

Mute tracks 4 and 6, and copy the other tracks into sequence 5. 

Mute track 6 only and copy the other tracks into sequence 6. 

Mute tracks 1 and 6, and copy the other tracks into sequence 7. 

Mute tracks 1, 5, and 8, and copy the other tracks into sequence 8. 

Now  that  we've  created  the parts to our song we can go to Song mode and
chain  them into a song.  Click on SONG MODE on the Track mode edit screen,
and  the Song mode edit screen will appear.  Songs are created by typing in
entries  in  the  event  list, the large empty area on the left side of the
screen,  The  small  square  in  the upper left corner of the event list is
called the edit cursor, and determines where data entry and editing occurs.

The  number  or  letter in the column labeled SEQ determines which sequence
will  play.   Type  2 on the computer keyboard, and note the changes on the
screen.   The  white box shows the valid area for cursor placement, and the
columns  to  the  right  of  the  SEQ  column  are  used  to  enter  tempo,
transposition,  and other information.  Use the cursor control keys to move
the  cursor  to the right end of the box, and type 2 under REP, followed by
RETURN.

In the same way type in the number shown in the following screen shot.  Use
the  UNDO key to erase mistakes before pressing RETURN, or use the mouse to
place the edit cursor over your mistake and type in the corrected data on a
previously  entered  line.   The NAME column will remain blank as you enter
each  sequence, though if we had named the sequences when creating them the
names would appear at this point.

The  numbers  in  the  SEQ column indicate which sequence will be played at
that  point  in  the  song.   TRN  specifies  a pitch transposition for the
sequence,  in  half  steps,  and REP shows how many times the sequence will
repeat.   Once  the  song  is complete, it can be played from the Song mode
play  screen;  but  since  this  is a Track mode tutorial, we will use Song
mode's  SONG TO ALL TRACKS option, which will erase all tracks and create a
new  set  of tracks that are the equivalent of the song.  This will be much
longer  than  the original tracks, and will allow us to overdub tracks that
are the length of the entire song.

Before  coping  the song to all tracks, there is one minor adustment to the
sequencer's  operating parameters that must be made.  Click on SET OPTIONS,
and  a large edit window will appear.  A number of different parameters can
be set from this screen, but for the moment, we are only interested in one,
DRUM  CHANNEL,  on the right side of the screen.  The space to the right of
this  button displays the drum channel.  Click on this space, then click on
the  rightmost  diamond in the arithmetic strip at the bottom of the window
to  set  the  drum  channel to 16.  Press RETURN or click on OK to exit the
edit  window.  Setting a channel to drum channel status tells the sequencer
not to transpose that channel, which would change each drum to another drum
if  applied  to a MIDI drum part.  Since sequence 8 is transposed each time
it's  played  in this song the drum channel must be set to 16 BEFORE coping
the song to all tracks to protect the drum parts on channel 16.

Click  on  SONG TO ALL TRACKE, and a dialog box will appear to confirm your
choice.   After  clicking  on  OK,  the  program will take a few seconds to
create  the  new  tracks.   When  the  working  message disappears from the
message line, click on TRACK MODE.

When the Track mode play/record screen appears note that the eight original
tracks  have  been compressed into four tracks - one for each channel used,
and  a  "conductor"  track  (track  1) which sets the length of all tracks.
Click on the PLAY button, and the song will start to play.

With  the  song "stretched out" into four song tracks it is now possible to
overdub  tracks that are the length of the entire song.  This allows you to
add  parts that are not locked into the repetitious patterns created by the
original tracks such as lead lines and drum fills.

The  exact  set  up  for  recording  tracks  will  vary  depending  on  the
keyboard/sound  generator  arrangement you are using.  For the rest of this
tutorial,  we  will assume that your recording keyboard is a single channel
synthesizer  such  as  a  DX7  or  a  Mirage.   If you are using some other
arrangement  see the sections on MIDI MERGE, ECHO, and Local Control OFF in
Chapters  6  and  12,  as  well as your owner's manuals, for information on
configuring your system.

Before  starting  to record, click on the CNTRLRS button.  This enables the
recording  of  MIDI  controller  infonmation  such as pitch beet modulataon
wheel, and sustain pedal movement.  Play along with the sequencer until you
get  an  idea  of  what you'd like to record then click on RECORD, and play
your part.

Chances are, the first track that you record will not be to yur liking.  In
this  case, click on RE-RECORD; the track you are recording will be erased,
the  sequencer  will  stop,  and you can sart over.  Once you've recorded a
good take, you will be ready to record another track in the same way.

By  now,  you  should have a good idea of the basic technique of Track mode
recording  on  the  KCS.   The Track mode play/record screen has many other
features which have not been discussed here.  At this point, you might want
to  record  a  short  picce  of  your  own, referring to Chapter 6 for more
detailed  information  on the recording process:  or continue with the Open
mode  editing  tutorial  for  a  look  at  how  the  sequencer  stores  and
manipulates musical data.

# CHAPTER 3 - Open Mode Editing Tutorial

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

# CHAPTER 4 - Open and Track Mode Editing

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

# CHAPTER 5
                               
                           SONG MODE EDITING
                           
Song  mode provides a simple environment for creating longer pieces (songs)
by  chaining  Open mode sequences.  This task can be accomplished much more
generally   with   control  sequences  in  Open  mode,  but  Song  mode  is
conceptually  much  simpler.   You  may want to create a few pieces in Song
mode  before  you attempt to use control sequences.  You may also choose to
do  all  of  your  sequence  chaining  in Song mode.  Song mode is intended
primarily for use with multi-instrument sequences created in Track mode, as
only one sequence can play at any time.  There is certainly no limit to the
complexity of the music that you can create using Track mode and Song mode.

The  Song mode edit screen allows you to create songs that consist of up to
100  linked  segments.  For each segment you can specify the sequence to be
played,  a  tempo change, a delay, a pitch transposition, and the number of
times the segment is to repeat.  You can also specify program and/or volume
changes  on  any  or  all of the 16 MIDI channels for each segment.  Tempo,
program  and  volume  change  entries are optional; if you do not specify a
tempo  change for a segment, it will play at the current tempo.  No program
or  volume  changes  will be made by the program on channels for which they
have not been specified.  Sequences entered in Song mode should not contain
PRIMARY, ST, XX, XL, MS, or US events, as these are ignored in Song mode.

Entering Segments

Song  segments  are  entered  into an event list that is similar to the one
used  in  Track  and  Open modes.  Although the headings are different, the
procedure  for  is entry and edit of individual segments is similar to that
described  in Chapter 4.  As in the other modes, any of the edit options on
the  right  side  of the screen can be selected by clicking on that option,
and  songs can be selected with the select boxes in the lower right corner.
The fields used in the Song mode event list are:

SEG:   A  number  supplied  by  the  program indicating the position of the
segment  in  the  list.   SEG is used to specify a range of segments in the
song when you are using the various edit options.

SEQ:   The  number  <1 - 9, A - X, or 00 - 92) of the sequence to be paayed
for  the segment.  Frequently, this will be the only entry that you need to
make for a segment.

NAME: The name of the sequence to be played.  This is supplied by the
program, and cannot be changed in Song mode.

TEMPO:   The  tempo  at  which  the  segment  is  to be played.  If this is
omitted,  the segment will play at the previously established tempo.  Tempo
changes  will have no effect unless you are using the internl clock, though
it is used in calculations when synchronizing to an external clock.

DELAY:   The number of time steps that you wish the program to pause before
playing the segment.  Most of the time, you will probably not need to enter
a DELAY.

TRN:   The  number of half steps that you wish the segment to be transposed
in  pitch.   If  a drum channel has been defined on the SET OPTIONS screen,
notes on that channel will not be transposed.

REP:  The number of times that you wish the segment to repeat.  If you want
the segment to play only once, you do not need to enter this field.

When  you  first  enter  Song  mode,  the edit screen will come up, and the
cursor  will  be under SEQ on the first line.  To enter a segment, type the
desired  sequence  number, and any other fields that you wish to enter, and
press  RETURN.   You can use the TAB and SHlFT-TAB keys to move forward and
back  along  a  line.   The  DELAY and TRN fields default to 0, and the REP
field  to  1,  so  if  you  want  your sequence to play once vwih no delay,
transposition, or tempo change, you need only enter the sequence number.

Here is a shot of the Song mode edit screen, with a representative song
in ihc event list:

These  seven  segments  illustrate all of the options available on the left
side  of  the screen.  The first segment entered was sequence 1, at a tempo
of  90  BPN.   If  no tempo had been entered, the segment would play at the
previously set tempo, shown at the bottom of the play screen.  Tempo change
events  within  the  sequences  themselves  will change the tempo from that
programmed on the Song mode edit screen.

The  second  segment  plays  sequence  F  with  the tempo increased to 120.
Sequences  3  and  4 are each played once at the same tempo.  Sequence 5 is
then  played twice at a tempo of 140, and then twice again transposed up 12
half steps (an octave).  Finally, sequence 6 plays at a tempo of 120.  This
segment  does  not start until 48 time steps (half a measure at the default
setting) after the previous segment ends.

To  play  the  song,  click  the right mouse button, and the Song mode play
screen  will come up.  Click the right mouse button or press Fl to play the
song.  The Song mode play scrcen is described in detail in Chapter 8.

Editing Single Segments

Segments  are  edited  using  the same procedure used in the Track and Open
mode edit screens.  Move the edit cursor to the line that you wish to edit,
and  click  the  mouse.   Type in any desired changes, and press RETURN, or
press UNDO to cancel any changes.  If you want to remove a tempo, repeat or
delay  specification,  just  type  over  it with blanks.  You can delete an
entire  segment  by pressing the DELETE key while the cursor is on the line
you wish to delete.

If  you  want  to add segments to a song, click under SEQ on the line below
the  last segment shown.  If your song is more than a full screen long, you
can  use  the  scroll arrows to move up and down.  A song can contain up to
100 segments.

Song Mode Editing Options

The  Song  mode edit options, on the right side of the screen, are selected
by  clicking  the  mouse  as  in  the other modes.  Most of the options are
similar  to  corresponding options on the Open and Track mode edit screens,
described in Chapter 4.

Name

The  song  name  is 60 characters long, and stretches across the top of the
screen.  Clicking on NAME, or anywhere on the line, will move the cursor to
this line.  Type in the desired name and press RETURN.

Text and Map

The  TEXT  option  provides  access to the KCS's comment text area, and MAP
displays  information  about  every  active track, sequence, and song.  See
Chapter 4 for more on these options.

Prog/Vol Changes

You can specify program and/or volume changes for any or all of the 16 MIDI
channels  to  be sent before a segment is started.  Move the edit cursor to
the  line  containing  the segment that you want to insert changes for, and
then  click  the mouse on PROG/VOL CHANGES on the right side of the screen.
An edit window with data fields for MIDI program and volume change commands
on  all  16  channels will appear.  The segment number will be displayed at
the top of the window.

Data  is  entered  in  the usual manner for edit windows.  MIDI program and
volume  numbers  range  from 0 - 127, though not all instruments respond to
MIDI  volume changes and most instruments do not use all 128 patch numbers.
Different  instrumens  also  use  different  patch numbering systems.  MIDI
patch  number 0 will for example, call up patch off on an Oberheim Matrix 6,
patch  1  on Yamaha instruments, preset 1 on a CZ-10l, and patch 11 on Korg
instruments.   In  general  when  you  have  difficulties  interfacing MIDI
devices,  the  Doctor's  precription is REXMAN (Relax, EXperiment, and read
your owner's MANuals).

The  program and volume changes will be sent before the selected segment in
played.   No  program  or  volume information will be sent for channels for
which no data was entered.

Insert and Delete

Clicking on INSERT or pressing the INSERT key will open up a blank line, as
in  the  other  modes.  Type in the new segments pressing RETURN after each
one,  or UNDO after any mistakes.  Click the m*ouse on a new line to cancel
INSERT.

Pressing the DELETE key will delete the segment under the cursor.

Copy Song to Song and Copy Song to Sequence

COPY  SONG TO SONG lets you copy the current song to the first unused song.
COPY  SONG  TO  SEQ  lets you copy the segment list to an Open mode control
sequence.   Open  mode control sequences, described in Chapter 4, provide a
more  general way to arrange your sequences into songs.  If you decide that
your  song  needs  some more parts, you may want to use Copy Song to Seq to
get  the  song  into  Open  mode,  and then add more parts using overdub or
record  with  cue.   Copying  a  song to a sequence is also a good starting
point  for  understanding  the  structure of control sequences.  you should
remember  that  you  cannot  go  the  other  way; there is no way to copy a
control sequence to a song.

Append and Delete Song

You  can append another song to the current song or delete an unwanted song
from memory by clicking on APPEND or DELETE SONG.  Dialog boxes will prompt
for the song to append or delete.

Song to All Tracks

Clicking  on  this  option  will  delete all tracks currently in Track mode
memory  and  place  the current song in all tracks by copying each sequence
used  in the song to all tracks.  This is useful for overdubbing solo parts
or  controllers  over  an  entire  song:   but  makes editing the song more
difficult.

Since  coping  a  song  to all tracks requires quite a bit of the computers
memory  for  work space, it is possible that you may get an "out of memory"
message when doing this with a long song.

Other Options 

The  remaining  options  on  the Song mode edit screen are identical to the
coresponding  options  in  Open and Track modes.  See Chapters 4, 10 and 11
for  more  details  on PLAY, LOAD/SAVE, SET OPTIONS, OPEN MODE, TRACK MODE,
and QUIT.

# Chapter 6 - TRACK MODE PLAY/RECORD

The  Track  mode play/record screen of the KCS functions as a 48 track tape
recorder, with all the controls usually found on a mehanical tape recorder,
as  well as many more that have no counterparts on the physical instrument.
All  aspects of recording and playback are controlled in real time from the
play/record screen.

Track  mode  can  be used in many different ways in composition.  An entire
piece can be recorded in Track mode, using tracks that run the whole length
of the piece, or completed tracks can be moved to Open mode and linked with
other tracks in Song mode, or in Open mode using control sequences.

## Play/Record

The Track mode play/record screen will appear whenever
Track mode is entered from one of the other
two modes, and when the program is first booted.  The play/record
screen looks like this:
 
The  screen  is  divided  into  three sections:  the track status area, the
control  panet,  and the message line.  The track status apea, in the upper
portion  of  the  screen,  displays the play status of each of the first 36
tracks.   Activity on any track is also shown in the track status area by a
musical  note  icon, which changes color as notes occur on that track.  The
control  panel,  in  the  lower  part  of  the screen, contains a number of
buttons  and  indicators  which mimic the operation of a trap recorder, the
message  line, at the very bottom of the screen, displays messages relating
to  various  controls  that aren't shown on the control panbel.  All of the
buttons  on  the control panel can be activated with the mouse, or from the
computer's  key6board.   In  addition, there are a number of other controls
which  can  be  accessed  only from the keyboard or the SET OPTIONS screen.
Each control is described in detail later in this chapter.

Each track has two designations: its track number, which is a number from 1
- 48, and an associated track key, which is a single key on the computer
keyboard. Tracks are selected either by pressing the appropriate track key,
or by clicking on that track in the status area. Selecting a track is not
used to determine which track to record on, since recording is always done
on the lowest numbered free track, but to apply the currently selected
track option to a track. The track options are used to mute or solo a
track, as well as for other functions.

## Recording in Track Mode

Recording  starts  when a note is played on the controller connected to the
computer's  MIDI  in,  when the PLAY button is clicked, or when the FlO key
(or  the  SPACE  bar)  is  pressed.  As soon as recording starts the visual
metronome  will  start  to flash, the audible metronome will start to beep,
and  the measure/step counter will start counting.  Recording ends when the
FlO  key  is pressed, or when the end of track 1 is reached, if track 1 has
already been recorded.  (The time at which recording stops is also affected
by  the ALIGN option, described later.) At this point, recording will start
on  the  next  available  track,  and  continue until the end of track 1 is
reached again.  This process repeats until all 48 tracks are full, or until
the  sequencer  is  stopped.   Recording can be turned on and off while the
sequencer  is  running by clicking on the RECORD button or pressing F2, and
all of the other controls can be changed during recoed or playback as well.

## Track Options 

The  track  options allow you to determine what will happen to a track when
it is selected, either with the mouse or by pressing a track key.  Only one
track  option  can  be  active at a time.  Some of the track options can be
selected  from  the  control  panel or the keyboard, while others which are
used less frequently can only be selected from the keyboard.

The  default  track option is MUTE.  When MUTE is active, selecting a track
will  "silence"  that  track;  the  track  can be unmuted by selecting it a
second  time,  as  long as the MUTE track option is active.  Muting a track
will cause that track's status display to change from PLAY to MUTE.

The other track options are SOLO, SET SWITCH, SET PUNCH, CLEAR/RESET PUNCH,
ERASE  PUNCH,  COPY PUNCH, ERASE TRACK, SHIFT, SWAP, EDIT SELECT, and NAME.
Each track option is described in detail later in this chapter.

## Punch-In

Punching is used to replace a portion of an otherwise good track.  The term
"punching"  is  borrowed  from  multi track terminology, where it refers to
re-recording  a  section of a track by punching the record button in at the
start of the unwanted section and punching out at the end.

Punching  on  the  KCS  is a little different than punching on a tape deck.
Instead  of  erasing  the  punched  portion of a track, the track is simply
muted  for  the  duration  of  the  punch and new data is recorded on a new
track.   Once  a  good  replacement  track  has been recorded, the original
punched  data  can  be  erased  and  the two tracks merged.  The details on
punching  can  be  found latcr in this chapter, in the section on the PUNCH
buttons.

## RECORD

The  RECORD  button  on  the control panel is used to turn recording on and
off.   This  button  will light up when recording is activated.  Record can
also be turned on or off with the F2 key.

## STOP, PAUSE, and PLAY

Clicking  on  STOP  will  stop playback of all tracks, complete the current
recording  (if  record  is on), and reset the sequencer to the beginning of
all tracks, or to the current cue point, if one is selected.  The ENTER key
duplicates this function.

Clicking  on  PAUSE  or  pressing  the  ESC  key  will temporarily stop the
sequencer.   Notes  played on the keyboard will not be recorded when paused
though  controllers  may  be  recorded  depending  on  the  setting  of the
CONTROLLER  PAUSE switch on the SET OPTIONS screen.  Clicking on PAUSE will
restart the sequencer.

PLAY  starts  the  sequencer.  If recording is enabled recording will start
when  PLAY is selected.  If a cue point has been set, playback or recording
will start from that point.  Playback can also be started with the FlO key,
the SPACE bar, or the right mouse button.

## CLOCK and MEASURE

The  CLOCK  display  shows  the  current clock source, and the tempo of the
internal clock.  If MIDI is displayed next to CLOCK, then the external MIDI
clock is in use.  Otherwise, the internal clock tempo is shown in beats per
minute (BPM).

Clicking  on  the  >>  or << symbols will incrcase or decrease the internal
tempo  by  an  amount  set  by the TEMPO CHANGE BY RATIO control, described
under  HIDDEN  CONTROLS,  below.   Holding  the mouse button down while the
mouse  pointer  is  on  one  of  these symbols will cause a rapid change in
tempo.   Pressing  the, and .  keys (COMMA and PERIOD) will also change the
tempo.

The  MEASURE  display  shows  the  current location of the sequencer during
record and playback, in measures and steps.

## RE-RECORD, RE-RECORD STOP and ERASE TRK

Clicking  on  RE-RECORD  or  pressing  UNDO  will  erase the current track.
Normally,  this  option  will  stop  the sequencer and set the measure/step
counter  to  the  beginning  of  the  sequence (or current cue point).  The
automatic  stop  feature  can  be turned off from the SET OPTIONS screen by
turning off the RE-RECORD STOP button.  In this case, clicking on RE-RECORD
will erase the current track, without affecting the sequencer's playback.

ERASE  TRK  causes  the most recently recorded complete track to be erased,
along  with the current record track.  This function is duplicated by the ?
key.   Be careful when using this button, as the sequencer will not ask you
to confirm this selection before erasing these tracks!

Tracks  can  also  be erased with the erase track option.  When this option
(which  can only be selected with the CLR HOWlE key) is active, selecting a
track will erase that track.  A question will appear on the message line to
confirm  this  choice.   Answer  "y" to erase the track, or "n" to keep the
track.  Select another track option, such as MUTE, to turn this option off.

## CNTRLRS and AFTOUCH

These  options  are  used  to  enable  or  disable  the  recording  of MIDI
controllers  such  as  pitch  bend  patch  changes and aftertouch.  CNTRLRS
affects  all  MIDI  data  except  note data and aftertouch, and can also be
toggled  with  the  COLON (:) key.  The AFTOUCH function is duplicated with
the QUOTE (') key.

When  recording controllers, if a pitch bend or sustain pedal (CC 64) event
is recorded, a zero pitch bend and/or sustain pedal off event are placed at
the  end  of the recording.  This prevents hanging or mistuned notes if the
affected  sequence  is looped or joined to another sequence, either in Open
mode  or  by  using  the  DOUBLE  or APPEND options in Trace mode.  This is
helpful in most circumstances, but you may need to edit these events out if
you are recording a part that is to be spliced into an existing sequence.

## QUANT

When  this switch is on, any events recorded will be rounded to the nearest
time interval represented by the musical icon below the QUANT switch.  This
is similar to the AUTO-CORRECT edit option, but also effects controller and
other  non-note  data  types  as well, and cannot be undone.  Only quantize
values  represented  by  the  available note icons may be selected from the
play/record  screen,  but  any  value  desired  may be entered from the SET
OPTIONS window.

## MERGE and ECHO

The MERGE and ECHO buttons toggle the MIDI merge and echo features. MIDI
merge is used to mix data from the computer's MIDI in with data from the
sequencer, for transmission through the MIDI out jack. This is necessary
when using the KCS in conjunction with a master keyboard to control a set
of expander modules.

ECHO  is  similar  to  MERGE,  except  that  data is rechannelized prior to
mergina and/or recording.  Clicking on ECHO causes a display of the current
echo  channel to appear beneath the ECHO button; clicking on the associated
>> and << symbols will change the echo channel.

The  functions  of  the  MERGE  and  ECHO  buttons  are duplicated with the
SEMICOLON  (;)  and BACKSPACE keys, respectively.  When ECHO is active, the
status of the MERGE switch is ignored.

## MUTE, SOLO and SET SWITCH

These  three  track options are used to selectively mute one or more tracks
during playback.  MUTE, which was described earlier in the section on track
options can also be activated with the F3 key.

A  block of adjacent tracks can be muted or umuted by holding down the left
mouse  button and dragging the mouse over those tracks.  The status of each
track will toggle as the mouse passes over it.

The  MUTE  function can also be modified using the SHIFT and ALTERNATE keys
in  conjunction  with  the  mouse.  If ALTERNATE is held down while MUTE is
active  and a track is selected with the mouse, that track will be muted if
it ts playing, but will not be unmuted is it is already muted.  Conversely,
holding  down  SHIFT while selecting a track with the mouse will unmute any
muted  tracks, but will not mute tracks.  (Think of the ALTERNATE and SHIFT
keys as meaning "mute only" and "unmute only" respectively.)

The  SOLO  track  option  is used to solo a track, that is, mute all tracks
except  the  selected track.  Selecting the track a second time will unmute
the other tracks.  SOLO can also be selected by pressing F8.

SET  SWITCH  is  used  to set up a "switch" which will alternately mute and
unmute  two selected tracks.  Selecting a track after this option is chosen
will  change  that  track's status to SWITCH; selecting a second track will
change  the  first  track's  status to PLAY and the second track's to MUTE.
The  RETURN  key  can  then  be  used to alternately switch between the two
tracks.   After  the  second  track  is  selected,  the  track  option will
automatically  change  to MUTE.  The SET SWITCH option can only be selected
with the F9 key, and not from the control panel.

Note that muting a track which contains OFF events (which are only recorded
for  notes  with release velocity or for notes greater than 999 steps long)
could cause some notes to stick.  Stopping the sequencer, or pressing the "
(SHIFT-ACCENT) key, will clear any stuck notes.

## EXIT and Help

Clicking on EXIT or pressing F1 will stop the sequencer and transfer you to
the  Track mode edit screen.  Pressing the HELP key will stop the sequencer
and display a list of the track mode keyboard commands.  These commands are
also  listded  in the TRACK MODE COMMAND REFERENCE LISTS at the end of this
manual.

## PUNCH

The buttons under PUNCH are used to access the sequencer's punch in and out
capabilities.   The  punch buttons are all track options so only one can be
selected  at a time, and selecting any other track option will deselect the
punch buttons.

SET  PTS  is used to set the start and stop points for a punch.  The F4 key
duplicates  this  function.   When this track option is active, selecting a
track will set the start point for the punch:  the track will also be muted
and  will  appear  in  the status display under PUN.  Selecting the track a
second  time  will  set  the end point for the punch, and the track will be
umnuted  and  the  word  ON  will  appear  under  PUN.  If the track is not
selected  again before the track stops, the end punch point will default to
the  end  of  the  track.   As  the track loops, the display under PUN will
change  from  ON  to  OFF when the punched out section is playing, and back
again when the end punch point is reached.

If  punch  points  have  already  been set for a track, then selecting that
track  will change either the start or end point of the punch.  Selecting a
track  while that track is punched OUT will change the end punch point, and
selecting  the track while it is on will set a new start point.  Each track
can only have one set of punch points, but separate punch points can be set
for as many tracks as needed.

The  clear punch points track option is selected by clicking on CLR PTS, or
by  pressing  F5.   Selecting  a  track  while  this  option is active will
temporarily  remove  the punch points in that track, and unmute the punched
section.  Click the mouse a second time to restore the punch points.

Clicking  on  ERS  PUN  or  pressing  F6  selects  the  erase punch option.
Selecting a track while this option is active erases the punched section of
that  track and optionally merges the most recently recorded track with the
original.   When a track is selected, a prompt asking for one of three keys
to  be  pressed  will  appear  on  the  message line.  Press Y to erase the
punched data, L to erase the punched data and merge the track with the last
track  recorded  (thereby  replacing  the punched data), or N to cancel the
command.

CPY PUN or the F7 key will select the copy punch track option.  Selecting a
track with active punch points will copy the punched data to the next empty
track,  and  delete  that data from the original track.  The new track will
also be muted.

## CUE

The  CUE button is used to activate Track mode's cue loop.  When CUE is on,
the sequencer will repeatedly loop the material contained between the start
(FROM)  and  end  (TO)  points  of  the  cue  loop.   Clicking  on CUE will
immediately  start all tracks at the beginning of the cue loop; clicking on
PLAY  when the CUE button is lit has the same effect.  The TAB key can also
be  used  to  activate the cue loop, and the SLASH (/) key will turn cueing
off.

The  start  and  stop points for the cue loop can be changed in a number of
ways.   With the mouse, clicking on the > > and << symbols will move either
cue  point  forward  or  backward.   These  controls  are duplicated on the
computer keyboard by the cursor control keys, with the CURSOR UP and CURSOR
DOWN keys controlling the start point, and the CURSOR LEFT and CURSOR RIGHT
keys affecting the end point.

The  amount  the  cue points move each time one of these buttons is pressed
can bm changed with the INSERT key.  Normally, the cue point move amount is
one  measure;  pressing  the  INSERT key changes this to eight measures and
pressing it again will change it back to one measure.

The  last  one,  two,  four,  or  i@ght  measures played can be replayed by
pressing  the LEFT BRACKET ([), RIGHT BRACKET (]), ACCENT('), and EQUAL (=)
keys  respectively, Pressing one of these keys will move the cue point back
by the appropriate amount and start the sequencer at that point, though the
cue  loop  will  not  be  activated.  These buttons are handy if you hear a
mistake  or  other point of interest while listening to the tracks and want
to hear it again.

Cueing  can be used for recording as well as playback.  When a new track is
recorded  with  the cue loop active, the program adds time to the beginning
of that track to align it to the other tracks.

If  the  start  point for the cue loop has been changed since the last time
the  cue  was  played,  there  may  be  a slight delay between loops as the
sequencer advances to the start of the loop.

## Track Merge

Pressing  the  BACKSLASH  (\) key, just to the right of RETURN, selects the
Track  merge  option.   This  is  used to combine two or more tracks tnto a
single track, which can simplify the editing of tracks that are on the same
MIDl channel, and frees up tracks for further recording.

When  this  option is selected, the message line will prompt you for a list
of tracks to be merged; select the tracks with the mouse or the track keys,
and  press  RETURN.   Each track in the list will be merged with the lowest
track, and then erased.

## ALlGN

The  sequencer's ALIGN feature is used during recording to force the length
of  track 1 to a whole number of measures.  If ALIGN is off while recording
track  1,  recording stops as soon as the sequencer is stopped, so the last
measure  of  the  track  may be less than 96 steps (or whatever the current
measure  length  is),  and the sequencer will loop unevenly.  When ALIGN is
on,  the  sequencer  will  continue  to record to the beginning of the next
measure  after  recording  is stopped.  ALIGN is turned on and off with the
DELETE key.

Since  track  1  sets  the  length  of all tracks, ALlGN has no effect when
recording tracks other than track 1.

## Hidden Controls

There  are  a  number of other controls which can only be accessed from the
keyboard.   Most  can also be set from the SET OPTIONS screen, which can be
reached  directly  from  the play/record screen by pressing 0 (ZERO) on the
computer's  typewriter  keyboard.   See the SET OPTIONS chapter for more on
these  controls.   The  HELP  key  and this manual's appendix also list the
hidden control keys.

When  a  hidden  control  is changed from the play/record screen, a message
confirming the change will appear on the message line.  Hidden controls can
be changed while the sequencer is playing or recording.

AUTO-RECORD is selecled with the | (SHIFT-BACKSLASH) key.  When this switch
is  turned  off the RECORD switch will turn on when it finishes recording a
track.  AUTO-RECORD is normally on.

The visible metronome can be turned on or off with the $ (SHIFT-4) key, and
the audible metronome is toggled with the % (SHIFT-5) key.  The & (SHIFT-7)
key disables the step display in the measure/step counter.

Track  looping  is  turned on or off with the ( (LEFT PARENTHESIS) key, and
FILTER  is  toggled with the ) (RIGHT PARENTHESIS) key.  The filter channel
is a changed with the PLUS (SHIFT-EQUAL) and UNDERSCORE (SHIFT-MINUS) keys.
SILENT  PUNCH  is turned on or off with the MINUS (-) key.  TEMPO CHANGE BY
RATIO is toggled between one BPM and 2.5% by pressing the ^ (SHIFT-6) key.

A  few  hidden  controls are not duplicated on the SET OPTIONS screen.  The
PANIC BUTTON (the  key, or SHIFT-ACCENT) sends an All Notes Off message on
all  16  MIDI  channels  as  well  as sustain pedal off and zero pitch bend
messages for the appropriaate channels.  Pressing # (SHIFT-3) will mute all
tracks and pressing @ (SHIFT-2) wills unmute all tracks regardless of their
current  statuses.   Finally, the !  (SHIFT-1) key brings up the ALL TRACKS
TO SEQ edit window, which is described in detail in Chapter 4.

## Track Shift, Swap, and Name

Function  keys  Fll through F16 are used to select the SHIFT track options.
The  SHIFT  options  are used to shift a track forward or backward in time,
relative  to  the  other tracks.  The shift amounts are + 1, + 3, + 12, -1,
-3,  and  -12  for  keys F11- F16.  (Remember, function keys Fll to F20 are
selected by pressing SHIFT and a function key from Fl to F10.)

The  DELETE key can be used to toggle between a positive and negative shift
amount  when  a  SHIFT option is active.  Note that since the DELETE key is
normally  used to toggle ALIGN, the ALIGN feature can not be changed when a
SHIFT option is active.

The  program cannot shift a track if its first event would be placed before
the  start  of  the track, which means that negative shift values cannot be
used  on  tracks  which  start  on the first beat.  Nor will events shifted
beyond  the  end  of  track 1 be phayed.  Shifting a track changes the time
value  of  the  first event in the track by adding or subtracting the shift
amoumt,  and  this  change  will be reflected in the event list on the edit
screen.   The TIME value for the first event of the track will be displayed
in  the  right  part  of  the  message  line  whenever a SHIFT operation is
performed.

You should be careful to turn SHIFT off by clicking on the MUTE button when
you  are  done  shifting  tracks,  as  we  have  found  that  it is easy to
accidentlly mess up a track by shifting it when you really want to mute it.

SWAP  is  activated by pressing F18.  The SWAP track option is used to swap
the  position of two tracks in the track display.  Since notes on the lower
numbered  tracks  are  played  before  notes  on the higher tracks swapping
tracks  can  be  used  to correct for minor timing problems caused Eyb MIDI
bandwidth  limitations  or  differences  in instrument response times.  See
Chapter 13 for more on sequencer timing.

When  the NAME track option is selected with the F20 key, selecting a track
will allow you to enter a name for that track.  The input from the keyboard
is not parsed (interpreted) as it is entered, so the BACKSPACE, DELETE, and
similar  keys  will  insert funky graphics symbols in the name, rather than
performing  the  expected operations.  Typing mktakes can be corrected from
the edit screen.

## MIDI Song Pointer

If a MIDI song pointer message is received while in Track mode, the program
will  start all tracks from the specifed point.  Song pointer messages will
be  ignored  if  the clock source, on the SET OPTIONS screen, is not set to
MIDI  WITH  SONG  POINTER.   The correct time value will be inserted at the
beginning  of  any  track  that is recorded after a song pointer message is
received.

Song  pointer is sent by the sequencer at the beginning of the cue loop, if
cueing is activated and if SONG POINTER SEND has been enabled, as described
in Chapter 11.

## Countin

If  a countin has been set on the SET OPTIONS screen the program, will wait
for  the programmed number of steps before starting to play or record.  For
example,  a  value  of 96 will create a one measure countin.  The metronone
will sound and MIDI clock will be sent during the countin.

## Velocity Pedal

The  velocity  pedal  feature  of  the KCS allows you to modify the note on
velocities of a part being recorded with a continuous controller.  This can
be  used,  for  example, to play accents on synths which recognize velocity
but  don't  send  it,  or  to do a MIDI mixdown on a synth which recognizes
velocity but not volume control.  In conjunction with the live edit feature
described  later  in  this  chapter  or  the  loopback  recording technique
discussed  in  Chapter  13,  the  velocity  pedal  can  be  used  to affect
velocities of previously recorded tracks or sequences as well.

When  velocity  pedal is active, all continuous controllers on the velocity
pedal  channel  (which  is  set  from  the SET OPTIONS screen only) will be
combined with the note velocities of the incoming MIDI data in one of three
ways.   The three velocity pedal modes are selected with the F19 (SHIFT-F9)
key,  which  is  also  used to turn the velocity pedal on or off.  When the
velocity pedal is on, control changes on the velocity pedal channel are not
recorded  or merged by the program.  Pitch bend and aftertouch are not used
for the velocity pedal.

Pressing  F19  once selects the FULL velocity pedal mode, where the note on
velocities  are  simply  replaced  with the last controller value received.
FULL  is  most  useful  when recording a part from a non-velocity sensitive
keyboard,  which  is  played on a velocity sensitive slave.  A mod wheel or
foot  pedal  can  be  used  to  set  the  not  velocity  between 1 and 127,
regardless of how hard you strike the keys.

MIX  averages  the  last controller value received with the velocity of the
note.   This  is  most  useful  for  making  minor  changes in a previously
recorded track using live edit or loopback recording.

SCALE  combines the last controller value and the note velocities in such a
way that the controller has more effect at the top and bottom of its range,
but  very  little near the middle.  For example, if the controaler is at or
near  1,  the  recorded velocities will be at or near 1, no matter how hard
the  keys  are  struck.   If the controller is at or near 127, the recorded
velocities  will be at or near 127.  BUT, if the controller is near 64 (the
center  of its range), the recorded velocities will be determined mostly by
the  note  velocities  sent by the keybeard.  SCALE is best suited to major
editing  on  prerecorded  tracks  or  sequences using live edit or loopback
recordmg.

Note  that  the velocity pedal channel, on the SET OPTIONS screen, need not
be  set to the channel that the keyboard or receiving synth is on, but must
be  set  to  the channel of the device with the continuous controller beung
used.

## Live Edit

Live edit is an advanced feature of the Keyboard Controlled Sequencer which
allows  you  to delete notes from a track or alter their velocities in real
time,  as  the  sequencer  is  playing.   Since  live  edit  is  much  more
complicated  than  the  other features of Track mode, we recommend that you
become thoroughly familiar with the rest of the KCS before diving into live
editing.

Live  edit  is activated by selecting the EDIT SELECT track option with the
F17  (SHIFT-F7)  key.   When  this option is selected the words EDIT SELECT
will  appear  in  the  message line, and the PUNCH buttons will be replaced
with  a  set  of  EDIT buttons.  The edit buttons are used to handle backup
tracks and to turn live editing off and the ALTERNATE CONTROL, and LEFT and
RIGHT SHIFT keys are used to edit the selected track.

When  a  track is selected, the word EDIT will appear in its status display
and a backup track will be created in the first available track.  The track
can now be edited with the keys mentioned earlier.

RIGHT SHIFT will delete notes that play while it is held down, by replacing
them with DE events.

ALTERNATE  will replace note velocities with velocity value Y from the step
time  record  screen,  which  defaults to 127.  If one of the true velocity
pedal  options is selected, pressing ALTERNATE will set the note velocities
from the velocity pedal.

LEFT  SHIFT  will  replace  note velocities with step time velocity value W
(default 64).

ALTERNATE  plus  LEFT  SHIFT  will  replace  note velocities with step time
velocity value U (default 16).

CONTROL  will  replace  notes in the edit track with notes from, the backup
track.   Normally, this acts as an "undo" command but can also be used as a
compositional  device  if the backup track is changed from the edit screen.
For  instance,  if  the  backup  is  transposed up an octave, then pressing
CONTROL  will  have the effect of transposing notes up an octave when it is
pressed.

The  edit  buttons are used to manage the current edit track's backup tract
and  to  disable  or  exit from live edit.  Clicking on an edit button will
affect only the currently selected edit track.

The BACKUP button will replace the backup track with the edited track.  Use
this  only  when  you  are satisfied with any editing you have done, and be
careful, as the original track will be lost when this button is pressed.

RESTORE  is  the  opposite  of BACKUP.  It replaces the edid track with its
backup  track.   Use  this  when  you  make  catastrophic  mistakes in your
editing.

DONE  changes the status of the track from EDIT to PLAY, and turns off live
editing  for  that  track.   The  backup  track  can be deleted as well, if
desired.   Clicking  on  DONE  again will replace the edit buttons with the
punch buttons; pressing the * (SHIFT-8) key has the same effect.

OFF  temporarily  disables the editing keys, without turning live edit off.
This  allows  you to select functions which require the SHIFT keys, such as
velocity  pedal  or certain track options.  Note that OFF doesn't turn live
editing off - that is done with the DONE button.

# Chapter 7 - OPEN MODE PLAY/RECORD

Open  mode  is  the  Keyboard Controlled Sequencer's generalized sequencing
mode.   In  Open  mode, you can define up to 128 independent sequences, any
number of whdch may be played back simultaneously.  These may be completely
independent  of each other, or some sequences may include commands to start
and  stop  other  sequences.   A  sequence  which  starts  or stops another
sequence  is  called  a  control  sequence.   By chaining control sequences
together,  you  can  realize  very  complex  pieces  of  music.   Chapter 4
describes how you can create control sequences using the edit screen.

There  are  two  types  of  sequences:   primary  and  secondary.   Primary
sequences  are  designated  by the numbers 1 - 9 and the letters A - Z, and
are  activated from the Open mode play screen by pressing the corresponding
key  on the typewriter keyboard.  Secondary sequences are designated by the
two  digit  numbers  00  -  92.  They are activated from the Open mode play
screen  by  typing two digts on the numeric keypad on the right side of the
computer keyboard.

## Play/Record Screen

Entering  Open  mode  from  either the Track or Song mode edit screens will
place  you on the Open mode edit screen.  The play/record screen is entered
by  double  clicking  the  right  mouse  button,  by  clicking  on PLAY and
selecting  GO  TO PLAY SCREEN, or by single clicking the ri@ht mouse button
while  holding  down  the  SHIFT key.  The program uses the same screen for
both play and record operations.

An  important  difference between Open mode and Track mode is that going to
the  Open  mode play screen does not automatically allow you to record.  To
record in Open mode, you must eiiher select the RECORD option from the edit
screen,  or  activate  Open  mode real time recording from the play screen.
This procedure is described in detail later in this chapter.

The Open mode play/record screen looks like this:

The  play  screen consists of two areas:  the sequence area at the top, and
the  status lines at the bottom of the screen.  The sequence area shows the
status  of  the  35 primary sequences and the first 45 secondary sequences.
(The  remaining secondary sequences can be played from this screen as well,
but  no  status information is shown for these sequences.) Four consecutive
sequences  are  displayed  on  each  lime.   The P, F and W columns contain
information  concerning  the  status  of  each  sequence.  The S (Sequence)
column contains the designator for each of the 80 sequences displayed.  The
RE  (REpeats)  column  shows  the  number  of  repeats  programmed for each
sequence.   A  99  in  the  RE  column  means  that  the sequence will loop
indefinitely.   NAME  shows the name of each sequence.  The P (Play) column
shows the number of times each sequence has left to play and counts down as
each  repitition  of  the  sequence occurs.  A 9 will be displayed in the P
column  if  that  sequence  has  nine  or more repeats left to play.  The F
(From)  colunn  contains  the letter or number of the control sequence that
started the sequence.  This field is blank if the sequence was started from
the  computer  keyboard.   A  W  in  the W (Wait) column indicates that the
sequence  is  currently  waiting  for  another sequence to finish, and an M
means the sequence is currently muted.

The  status  lines  at  the  bottom of the screen display information about
various  record and play options and also show the measue/step counter, the
real time clock and the clock source or tempo.  The words RECORD, CUE, MIDI
MERGE, PAUSE, etc.  will appear on the status lines when these features are
activated  and dissappear from the status lines when they are de-actavated.
The current cue point and cue sequence are also shown.

## CLOCK, Metronome and Measure/Step Display

The cunrent clock source is displayed next to the word CLOCK on the next to
last  line.   This  will  be  the current clock rate in beats/minute if the
internal  clock  display  is  being  used, MIDI if MIDI clock is being used
without  song pointer, or MIDI WITH SP if MIDI clock is bemg used with song
pointer.

If  the internal clock is in use, the clock rate can be changed during play
by  using the COMMA (,) key to increase the tempo, or the PERIOD (.) key to
decrease  the  tempo.   The  clock  rate  can also be changed from within a
sequence  using  TM,  AC,  or  DC  events,  or from the SET OPTIONS screen,
described  in Chapter 11.  The SET OPTIONS screen is the only way to change
the clock source.

The  measure/step  counter  displays  the  current  measure  and step being
played.   It  will  be  reset  to  measure  1 if you press UNDO to stop all
sequences  or  CLR  HOME to erase the current recording.  It will be set to
the  cue  or  song  pointer  location  if you start a cue or a song pointer
message is received.

The  program provides both a visible and an audible metronome.  The visible
metronome  appears  in  the  bottom,  right hand corner of the screen.  The
audible  metronome  can  be heard through the speaker of your monitor.  The
separation  between metronome clicks can be programmed from the SET OPTIONS
screen.

## Playing Sequences

Primary sequences 1 - 9 and A - X are started by pressing a key on the
typewriter keyboard, and secondary sequences 00 - 92 can be started by
typing a two digit number on the numeric keypad. (Primary sequence 1 - 9
cannot be started from the numeric keyboard, nor can secondary sequences be
started from the typewriter keyboard.) If ALIGN is turned off, the sequence
will start immediately; otherwise it will wait for the beginning of the
next measure and then start.

The  numeric  keypad also has a "bank lock" feature, which allows selecting
any  secondary  sequence from within a bank of ten sequences using a single
key.   Pressing  the  ASTERISK (*) key on the numeric keypad after entering
one  or  both  digits of a secondary sequence will lock the 10's place (the
first  digit)  of  that  number,  and subsequent numeric keypad digits will
immediately  start  the  appropriate  sequence  in  the bank.  For example,
pressing  on  the numeric keypad after pressing 1 will lock the 1 in as the
first  digit of the secondary sequence, and pressing numeric keys 2, 3, and
4  will start sequences 12, 13, and 14.  Bank lock is turned off with the (
(LEFT  PARENTHESIS)  key  on the numeric keypad.  The most recently started
secondary  sequence  is  displayed in the lower right corner of the screen,
which  is  helpful  when  you are using the bank lock feature, and the word
BANK will appear beside the sequence number if bank lock is turned on.

Normally,  the  sequence will play for the programmed number of repeats and
stop.   To stop a sequence from, looping press the appropriate sequence key
or  numeric keypad number once.  The sequence will play to the end and then
stop.   To  stop  a  sequence immediately, press the sequence key or number
twice if it is looping, or once if it is in its last play.  To play several
sequences  at  once, press the ESC key to put the program into pause, start
the sequences, then press ESC again.

## Muting Primary Sequences

To  mute  any primary sequence that is playing press SHIFT and the sequence
key simultaneously.  An M will appear under the W heading for the sequence.
The  sequence  will  continue  to keep time, but no events will be sounded.
Notes  currently  playing  will  be  shut off unless they were defined with
separate  ON  and OFF events.  Such notes will stick until Fl, UNDO, or the
PANIC BUTTON is pressed.

To  unmute  a sequence, press the sequence key again (no SHIFIt this time).
The  M  will  disappear  and  the sequence will resume sounding at the same
point  it  would  have been at, had the mute feature not been invoked.  Use
mute  to  cue  in and out multiple overdubs in real time, or to isolate and
listen to individual sequences.

Secondary  sequences cannot be muted from the Open mode play screen, though
they can be muted and unmuted with MS and US events.

## Cancel

Pressing  the  UNDO key will canccl, or stop, all active sequences, and set
the measure counter to 0.  If you are currently recording it will erase the
recorded  sequence and allow you to start recording again.  Cancel will not
erase  a  sequence  which  you  recorded earlier in the current play/record
session.

## Pause

The  ESC  key  can  be  used  as  a pause button during playback or record.
Pressing ESC shuts off any notes being played and stops the internal clock,
or  if MIDI clock is being used, all clocks will be ignored until the pause
button  is pressed again.  The word PAUSE is displayed on the middle status
line until it is deactivated or you leave the play/record screen.

Notes  played  on  the  keyboard are not recorded when paused, but the last
controller  of each type played is recorded, if the CONTROLLER PAUSE switch
is active on the SET OPTIONS screen.  See Chapter 11 for more details.

## Cueing

The TAB key activates the cue feature.  Each time you press the TAB key the
cue  sequence  will begin playing from the cue point.  Program changes that
occur  earlier  in  the  cue  sequence will be sent over MIDI, and sequence
start events and tempo changes will be executed.

The  cue  sequence  is  set  from  the play options dialog box described in
Chapter  4.   It  can also be changed from the play/record screen using the
left  and right cursor control keys.  The CURSOR LEFT key decreases the cue
sequence  by  one,  and  the CURSOR RIGHT key increases the cue sequence by
one.

The  cue  point  determines  where phayback will begin in the cue sequence.
This  also can bm set from the play options dialog box and changed from the
play/record  screen using the CURSOR UP and CURSOR DOWN keys and the INSERT
key.  The up arrow moves the cue point higher, the down arrow moves the cue
point lower, and INSERT tnggles the amount that the cue point moves between
one measure and eight measures.

The  cue  feature is particularly useful when the cue sequence is a control
sequence  that  plays  an  entire piece.  You can use cue to hear the piece
starting from any point.  By keeping alternate arrangemems of your songs on
consecutive  sequence  keys,  you can quickly go back and forth between the
same pmint of different arrangements of a piece with the cursor keys.

## Align

When  activated, ALlGN forces the program to wait till the end of a measure
before  exiting  the record mode.  This assures that all sequences recorded
will  loop properly.  ALIGN also forces all sequences that are started from
the  computer  keyboard  to  wait  until  the beginning of the next measure
before playing.

ALlGN  is  normally  on  when  recording,  and  off  when  in  play and not
recording.  It can be toggled on or off with the DELETE key.

## MIDI Merge

MIDI  MERGE  is  activated by pressing the SEMICOLON (:) key.  All incoming
MIDI  data, including system exclusive messages received by the computer is
merged  with  the  sequence  data  being played.  Press the :  key again to
de-activate MIDI merging.  MIDI mergng is disabled when ECHO is on.

## Echo

The  ECHO feature is used to rechannelize MIDI data recorded by the program
and  send it out the computer's MIDI out.  This allows you to record on any
channel  while  using  a  keyboard  controller  that  transmits on a single
channel.  If ECHO is active, the word ECHO will appear on the bottom of the
screen,  followed  by  the  echo channel.  You can use the BACKSPACE key to
toggle  echoing on and off from the play/record screen, and use the > and <
(SHIFT-PERIOD  and  SHIFT-COMMA)  keys  to  increase  or  dccrease the echo
channel.

## Filter

FILTER  is  used  to  force  the  sequencer to accept MIDI data on only one
channel,  the  filter channel.  Incoming data on other channels as ignored.
FILTER  is  turned  on  with  the ) (RIGHT PARENTHESIS) key, and the filter
channel  can be lowered or raised with the UNDERSCORE (SHIFT-MINUS) or PLUS
( + ) keys respectively.

## Set Options and Help

The  SET  OPTIONS  screen  can be reached directly from, the Open mode play
screen  by  pressing the 0 (ZERO) key.  The SET OPTIONS screen is described
in Chapter 11.

Pressing  the HELP key will bring up the Open mode help screen, which shows
the  functions  of  each  key on the computer keyboard in Open mode.  These
functions are also summarized in the Appendix to this manual.

## Exit

Pressing  F1  will  immediately  end  the  play/record process and take you
dirctly to the edit screen.  The left mouse button duplicates this function
in Open mode.

## Panic Button

Pressing  the   (SHIFT-ACCENT) key will send All Notes Off messages on all
16  MIDI  channels.   This  is  useful  for  canceling  stuck  notes on any
synthesizers  that,  for  one reason or another, did not receive a note off
message.   The  All Notes Off message is not recognized by all instruments,
so this button may not always clear all stuck notes.  The panic button also
clears  any  sustain  pedal  or pitch bend settings that may have been left
"hanging".

## Recording in Open Mode

Open mode recording can be selected in one of two ways.  Clicking on RECORD
from  the  Open  mode edit screen will bring up an edit window which allows
you  to  select  one  of  four recording methods, or pressing the RETURN or
ENTER  keys on the Open mode 1 play screen will enable real time recording.
Generally  speaking  selecting  RECORD  from  the edit screen provides more
flexibility  in  recording while the RETURN/ENTER method is more convenient
if you are playing an Open mode sequence and want to record a part whenever
inspiration  strikes.   Real  time  recording  is  described  later  in the
chapter.

When you select RECORD from, the edit screen, an edit window will ask which
sequence you want to record, and will also present a set of record options.
The  sequence  will  default to the next empty sequence, or you can enter a
sequence.   Enter  one  key  for  a  primary  sequence  or two digits for a
secondary  sequence.   Remember  that  sequences  Y  and Z are reserved for
internal use by the program and cannot be recorded.

Four  record options are displayed in the left part of the edit window, one
of which must ge selected.  STEP TIME allows you to create a sequence using
a  method similar to step mode entry on a drum machine.  Step time entry is
useful  for  entering fast arpeggios, regular chord patterns or other parts
with  few changes in note to note timiing.  The step time recording process
is described in detail in Chapter 9.

REAL  TIME  records  events from the synthesizer keyboard in real time.  In
this mode the program is similar to a tape recorder, recording all notes as
you play.  OVERDUB will automatically play the overdub sequence and set the
length  of  the  current  sequence  to  match  that of the sequence you are
overdubbing  to.  You must select an existing sequence to overdub to if you
choose OVERDUB.  RECORD WITH CUE is another way to record a new sequence in
sync  with  an  existing sequence.  RECORD WITH CUE differs from OVERDUB in
that  the  existing  sequence  may  be  started  at  any  measure.   It  is
particularly  useful  when the existing sequence is a partly completed song
that  you  want  to  add  parts  to in specific places.  You must select an
existing sequence to be the cue sequence.  The real time record options are
described in detail later in this chapter.

## Controllers, Aftertouch, Note Off Vel, and Echo

These   record   options  set  the  sequencer  to  record  or  ignore  MIDI
controllers,  aftertouch,  and  note  off  (release) velocity.  CONTROLLERS
enables  the recording of pitch bend, control changes, and program changes.
If  a pitch bend or sustain pedal (MIDI controller 64) event is recorded, a
zero  pitch  bend or sustain pedal off message will be placed at the end of
the  recording.  AFTERTOUCH controls the recording of aftertouch (pressure)
information.  Since aftertouch and controller data use such large chunks of
memory, it is best to disable CONTROLLERS and AFTERTOUCH uless specifically
required.

NOTE OFF VEL allows separate storage of note off events, including note off
velocity.   There  are  only  a few synths capable of sending and receiving
note  off  velocity.   Notes  recorded  with note on velocity are stored as
separate  note on and note off events, and are more difficult to edit.  The
KCS  can  only  remember  to hold down 64 notes (on all synths) at one time
using  ON  events,  so  if you need more than that, you need to record some
parts with note off velocity.

The  letters  C A O will appear beside RECORD on the play/record screen if
any  of these options are turned on.  The options can also be turned on and
off  directly  from  the  play/record  screen.   The  COLON (:) key toggles
controllers,  the  QUOTE  (')  key aftertouch, and the DOUBLE QUOTE (") key
note  off velocity.

ECHO  can  also  be toggled from this window.  ECHO is described earlier in
this chapter.

## Real Time Record

If  you  select  the  REAL  TIME,  OVERDUB, or RECORD WITH CUE options, the
play/record  screen will be diplayed.  The only visible differences between
play and record are that the words RECORD and ALIGN appear at the bottom of
the screen along with any other active record options.

The  following  example  shows  the  screen that would appear if your first
action  in  Open mode is to record sequence 2, echoing onto channel 4.  The
number of the sequence being recorded is shown in red on a color monitor.

When  you besn playing on the synth keyboard, the metronoe (bottom right of
screen)  will  begin  flashing  and  the  measure/step  counter  will start
counting  up.  A metronome will also sound on your monitor speaker.  If you
did  not  specify a name, the MIDI channel of the first event recorded will
be  d@splayed  under  NAME.  If you want to begin the sequence with a rest,
press the FlO key.

If,  during  recording you make a mistake and wish to start again press the
UNDO  key.  The current recordLng will be erased and the program will start
recording  again  when  you  play the keyboard or press FlO.  When you have
finished  recording  press  FlO  and  the  sequence will begin playing back
immediately if ALIGN is off or when the measure completes if ALIGN is on.

If  your new sequence is playing back and you decide you don't like it, you
can  erase  it and record again by pressing CLR HOME.  Recording will start
again  when you play the keybeard or press FlO.  Press FlO a second time to
end recording and hear what you just played.
 
All  of  the  play features described earlier in this chapter also function
when recording.  To stop recording and go to the edit screen, press Fl.

As  mentioned  earlier,  real  time recording can also be selected directly
from  the  Open  mode  play screen by pressing the RETURN or ENTER key.  If
RETURN  is  pressed,  recording  will  start  as soon as a note on or other
relevant  MIDI  event  is  received  at  the  MIDI in jack, and if ENTER is
pressed,  recordjng  begins immediately.  The first unused sequence will be
used  for  recording.   Pressing  FlO  will turn recording off and play the
newly recorded sequence, pressing UNDO will erase the current recording and
stop  all  sequences,  and  the  CLR  HOME key will erase the last sequence
recorded in the current session.

Additional  Open  mode  sequences  can  be  recorded in a single real time
recording  session by  pressing either RETURN or ENTER, even if recording
was initiated from the edit screen. This process can be repeated as many
times as needed, to record additonal sequences.

## Overdub

The  OVERDUB  option  allows  you  to record a new sequence in sync with an
existing sequence called the overdub sequence which is automatically played
back  by  the prograrn as you record.  You can start the overdub process by
playing  a  note  on  your  synth  or by pressing F10.  In either case, the
overdub sequence will automatically be started and recording will begin.

When the overdub sequence completes, the program will automatically end the
recording  process  and  play  back both sequences together.  If you make a
mistake  during  recording or are dissatisfied after the recording, you can
use  the UNDO or CLR HOME keys to start over, as described above under REAL
TIME RECORD.

Since  the  overdub  sequence  can  be  any Open mode sequence, including a
control  sequence,  It  is possible to overdub a sequence to a section of a
song, or an entire piece.  Overdubbing to a control sequence is done in the
same mamer as overdubbing to any other sequence.

If  you start the overdub sequence with FlO and don't play any notes at all
before  it ends, the overdub sequence will still loop, and the program will
remain in record.  This allows you to listen to your overdub sequence a few
times before recording.

## Record with Cue

RECORD  WITH  CUE  is  very similar to OVERDUB, but allows you to start the
overdub sequence at any measure.  This is useful for things like adding tom
fills  to  a  section, adding some grace notes to a long piano sequence, or
adding  controllers  to  a piece after the basic arrangement was done.  The
program  will  automatically  insert  the correct amount of time before the
first event.

When  the  RECORD  OPTIONS edit window is displayed, select RECORD WITH CUE
and  then  click  the mouse to OVERDUB/CUE SEQ, and enter a sequence key or
number.  If you select an unused sequence, the program will alert you.  You
can  also  set  a  new cue point at this time.  This will be the measure at
which the program will start the cue sequence.

When  you  get  to  the  play/record  screen the cue sequence and cue point
displays  will reflect the values you entered.  Play a note or press FlO to
start  recording.   The cue sequence will begin playing at the specifed cue
point.  Press FlO when you have completed recording.  Both the cue sequence
and  sequence  you  recorded  will start playing back from the selected cue
point.  You can restart both sequences at any later time by pressing FlO or
TAB.   If  you  make mistakes and want to start over, you can press UNDO if
you  are  still recording or CLR HOME if you have completed recording.  The
program  will  erase  your  recording  and  return  to the beginning of the
recording procedure.

## Recording with Velocity Pedal

When  the  VELOCITY PEDAL option has been activated from the SET OPTIONS or
Track  mode  record screens, the sequencer will not directly record note on
velocities,  but  will  instead  record values based on the position of any
continuous  controllers  on the velocity pedal channel.  The velocity pedal
function cannot be accessed from the Open mode play/record screen.  See the
chapter  on  the  Track mode play/record screen for more information on the
velocity pedal.

## Recording with a Countin

You  can use the SET OPTIONS screen to set a recoring countin.  This allows
you  to  use the metronome or an external MIDI drum machine to get the feel
for  a  few  beats before recording.  If you are using a countin, press F10
when  you  are  ready  to  record  or  overdub.  The program will sound the
metronome and send MIDI clock, but it will not start recording or start the
overdub  sequence  until the number of steps specified for the countin have
passed.

## MIDI Song Pointer

If  the  MIDI  W SONG POINTER clock sourse option was selected from the SET
OPTIONS screen, and the program receives a MIDI song pointer message during
Open  mode  play,  the program will turn on all active sequences, and start
the  current  cue  sequence  at  the  point  specified  by the song pointer
message.   The  only  MIDI  events  that  will be sent while the program is
chasing  the  song  pointer are program changes.  It may take a few seconds
for the program to chase many measures into a complex piece, and songs with
a  lot  of  continuous controller data will take a little longer than other
songs.

Recording with song pointer is similar to recording with cue.  If the clock
source  has  been set to MIDI WITH SONG POINTER, and the program receives a
song  pointer  message,  the  cue  sequence will be started at the location
specifed  by  the  song  pointer  message,  and recording will begin.  If a
second  song  pointer message is received, and no notes have been recorded,
the program will start the record process again.

If  a  second  song  pointer message is receeved after some notes have been
recorded,  the  program  will  end  recording  and  play  back both the cue
sequence  and  the  newly  recorded  sequence, starting at the song pointer
location.  You can still use CLR HOME to erase the new sequence and restart
the recording process.

# Chapter 8 - Song Mode Play

The Song mode play screen allows you to play songs created on the song mode
edit  screen described in Chapter 5.  You cannot record while in Song mode.
The  Song mode pIay screen is reached from the Song edit screen by clicking
on PLAY or pressing the right mouse button.

The following example shows the Song mode play screen as it might look
before a song is started:

The  Song  mode play screen has severl sections.  The top line has the song
number and title.  The bottom of the screen is used for status lines, as in
Open and Track modes.  Most of the rest of the screen is used for a list of
up  to  48 song segments.  A song can have up to 100 segments, but only the
first  48  can  be  seen on the play screen.  Each song segment shown has a
number  ,  and a segment key.  The segment keys are used to select segments
much  like  track  keys  can  be  used  to  select  tracks  in  Track mode.
Typewriter  keys 1 - 9 are used for segments 1 - 9, keys A - Z for segments
10  -  35,  and  keys on the numeric keypad for segments 36 - 48.  There is
also a set of segment/channel options, seleted with the function keys which
determine how the song is affected by selecting a segment.

Each  segment  plays  a  single  Open mode sequence.  The sequence key (for
primary sequences) or a two digit sequence number (for secondary sequences)
is  shown  in  the  SQ  column.  The sequence name is displayed in the NAME
column,  and the number of times the segment is to play is shown under REP.
Other information will appear in the REP column as the song is played.

The  right  edge of the screen displays the status of the 16 MIDI channels.
Each  channel  has  a channel number and a corresponding key (1 - 9 and A -
G).   Channels  can be soloed and muted, in the same way that tracks are in
Track mode.

## Playing the Song

The  song  is  started  by pressing FlO or clicking the right mouse button.
When  play  starts,  the  measure/step  counter  starts to count, and a red
musical  note  will  appear  in  the REP column for segment 1.  This symbol
indicates  the  segment currently playing.  If the segment is programmed to
play  more  than  once,  the number in the REP column will count down as it
plays.

## PAUSE and MIDI MERGE

The Song can be paused at any point by pressing the ESC key; pressing ESC a
second  time lets the song continue.  MIDI merging can be toggled using the
SEMICOLON  (;)  key.   PAUSE or MIDI MERGE will appear in red on the status
line if either of these functions are active.

See  the  chapters  on  the Track and Open mode play screens for details on
PAUSE and MIDI MERGE.

## Cueing and Single Segment Looping

A  song may also be started at an arbitrary cue point, just as in Track and
Open modes.  Pressing the TAB key stacts the song at the current cue point.
The  cue  point is moved forward or backward using the CURSOR UP and CURSOR
DOWN  keys,  and the cue point move amount is toggled between one and eight
measures  with the INSERT key.  See the chapters on the Track and Open mode
play screens for more details on cueing.

The F2 key will cause the current segment to loop indeinitely.  99L appears
under  REF to show looping, Pressing F2 again will cause the segment to end
after its current play.

## Segment/Channel Options

Song mode provides seven segment/channel options channel which allow you to
alter the playback of a song just as the track options discussed in Chapter
6  allow you to alter the playbach of individual tracks.  These options can
assist  you  in  composition by allowing you to hear sections of a piece in
different  contexts  and  instrunents  in different combinations.  They can
also be used to provide real time control in performance.

The  current segment or channel option is selected with one of the function
keys  F3  -  F9.   Pressing a segment or channel key will cause the current
option  to  be  applied  to  the  corresponding  segment  or  channel.  The
segment/channel   options  are  MUTE/UNMUTE,  PLAY  IMMEDIATE,  PLAY  AFTER
CURRENT, SET LOOP START, SET LOOP END, SOLO, and SET SWITCH.

The   MUTE/UNMUTE,  SOLO,  and  SET  SWITCH  options  are  similar  to  the
corresponding  options  in  Track  mode,  but  they  apply to MIDI channels
instead of tracks.  The PLAY IMMEDIATE, PLAY AFTER CURRENT, SET LOOP START,
and SET LOOP END options are unique to Song mode and apply to segments.

The current segment/channel option is displayed on the right end of the top
status line.  The default is PLAY IMMEDIATE, as shown in the screen example
on  the  last  page.   Only one segment option or one channel option may be
active at any time.

## MUTE, SOLO and SET SWITCH

The MUTE, SOLO, and SET SWITCH options are very similar
to the corresponding options in Track mode. MUTE is
selected with the F3 key, SOLO with F8, and SET SWITCH with F9. When one of
these options is active, keys 1 - 9 control channels 1 - 9, while keys A -
G control channels 10 - 16.

When  a  channel  is muted, MIDI data for that channel is not sent.  When a
channel  is  soloed,  only  data  for  that channel is sent.  When a switch
between  two  channels is set, the RETURN key alternately mutes one channel
and unmutes the other.  The words MUTE, SOLO, or SWIT will appear next to a
channel which is currently muted or soloed, or for which a switch is in the
process of being set.

See  the  chapter  on the Track mode play screen for more details on muting
soloing or switching.

## PLAY IMMEDIATE and PLAY AFTER CURRENT

These  features allow you to alter the order in which segments as a song is
playing.   When PLAY is active, pressing the segment key for any segment tn
the  song  will  cause  the program to immediately stop playing the current
segment  and  start  the new segment.  The song will then continue normally
from that segment.

PLAY  AFTER CURRENT differs from PLAY IMMEDIATE in that the current segment
is  allowed  to  finish  its  current  repetition before the new segment is
started.   This  is especially useful when altering the structure of a song
in real time with Song mode's interactive control features.

## Song Mode Loops

Song  mode  allows you to set a starting and ending loop point, and to loop
the  song  between  these  points.  The loop points are defined in terms of
segment numbers, not measures.  The SET LOOP START and SET LOOP END Segment
options  allow  you  to  set the starting and ending segments for the loop.
The letters B and E will appear in the REP column next to the beginning and
end segments of the loop as they are set.  Pressing the SLASH (/) key turns
looping  on  and  off.   The  word  LOOP appears on the left end of the top
status line when looping is active.

The  followng  example  shows  the Song mode play screen after a song has been
started, and loop points set:

In  this  example,  a loop has been set up between segments 3 and 5.  Since
looping is actiwe, segments 3, 4, and 5 will play repeatedly until the loop
as  turned off with the / key.  The red musical note indicates that segment
5 is currently playing.

Channels 3 and 5 have been muted.  MIDI events on these channels other than
program  changes  will  be  ignored.   The  segment/channel  option is PLAY
IMMEDIATE.   Pressing  any key in the range 1 - 6 will cause the program to
immediately jump to the beginning of the corresponding segment.

## Song Pointer in Song Mode

If the MIDI W SONG POINTER clock option has been selected on the SET
OPTIONS screen, and a song pointer message is received, the program will
start playing the current song from the point specified by the song pointer
message.

Exit 

Press Fl or the left mouse button to exit to the Song mode edit screen.

# Chapter 9 - STEP TIME RECORDING

The  step  time  recording  features  of  the  KCS allow you to record note
information  from  your  synthesizer  keyboard,  while  using  the computer
keyboard  or  mouse  to  specify  tuning information.  Note velocity can be
specified  from  either  keyboard.  This can be a faster and more intuitive
way  of  precisely  entering  rhythmically regular passages than the typing
method  described  in  Chapter  4.   It is particularly convenient in Track
mode,  as  the  new  passage  can  be  played  along  with tracks that were
previously recorded.

The  step  time  recording  screen contains fifteen choices fOf note times,
fifteen  choices for note durations and six choices for note velocity.  The
current  choices are indicated by a red asterisk.  As you play notes on the
synth  keyboard  they  are  recorded  with  the current time, duration, and
velocity  values.   Each  choice  is  assigned  to  one  of  the numeric or
alphabitic  keys  shown to the left of the possible values.  You can make a
new  choice  for time, velocity or duration by pressing the appropriate key
on the computer keyboard, or by clicking the mouse on your choice.  The red
asterisk  will  move to display your choice.  If you select a zero velocity
which  is  norally assigned to the Z key the program will record the actual
velocity with which each note is played on your synth.

## PLAY IMMEDIATE and PLAY AFTER CURRENT

These  features allow you to alter the order in which segments as a song is
playing.   When PLAY is active, pressing the segment key for any segment tn
the  song  will  cause  the program to immediately stop playing the current
segment  and  start  the new segment.  The song will then continue normally
from that segment.

PLAY  AFTER CURRENT differs from PLAY IMMEDIATE in that the current segment
is  allowed  to  finish  its  current  repetition before the new segment is
started.   This  is especially useful when altering the structure of a song
in real time with Song mode's interactive control features.

## Song Mode Loops

Song  mode  allows you to set a starting and ending loop point, and to loop
the  song  between  these  points.  The loop points are defined in terms of
segment numbers, not measures.  The SET LOOP START and SET LOOP END Segment
options  allow  you  to  set the starting and ending segments for the loop.
The letters B and E will appear in the REP column next to the beginning and
end segments of the loop as they are set.  Pressing the SLASH (/) key turns
looping  on  and  off.   The  word  LOOP appears on the left end of the top
status line when looping is active.

The  followng  example  shows  the Song mode play screen after a song has been
started, and loop points set:

In  this  example,  a loop has been set up between segments 3 and 5.  Since
looping is actiwe, segments 3, 4, and 5 will play repeatedly until the loop
as  turned off with the / key.  The red musical note indicates that segment
5 is currently playing.

Channels 3 and 5 have been muted.  MIDI events on these channels other than
program  changes  will  be  ignored.   The  segment/channel  option is PLAY
IMMEDIATE.   Pressing  any key in the range 1 - 6 will cause the program to
immediately jump to the beginning of the corresponding segment.

## Song Pointer in Song Mode

If the MIDI W SONG POINTER clock option has been selected on the SET
OPTIONS screen, and a song pointer message is received, the program will
start playing the current song from the point specified by the song pointer
message.

## Exit

Press Fl or the left mouse button to exit to the Song mode edit screen.

# Chapter 9 - STEP TIME RECORDING

The  step  time  recording  features  of  the  KCS allow you to record note
information  from  your  synthesizer  keyboard,  while  using  the computer
keyboard  or  mouse  to  specify  tuning information.  Note velocity can be
specified  from  either  keyboard.  This can be a faster and more intuitive
way  of  precisely  entering  rhythmically regular passages than the typing
method  described  in  Chapter  4.   It is particularly convenient in Track
mode,  as  the  new  passage  can  be  played  along  with tracks that were
previously recorded.

The  step  time  recording  screen contains fifteen choices fOf note times,
fifteen  choices for note durations and six choices for note velocity.  The
current  choices are indicated by a red asterisk.  As you play notes on the
synth  keyboard  they  are  recorded  with  the current time, duration, and
velocity  values.   Each  choice  is  assigned  to  one  of  the numeric or
alphabitic  keys  shown to the left of the possible values.  You can make a
new  choice  for time, velocity or duration by pressing the appropriate key
on the computer keyboard, or by clicking the mouse on your choice.  The red
asterisk  will  move to display your choice.  If you select a zero velocity
which  is  norally assigned to the Z key the program will record the actual
velocity with which each note is played on your synth.

A new Open mode sequence can be recorded in step time by selecting the STEP
TIME  option  from  the  record dialog box.  A new track can be recorded in
step  time  by  selecting  the  STEP  TIME  TRACK option.  If you pick this
option,  the program will allow you to select the measure at which you will
start  recording.   You can also extend an existing sequence or track using
step  time  record by selecting the STEP TIME APPEND option.  The step time
recording procedure is the same in any case.

The step time record screen is shown below:

The  choices  for  time, duration and velocity are listed in columns, along
with the keys used to select the choices.

The  bottom  line  shows  the  current  measure and step, which will be the
MST-ST  value  for  the  next  note  entered.   The box directly aboxe this
contains  buttons  for  a number of step time recording options, as well as
two edit buttons.

## Recording in Step Time

Once  the  various  record parameters are set up, recording in step time is
simply  a  matter  of  entering  the  notes  for each step from the synth's
keyboard.   Pressing  and releasing a single key puts a single note at that
step; pressing more than one key before any key is released puts a chord at
that  step.   All  notes  played  will  be assigned the chosen duration and
velocity  values.   The  first  note  or  chord will get a time of 0, while
subsequent  notes  get  the  selected  time  value.   The  measure and step
counters will be updated as each note is played.

While recording you can select a new time, duration, or velocity value from
any  of the choices displayed by pressing the key shown next to the desired
value,  or by clicking on the new value with the mouse.  The asterisk moves
next to your choice, and subsequent notes will use the new choice.

If  the  DUR  FOLLOW feature is active, selecting a new time will cause the
program to select a new, proportional duration as well.  This is convenient
when  entering  data with a lot of different time values.  The durations of
the  last  note  or chord entered will also be adjusted to the new value if
DUR FOLLOW is on.  This prevents the previous note from overlapping the new
one  if  the  time  is reduced.  DUR FOLLOW is on when the step time record
screen is first entered, and can be turned on or off with the F4 key.

## Changing the Time, Duration and Velocity Values

You can easily enter time, duration, or velocity values other than the ones
initially  supplied by the program.  While holding the SHIFT key, press the
key  for  the time, duration, or velocity value you vwsh to alter; or place
the  mouse  pointer  on the value to be changed at click both mouse buttons
together.   A  red  !  will appear next to the selected value at the top of
the  screen and the message line will prompt you for a new step time value.
You  may enter up to a three digit number.  If you enter a one or two digit
number  press RETURN.  The new value will appear on the screen, and will be
selected as the current value.

The  fifteen  time  and  duration  values,  as well as the five preset
velocity
levels,   are   stored  along  with  other  sequencer  parameters  in  .ENV
(environment) files, which are described in more detail in the next two
chapters.

## Time Chg Delay

Normally,  selecting a new time value when entering a step time sequence or
track causes the next note played to get the new time value.  Enabling TIME
CHG  DELAY  causes  the  new  time  value  to  be assigned to the next note
entered, rather than the current note.  This is more naturl when entering a
score from sheet music.  TIME CHG DELAY can be activated with the mouse, or
by  presswing  the  SLASH (/) key.  The default setting for this switch i#s
offF but intuatively obvious.

## Rest, Tie, and Delete

Click  on REST or press the F3 key to insert a rest in your recording.  The
measure and step counters will be increased, and the time value of the next
note  will  be increased by the current time value.  Click on TIE, or press
RETURN  to  enter  a  tie.   This  will  increase the time and also add the
current  time  value  to the duration of the most recently recorded note or
chord.   Clicking  on  DELETE or pressing UNDO will delete the last note or
chord entered.

## Play Options

The  PLAY  OPTIONS  allow  you  to play back part or all of the sequence or
track  being  entered.   Each  option  can  be selected by clicking on that
option, or by pressing a key on the computer's keyboard.

SEQ/TRACK  plays  the  current sequence or track from the beginning and can
also be selected by pressing F6.  24 NOTES and 8 NOTES cause the last 24 or
eight  notes  entered  to  be  played;  the  associated keys are F7 and F8,
respectively.  Play can be stopped with the F1 key or left mouse button, or
restarted with FlO or the right mouse button.

8  BARSS  and 2 BARS, or the F9and FlO keys, let you hear the last eight or
two  bars  of  your recording.  In Open mode, you will hear the sequence in
isolation;  but  in  Track mode, all previously recorded and unmuted tracks
will  also  be  heard.   The  cue point will also be reset if you use these
options in Track mode.  In Open mode, LAST CUE or the TAB key will play the
current  cue sequence from its cue point.  If the current CUE sequence is a
control sequence that plays the sequence being recorded, this allows you to
hear  your  recording  in  context.   In Track mode, LAST CUE will play all
tracks  from  the  current cue point.  You can interrupt or restart play as
described earlier.

## Audition Velocity

If  you are not sure of the dynamics you wish to use for your recording you
can  use  the  AUDITION  VELOCITY  feature to try different note velocities
until  you  find  the  one that sounds best.  Use the mouse, or press F5 to
activate  AUDITION  VELOCITY.   New notes will not be recorded; instead the
current  velocity selection will be changed to the velocity of each note as
it  is played.  When you decide that you like the velocity of the last note
played,  press  F5  again.   Recording  will  resume using the new velocity
value.

Note  that  if  you're  using  a  keyboard  that sends release velocity the
current  velocity  selection  will change when you release a key as well as
when a key is pressed.  In this case, be sure to turn AUDITION VELOCITY off
before releasing the key.

## Duration Adjust

Clicking  on  one of the four DURATION ADJUST values or pressing one of the
four  cursor  control  keys  allows  you  to  make small adjustments to the
current  duration  selection,  and to hear the result in the context of the
current time value.  Press the CURSOR RIGHT key to increase the duration by
one,  the CURSOR LEFT key to decrease by one, the CURSOR UP key to increase
by  four,  or  the  CURSOR DOWN key to decrease by four.  The most recently
recorded  note  will  be  played  eight times with the new durataon and the
current  time  and  velocity values.  If no notes have been recorded yet, a
middle C will be played.

## Pause

If  you  want to play some notes without recording, press the ESC key.  The
word  PAUSE  will  appear,  and the program will stop recording.  Press ESC
again to resume recording.

## ECHO and MIDI MERGE

Iaf  you are using a master keyboard and an external synth module, you will
need to activate either ECHO or MIDI MERGE, just as you do on the other
screens. These functions can be selected and the echo channel changed with
the BACKSPACE, SEMICOLON (;), > (SHIFT-PERIOD), and < (SHIFT-COMMA) keys,
as described in Chapters 6 and 7, or the mouse can be used.

If ECHO or MIDI MERGE is on while in step time record, the velocity of all
notes received from MIDI will be reset to the currently selected velocity
before the notes are transmitted to the MIDI out jack.

## Exit from Step Time

Click on EXIT or press Fl to go to the edit screen, or use EXIT TO PLAY or
F2 to go to the play screen.

# Chapter 10 - LOAD/SAVE

The  Atari ST and Amiga vergions of the KCS use six different types of disk
files  to  store  the  data  used  by  the program.  Each file has a unique
extension.  When you select LOAD/SAVE from one of the edit screens a dialog
box  or  edit window will ask whether you want to load or save a file, which
disk drive to use, and what file type is to be accessed.

After  selecting  a  drive (on the ST only) and file type, click on LOAD or
SAVE.   Another  dialog  box  will  display  a  directory of files with the
selected  extension  on  the current disk.  In the Atari version, files are
selected  in  the  window using the GEM protocols that are discussed in the
STs  docuentation.   In  the  Amiga version, a fairly self explanatory file
select window will appear.  After selecting a file name, click on CANCEL to
exit or OK to load or save the file.  You do not have to specify .ALL,.SEQ,
.ENV, etc.  as these extensions will be added by the program.

In  the  ST  version of the program, clicking on FORMAT will format a blank
disk  for  data  storage.   The  file  type  selected  is  irrelevant  when
formatting  a disk.  Dialog bexes will confirm your choice, and ask for the
disk  type.   (In  the  Amiga  version of the program, you may format disks
directly  from  the  WorkBench.)  Clicking  on  CANCEL  exits the LOAD/SAVE
screen.

## File Types

.ALL files contain all songs, sequences and tracks, plus the status of each
individual  track  and the contents of the text area, in memory at the time
the  file was saved.  ..  dtLL files can only be loaded or saved from Track
or  Open modes.  Loading a .ALL file will erase all data in the sequencer's
memory.

.SEQ files hold a single track or sequence.  These files can only be loaded
or  saved  from  Track  or Open mode.  The file saved will be the currently
selected  track  or sequence; when loaded, the file will be put in the next
available track or sequence, depending on the mode selected.

.TRK  files  hold all 48 tracks, plus their statuses.  Savng all tracks can
be done from any mode, but loading tracks can only be done from Track mode.

.SNG  files  hold a single song as wel1 as the sequences used in that song.
When  a .SNG file is loaded, each sequence is put in its original location,
unless  that  slot is already occupied, in which case the sequence is moved
to  the  first  empty  slot  and  the  song  is  changed to reflect the new
location.   This  allows  merging  multiple  songs into a single .ALL file.
Songs  can  only  be loaded or saved from Song mode, and the song loaded or
saved   is  the  currently  selected  song  or  the  next  available  song,
respectively.

A set of Open mode sequences that are not otherwise used in a song can be
saved and loaded as a group by creating a dummy song made up from a list of
the desired sequences. In this case, though, PRIMARY and ST events
contained in Open mode sequences will not be reassigned if that sequence is
already in use, so you will need to be careful to avoid such conflicts if
you use the dummy song method.

.ENV  files  are  environment  files,  and  contain  most of the parameters
diplayed in the SET OPTIONS edit window, as well as the time, duration, and
velocity  values  used in step time recording.  If a file named DEFAULT.ENV
is saved on the KCS program disk, this file will be loaded when the program
boots.

.ENV  files  are  also created automatical@y whenever you save a .ALL file.
When  a .ALL file is saved, the searches for a .ENV file with the same name
and loads that file as well.

## MIDI Files and File Formats

For Atari ST owners who would like to use KCS 
sequence files  with  other  sequencers  that support the MIDI sequence
file
format, we  have  written a utility program entitled CONVERT.PRG,    which
will convert KCS  sequence  files to MIDI standard files, and vice versa.
(An
Amiga  version  will  be  available shortly.) The MIDI sequence file
fornhat is an emerging standard, which has been unofficially adopted by
many music software publishers, including Dr. T's, Opcode, Intelligent
Music, Passport, and others. Instructions for the use of this program are
contained in a README file, which is included with the program. CONVERT.PRG
may be found on many MIDI related bulletin boards, or it may be obtained
directly from Dr. T's for a nominal fee.

For advanced computer musicians who would like to write programs that can
exchange files with the KCS, the file formats for the .ALL, .SEQ, .SNG, and
.TRK file types are available for a nominal charge to cover printing and
shipping. Contact us for more information.

## Caveats

One  point  to  be  aware of when saving ,ALL or other long files is that a
computer with 1 meg or more of memory can hold many more notes than can fit
on  a  single disk.  A double sided disk can hold about 120000 notes, and a
single  sided  disk (on the ST only) only holds about half this number.  If
you  somehow  find yourself with more notes than will fit on a single disk,
you  will  have to save some individual sequences or songs then delete them
and save the remaining data in a .ALL file.

CAUTION:  With the exception of the DEFAULT.ENV file mentioned earlier, you
should  NEVER  save  your  data  files on the KCS program disk!  This could
cause  conflicts  with  the  program,'s copy protection, which will make it
impossible  to  load  the  program.   The  write protect tab on the program
diskette  should be left open at all times except when saving a DEFAULT.ENV
file.

# Chapter 11- SET OPTIONS

The  SET  OPTIONS  edit  window  allows  you  to  set a number of important
parameters used by the prog@am.  The SET OPTIONS screen can be reached from
any  edit  screen  by  clicking  on SET OPTIONS, or from any play screen by
pressing the 0 (ZERO) key.

The  SET  OPTIONS  screen  is divided into six areas, each of which contain
buttons  and  numeric  data  fields  for  a  group  of  related parameters.
Settings  for  the  different  parameters  are  changed as described in the
section on edit window in Chapter 1.  Most of the parameters on this screen
can also be loaded from or saved to disk in a .ENV file, which is described
later in this chapter.

## MIDI

MIDI MERGE causes the program, to transmit all data received at its MIDI in
to  the  MIDI  out  jack.   MIDI  merge  can be turned on and off from this
screen, or with the SEMICOLON (;) key on any of the play screens.  You will
need MIDI merge if you are using a master keyboard and remote modules.

MIDI  merge  functions when the program is on one of the play/record
screens, though not on the edit 
screens, and MIDI merging is overridden when ECHO is on.  Also
note  that  if  a system exclusive message being received by the program is
interrupted  for  some reason, the program will hang up until you press Fl.

START IS 1ST CLOCK allows you to tell the program whether it should
respond  to  a  MIDI  start or continue command as though it were the first
MIDI  clock, or simply as an instruction to start listening
for MIDI clocks.  If you are syncing to an external MIDI clock source, pick
the setting which seems to sync better with your other equipment. In
particular, if you are transferring sequences from another instrument using
the techniques outlined in chapter 13 and the time of the first event recorded
is always off by one clock step, yu should change this setting. This option
has no effect if the internal clock is being used.

NO  MIDI  START lets the program respond to MIDI clock even if a MIDI start
command  is not received.  This is sometimes needed for certain specialized
applications  involving  recording from other sequencers, and has no effect
when the internal clock is selected.

SONG  POINTER SEND activates the transmission of MIDI song pointer messages
by  the  KCS.   When  this  option  is  turned on, the program will send an
apropriate  song  pointer  message  whenever  a song, sequence, or track is
started  from  a cue point, or when a track loops to the beginning of a cue
loop.   The DLY button, to the left of SONG POINTER SEND, adds a one second
delay  between  the  MIDI  Song  Pointer and Continue messages after CUE is
selected on any play screen.  This allows the external instruments to catch
up to the sequencer before it starts.

MIDI  CLOCK  OUT tells the program to enable or disable the sending of MIDI
clock.   If  you  are not syncing a drum machine to the KCS via MIDI clock,
you  may  want to turn this off to reduce the amount of data sent via MIDI.
For  some  specialized  applicaions,  you  may  want  to  send  MIDI  clock
selectively   from   your  sequences  using  *  events,  and  not  send  it
automatically with every clock step.

RUNNING  STATUS  reduces the amount of MIDI data transmitted by eliminating
redundant  status  bytes,  which  can  help reduce timing or other problems
caused  by  MIDI  data  overload.   Use with caution, especially if you are
using a MIDI switch box.

MIDI  SLOW  adds  a  slight delay after each byte sent out over MIDI.  Some
MIDI  instruments  cannot  respond  to  MIDI  data  when transmitted at the
standard  MIDI  transmission  rate  (the baud rate to you techies).  Yamaha
instruments  are the most notorious for this, but it is also a problem with
some  MIDIed  Drumulators.   If  your instruments randomly miss or stick on
some notes, try setting MIDI SLOW to a value in the 60's.  Use the smallest
value  that  you  can for MIDI SLOW, as increasing it causes the program to
spend time waiting around when it could be working.

MIDI  instruments  can also miss data because too much is being sent at one
time.   This sounds like the problem described above, but is acutally quite
different.   The  instruments get so much MIDI data that they have no place
to  put it while they are doing their other work, and some gets lost.  MIDI
SLOW  will  probably not help this problem.  You will have to get some MIDI
channel filters, so instruments only receive data intended for them, or you
will  have  to record less data.  Continuous controllers (mod wheels, pitch
wheels, aftertouch, etc.) are a likely cause of this problem

## RECORDING

The  options  in  this  portion  SET OPTIONS screen are used to set certain
parameters  which  affect  recording  in  Track  and  Open modes.  With the
exception  of  MUTE NEW TRACKS, all recording options affect both Track and
Open  mode  recording.   Many of these options can also be changed from the
record  screens  as  well,  and  further  information can be found in those
chapters.

CONTROLLERS,  AFTERTOUCH,  and  NOTE  OFF  VELOCITY  are  used to enable or
disable  the  recording  of  MIDI controllers (coninuous controllers, pitch
bend, and program changes), aftertouch, and note off, or release, velocity.
The PAUSE switch, next to CONTROLLERS, allows recording controller settings
when  the sequences is paused.  When this switch is on, the last value only
of  any  controller  that  is adjusted when the sequencer is paused will be
recorded.   This  could  be  used,  for  example,  to enter a single volume
control  message  in a previously recorded part, by playing the sequence to
the point of the insertion, pressing PAUSE, and then playing a few notes on
the  keyboard  while  adjusting  the  volume.  Once you've found the proper
setting,  restart  the  sequencer  by  pressing  PAUSE again, and the final
volume  setting  will  be  recorded.  (Of course, the RECORD switch must be
turned on, as well, and the sequence or track containing the newly recorded
data  will  need  to  be  merged  with  the  original track or sequence, as
always).

SYSEX enables the recording of system exclusive messages.  When this switch
is  on,  sysex  messages of up to 5000 bytes can be recorded as single byte
events.   This  is  less  memory  efficient  than  storing  sysex data in a
librarian program, but it may be more convenient in some instances.

ALIGN  is  used to force tracks or sequences to "line up" with the start of
each  measure,  when  recording  or  playing.  If ALIGN is on while you are
playing  sequences  from  the Open mode play screen, sequence playback will
not  start  as soon as the sequence key is pressed, but at the beginning of
the  next  measure.  If ALIGN is on while recording in either Track or Open
modes, recording will not stop immediately when the F10 key is pressed, but
will continue until the start of the next measure.

MUTE  NEW  TRACKS  causes  tracks to be muted as soon as they are recorded.
This  is  convenient, for instance, when recording multiple takes of a long
solo  over a track, since earlier takes of the solo will not be played back
as the sequencer loops.  It is also handy when looping over a short cue, to
give you a chance to play a short riff many times while you work on getting
it right.

QUANTIZE  toggles real time auto-correction.  When QUANTIZE is on, the time
values  and durations of all events recorded will be rounded to the nearest
multiple  of  the  number to the right of QUANTIZE.  Unlike auto-correction
from  the  edit screens, quantization cannot be undone.  Another difference
is  that  all event types, including controller events and program changes,
will  be  rounded  when  QUANTIZe  is  on,  whereas  only note messages are
affected by autocorrection.

ECHO  is  similar  to  MIDI  merging,  except  that  all  data  received is
rechannelized  before  recording or transmission to the MIDI out jack.  The
number to the right of ECHO is the echo channel.

FILTER  forces the sequencer to only receive data on a single MIDI channel,
called  the  filter  channel.   Data on all other channels is filtered out.
This  is  especially useful when recording data from another sequencer into
the  KCS,  or  when "expanding" a single channel's data from many sequences
into  a single sequence using the loopback recording technique described in
Chapter 13.  The number to the right of FILTER is the filter channel.

COUNTIN allows you to select the number of "free" steps that you get before
recording  starts  in  real  time.  The metronome will sound and MIDI clock
will  be sent during the countin, but the program's clock will be held at 0
until  the  count  is  over.  Remember, this is set in steps, not metronome
beats,  so  to  get a one measure countin at 96 steps per measure, you must
enter 96.  The maximum value for COUNTIN is 255 steps.

## OTHER

SILENT  PUNCH  only  affects  the operation of the sequencer in Track mode.
When  SILENT  PUNCH  is  on, notes that are being punched out will be muted
while  punch  points  are  being  set.   Once the punch points are set, the
punched  portion  of  the  track will be muted regardless of the setting of
this  switch.   SILENT  PUNCH also affects notes that are deleted when LIVE
EDIT  is active - if SILENT PUNCH is off, notes that are being deleted will
still sound when LIVE EDIT is on.

ACTIVITY  DISPLAY  enables  the  musical  icons which appear next to active
tracks  in  the  track status display.  You might want to turn the activity
display  off when recording or playing very dense musical passages, or when
using high clock resolutions.

STEP DISPLAY enables the step portion of the measure/step counter.  Turning
the  step display off reduces the computer's work load slightly, and allows
the program to concentrate on more important tasks.

MIN:SEC  DISPLAY  enables the real time clock, which displays the amount of
time  elapsed  since  the  sequencer was started.  As with the STEP DISPLAY
switch,   turning   this  switch  off  may  help  in  hypercritical  timing
applications.  See Chapter 13 for details on the real time clock.

RE-RECORD  STOP  affects the operation of the UNDO key and RE-RECORD button
in  Track  mode  only.   When this switch is highlighted, pressing the UNDO
will   erase   the  current  recording,  stop  the  clock,  and  reset  the
measure/step counter.  When Re-RECORD STOP is off, pressing UNDO will erase
the current recording, but the sequencer will continue to play.

TRACK  MODE LOOP, suprisingly enough, controls looping in Track mode.  When
this  switch  is  off,  all trakcs will play through only once.  It is also
possible to play or record past the end of track 1 (which normally sets the
loop  point  for Track mode) by turning TRACK MODE LOOP off.  You should be
careful  about  recording on tracks other than track 1 when TRACK MODE LOOP
is turned off, since any data recorded past the end of track 1 will be lost
when  a DOUBLE, APPEND, or ALL TRACKS TO SEQ operation is performed, unless
the  length  of track 1 is extended by changing the TIME value of track 1's
final DE event.

TEMPO  CHG  BY  RATIO  changes the amount of tempo change which occurs when
tempo  is  changed  from the Track mode control panel, or from the computer
keyboard.  When this switch is off, the tempo will change by 1 BPM when any
of  the  tempo  controls is pressed; when this switch is on, the tempo will
change by about 2.5% for each button press.

MIDI  KEYS  is  a  convenience  feature for advanced KCS users, that allows
controlling  certain  sequencer  functions from an external MIDI footswitch
controller.   When  this switch is on, MIDI controllers 64, 65, and 66 (the
sustain,  portamento,  and  sustenuto  pedals,  respectively) duplicate the
functions of certain keys on the computer's keyboard on the program's Track
mode,  Open  mode,  and  step  time  record  screens.   The  sustain  pedal
duplicates  the F10 key and right mouse button on all three screens, but is
especially  useful  in Track mode, since this allows you to start recording
and  set the track loop point with no hands.  In Track mode, the portamento
pedal  is  equivalent  to  the  RE-RECORD  button,  and the sustenuto pedal
controls  the  STOP  button.   In  Open  mode, the portamento and sustenuto
pedals  are  used to start real time recording, and duplicate the functions
of  the  RETURN  (record  on next event) and ENTER (record immediate) keys,
respectively.  On the step time record screen, the portamento pedal inserts
a  rest,  and  the  sustenuto  pedal  deletes  the  previous  note.   These
controllers  are  recognized  on  all  MIDI channels, and are not merged or
recorded when MIDI KEYS is active.

DRUM  CHANNEL  selects  one channel which will not be affected by any pitch
transpositions,  either  as  part  of  a  song or control sequence, or when
editing  a  sequence  or  track.   This  is intended for use with MIDI drum
machines.   Since  drum  machines assign each drum to a separate MIDI note,
transposing  a  drum  part  will  cause the wrong drums to be played by the
sequencer; hence the need for a drum channel.

DEBOUNCE sets the amount of time a mouse button must be held down before it
will  repeat  on  the  Open  or  Track  mode play screens, in 5 millisecond
increments.   A  value of 100 corresponds to 1/2 second.  You may find that
different values of debounce are needed for different applications.

CUE  MOVE  AMOUNT  sets the amount that the cue point(s) will move when the
cue  move  buttons  are  pressed.   This  will toggle between one and eight
measures  when the INSERT key is pressed on any play screen, but can be set
to any value from 1 to 99 on the SET OPTIONS screen.

## VELOCITY PEDAL

The  switches  in  the VELOCITY PEDAL section are used to choose one of the
three  velocity pedal options, as well as the velocity pedal channel, which
are  used to affect note velocities during Open or Track mode recording, or
when  LIVE  EDIT  is active in Track mode.  Velocity pedal in Open mode can
only  be selected from this screen.  See the chapters on the Open and Track
mode play/record screens for details on velocity pedal functions.

TIMING

The  parameters in the TIMING section of the SET OPTIONS window are used to
select  the  clock  source  and set the timing resolution of the sequencer.
Chapter 13 has more information on timing resolution.

INTERNAL CLK selects the program's internal timer as the clock source.  The
number  to  the right of the switch is the tempo, in beats per minute.  The
tenths  of  BPM  digit is treated as a separate field by the program, which
means  you  will  need  to use the mouse to place the cursor on this digit.
Remember  that the internal clock is always used when playing a sequence or
track  from  the  edit  screen, so the setting of the clock source selector
switches will have no effect when working on the edit screen.

MIDI  CLOCK  selects  an  external  MIDI  clock  as  the clock source.  The
sequencer  will  wait  for a MIDI start or continue message before starting
any tracks or sequences unless the NO MIDI START button is turned on.

MIDI  W SONG POINTER selects the external MIDI clock source and enables the
reception  of  MIDI  song pointer messages.  When a song pointer message is
received,  the  sequencer  will  move to that point in the current song cue
sequence, or track, and play from that point.

STEPS/MEASURE sets the number of steps in a measure, which only affects
the  measure/step counter on the play and edit screens, and the event list
on the
edit screen.  This value will change whenever an SM event is encountered by
a sequence or track.  The followng table shows the correct STEPS/MEASURE
setting for the most common time signatures and STEPS/BEAT values.

    Time               Steps/Beat
    Signature               24              48              96  
    3/8                     36              72              144 
    2/4                     48              96              192 
    5/8                     60              120             240 
    3/4                     72              144             288 
    7/8                     84              168             336 
    4/4                     96              192             384 
    9/8                     108             216             432  
    5/4                     120             240             480  
    6/4                     144             288             576
    7/4                     168             336             672 

STEPS/BEAT  sets  the  overall  timing  resolution  of  the sequencer.  The
standard  value for STEPS/BEAT is 24.  Higher values allow for more precise
timing,  but  also  make editing more difficult and put a greater strain on
the  computer,  by  giving  it  less  time between steps in which to do its
"housekeeping" chores.

If STEPS/BEAT is changed during a SET OPTIONS session, the program will ask
if  you  want  to  "Adjust all event times?" when you @eave the SET OPTIONS
screen.   Answering  "Y" to this question will compress or expand all event
times and durations to match the new resolution.  The program will also ask
of  you  wish  to  adjust  the related parameters.  A "Y"$ answer here will
change   the   STEPS/MEASURE,  STEPS/MIDI  CLK,  and  STEPS/METRO  settings
proportionally, or "N" will leave the settings unchanged.

STEPS/MIDI  CLK sets the number of sequencer steps between each MIDI clock.
This  should  normally  be  set  to  1  when STEPS/BEAT is 24, and adjusted
proportionally  when  STEPS/BEAT  is  increased.   The  sequencer  uses the
current  tempo  setting to interpolate between MIDI clocks when an external
MIDI  clock  is used and STEPS/BEAT is greater than 24, so there will be an
improvement in resolution when STEPS/BEAT and STEPS/MIDI CLK are increased,
even if an enternl clock is in use.

## METRONOME

STEPS/METRO  sets the interval between metronome ticks.  The default is for
the  metronome  to occur every 24 steps.  If you want the metronome more or
less  often,  or you change the STEPS/BEAT setting, you will want to change
the number of steps per metronome.

AUDIBLE  METRONOME  enables  or  disables  the  metronome  "click"  that is
produced by the monitor speaker.

VISIBLE  METRONOME  enables  or disables the musical icon metronome that is
shown on the Track mode and Open mode play/record screens.

PLAY  METRONOME  turns  the metronome on when the sequencer is in play.  If
this  switch  is  off,  the  metronome  will only occur when the program is
recording.

## Environment Files

Most  of  the parameters shown on the SET OPTIONS screen can be saved in an
environment  file.   This  allows  you to quickly and accurately change the
recording  and  playback  parameters  when  you  move  to  a  new recording
situation.  Environment files have a .ENV extension.

Environment  files contain the values for time, duration, and velocity used
on  the  Step  time  record  screen,  as  well as the following SET OPTIONS
parameters.  All the parameters from the MIDI and METRONOME sections of the
SET  OPTIONS  screen  (except  the DLY switch) are saved, and in the TIMING
section,   all  parameters  are  saved.   In  the  RECORDING  section,  the
CONTROLLERS,  AFTERTOUCH,  and NOTE OFF VELOCITY record switches are saved,
as  well  as  the  ECHO  status  and  channel.   In  the OTHER section, all
parameters  except  TRACK MODE LOOP, MIDI KEYS, and the CUE MOVE AMOUNT are
saved,  and  in  the VELOCITY PEDAL section, only the CHANNEL is saved.  In
the Amiga version of the program, the screen colors are also saved.

If  a  file  named  DEFAULT.ENV  exists on the KCS program disk, it will be
automatically loaded when the program boots up.  .ENV files are also loaded
and saved automatically with .ALL files, under the same file name.

If  the  STEPS/BEAT  setting  in the environment file is different than the
current  setting  when you are loading a .ENV file, the program will ask if
you  want  to  adjust  all event times.  See the LOAD/SAVE chapter for more
information on .ENV files.

# Chapter 12 - MIDI

While  it is possible to make good use of the Keyboard Controlled Sequencer
wdthout  detailed  knowedge  of MIDI, you will undoubtedly find that as you
start  to  realize  some  of  the  enormous potential inherent in most MIDI
instruments;  an  understanding  of  the nuts and bolts of MIDI can be very
helpful.   This  chapter  contains  information  on  a  number  of subjects
pertinent  to  the  KCS,  but  is  by  no  means  a complete guide to MIDI.
Fortunately, a number of well written books on the subject have appeared on
the  market;  we  recommend  tracking  one  down  if you need more detailed
information.

## MIDI Connections

A MIDI cord consists of a twisted and shielded pair of wires, with the body
of the plug isolated from the shield.  At the MIDI out jack, the MIDI cable
plugs  directly  into the synth or computer's circuitry; but at the MIDI in
of  the  receiving  instrument,  the  cable connects to an "opto isolator",
which  uses  light,  rather  than  electrons, to couple the signal into the
instrument.   This  means that there is no electrical conductor between the
MIDI  in  of  one  machine  and  the MIDI out of another, so you can't blow
something by incorrect patching.

Although  MIDI  cables look the same as standard DIN or Roland sync cables,
the  grounding  of  the  two  cables  is  different.  DIN cables can create
"ground  loops",  which  will cause hum and other nasty sounds to appear at
the output of your synthesizer(s).

As  mentioned  in  the  first  chapter  of this manual, the Atari ST uses a
nonstandard  method  for  creating a MIDI thru connection with its MIDI out
jack.   This causes a conflict with some types of (nonstandard) MIDI cables
which have the two normally unused pins (1 and 3) shorted to the pins which
carry  MIDI data (4 and 5).  The best solution to this situation is to have
the ST permanently modified to meet the MIDI spec; a less drastic s9olution
is  to  check  your cables with an ohm meter, preferably before leaving the
store with them.

## MIDI Modes

MIDI  modes determing how an instrument will respond to incoming MIDI data.
MIDI  modes  can  be  a  source  of confusion to beginners and pro's alike,
primarily  because  one MIDI manufacturer mininterpreted the meaning of one
of  the modes when they introduced their first MIDI synthesizer.  The three
original  modes were broken into four modes to allow for this.  Since then,
other  manufacturers  have  created  new modes to take advantave of various
types  of  multi-timbral implementations.  The original four MIDI modes can
be selected on any synth that implements them through a control change (CC)
event  called  a  mode  message;  any  other  modes must be selected at the
instrument  or  with  a  sysex  message.   The section below on USEFUL MIDI
COMMANDS  gives  an example of how to select one of the four standard modes
from the KCS.

The  four  standard  modes  are  called  Omni  On/Poly,  Omni On/Mono, Omni
Off/Poly,  and  Omni  Off/Mono;  they  are  also  known  as  modes  1  - 4,
respectively.  The two Omni On modes cause the synth to receive data on all
16  MIDI  channels  at  once; this is good for keyboards that are connected
together  in  a  layering  arrangement,  but  not  so  hot  for  sequencing
applications.   Many  earlier  synths  and drum machines power up in mode 1
(Omni On/Poly), and must be changed to one of the other modes to be used in
a  multi  instrument  sequencing  environment.   Mode  2  (Omni On/Mono) is
virtually  useless  in  all  situations, as it causes an instrument to play
ponly  one voice monophonically, from all MIDI channels.  This is the extra
mode that was accidentally created in the early days of MIDI.

The  two  Omni  Off  modes,  modes 3 and 4, are more useful in a sequencing
environment.   Mode 3 (Omni Off/Poly) causes a synth to play all its voices
polyphonically  on one MIDI channel, while Mode 4 (Omni Off/Mono) puts each
voice  on a separate MIDI channel for monophonic operation.  The CZ-101 and
Sixtrak  both  use  Mode 4 to implement their multi-timbral features, while
more  advanced  synths  like  the Oberheim Xpander, Ensoniq ESQ1 and Yamaha
FB01  use  non-standard  MIDI  modes  to allow assigning some voices to one
channel, and some to others.

## Other MIDI Messages

Some  synthesizers  can  be  placed  in an operating condition called Local
Control Off.  In this mode, they will respond only to signals coming in via
MIDI,  while ignoring their keyboards.  They will continue to send keyboard
information via MIDI OUT.  Local Control On will return the synth to normal
operation.    Local   control   messages   are  subset  of  the  continuous
controllers, and are sent from the sequencer with CC events.

System  real time messages are used to synchronize MIDI instruments in real
time.   The  timing clock message will advance drum machines and sequencers
to  move  in  time  with  the  sequencer.   Other system real time messages
include  the start, stop and continue commands.  Normally, these events are
sent  by  the  KCS at the appropriate times, but they can be sent as single
byte  messages  for  specialized applications.  Other less useful real time
messages include the reset and active sense messages.

System  common  messages  are  miscellaneous  messages which can be sent to
instruments,  regardless  of  what  channel they are on.  These include the
song select command, the tune command (which initiates oscillator tuning on
analog  synthesizers),  and  the  much  ballyhooed  song  position  pointer
message.

System  exclusive  (sysex) messages are used by individual manufacturers to
do  whatever  they want to do with their instruments that is not covered in
the normal MIDI spec.  This includes, but is not limited to, functions such
as  patch  dumps, remote button pushing, and even displaying messages on an
instrument's  display.   You  can  use  single  byte  events  to send sysex
information,  but  it  is  your responsibility to determine the response of
your  instruments  to  the  information  sent.   The  March  1987  issue of
Electronic  Musician has an article on using system exclusive data with the
KCS.

## Some Useful MIDI Commands

All  of  the message types described above can be sent from the KCS, either
as   CC   events,  or  with  single  byte  messages.   While  many  earlier
synthesizers,  such  as the Sixtrak, have their own controller assignments,
the  assignments  of  all MIDI controllers are now standardized by the MIDI
Manufacturers Association, and are listed on the next page.

Many instruments also have assignable controls, which can be set to send or
recognize  any  MIDI  controller.   This  allows  you  to  use  any  of the
unassigned  or  less  common  controllers  for whatever purpose you'd like.
Examples  of  such  instruments are the Oberheim Xpander, Matrix 12, and XK
keyboard  the  Yamaha  KX76 and KX88 keyboard controllers, and the Kurzweil
MIDIBoard.


    Controller Name                 Number          Range
     
    Modulation Wheel                1               0 - 127 
    Breath Controller               2               0 - 127  
    Early DX7 Aftertouch            3               0 - 127  
    Foot Controller                 4               0 - 127
    Portamento  Time                5               0 - 127 
    Data Slider                     6               0 - 127 
    Main Volume                     7               0 - 127 
    Balance                         8               0 - 127
    Pan                             10              0 - 127 
    Expression                      11              0 - 127 
    General Purpose #1              16              0 - 127 
    General Purpose #2              17              0 - 127 
    General Purpose #3              18              0 - 127 
    General Purpose #4              19              0 - 127 
    LSB's for #'s 0 - 31            32 - 63         0 - 127 
    Sustain Pedal                   64              0 or 127 
    Portamento On/Off               65              0 or 127
    Sustenuto  Pedal                66              0 or 127  
    Soft Pedal                      67              0 or 127 
    Hold 2                          69              0 or 127
    General  Purpose  #5            80              0 or 127 
    General Purpose #6              81              0 or 127 
    General Purpose #7              82              0 or 127 
    General Purpose #8              83              0 or 127
    Tremolo Depth                   92              0 - 127
    Chorus  Depth                   93              0 - 127 
    Celeste Depth                   94              0 - 127 
    Phase Depth                     95              0 - 127
    Data  Increment                 96d             0 or 127 
    Data Decrement                  97              0 or 127 
    Non Reg.  Parameter MSB         98              0 - 127 
    Non Reg.  Parameter LSB         99              0 - 127 
    Reg.  Parameter MSB             100             0 - 127 
    Reg.  Parameter LSB             101             0 - 127  
    Local Control On/Off            122             0 or 127
    All Notes Off                   123             0 
    Omni Off                        124             0  
    Omni On                         125             0  
    Mono On (0 =  Omni Off)         126             0 - 16
    Poly On                         127             0 

As  an  example  of how these might be used, here is a sequence that sets a
CZ-101  on  Channel  5  to MIDI mode 4 (Omni Off/Mono) and then turns Local
Control Off on channels 6 and 7:

    MSR- ST         EVNT    TIME   CH   TYP  NOTE     VEL     DUR
    1-      1       1         0    5    CC   126      0
    1-      1       2         0    6    CC   122      0
    1-      1       3         0    7    CC   122      0


The  other  three  modes  require  two  mode  change  messages  to select a
particular  mode,  for instance, control changes on controllers 124 and 127
to select Omni Off/Poly On.

The  numbers to be entered in single byte events for the other messge types
are given below:


    Message Name            1st Byte                2nd Byte                3rd Byte
    
    Sysex Start             240                     ID #  
    Song Pointer            242                     LSB                     MSB 
    Song Select             243                     Song #
    Time Request            246
    Sysex End               247 
    Timing Clock            248 
    Start                   250 
    Continue                251 
    Stop                    252 
    Axtive Sense            254 
    System Reset            255

The  values used for the second and third bytes in the first three messages
must  be  in  the  range  of  0 - 127.  If is you are using the song select
message  to  select a song on an external drum machine or sequencer, you'll
need  to  send  a  stop  message just before the song select message, and a
start  message  immediately  thereafter.   The  form  of  system  exclusive
messages  varies  from  one  instrument to another; consult your manual for
details.

## Program Changes

The  program  numbers  assigned  to MIDI program change
numbers  can  vary quite  a  bit from one manufacturer to the next.
Generally
speaking, sending  a program change to a Sequential of Oberheim synthesizer
will cause that patch number to be selected, while sending the same program
change to a Yamaha or Ensoniq instrument will select that patch number
minus one. Casio uses a strange overlapping system which is described in
the APPLICATIONS chapter, while Korg, Roland, and others use a "bank
system" in which programs are selected via a modified octal numbering
system.

The following table shows which numbers to enter in a PG event to select a
program on instruments that use the bank system. The Group A and Group B
columns respect another level of program selection used on some Roland
instruments. Use the values in the Group A column for synths without this
feature.

    Program           Group A          Group B
    11 - 18           0 - 7            64 - 71 
    21 - 28           8 - 15           72 - 79
    31 - 38           16 - 23          80 - 87  
    41 - 48           24 - 31          88 - 95 
    51 - 58           32 - 39          96 - 103
    61 - 68           40 - 47          104 - 111
    71 - 78           48 - 55          112 - 119 
    81 - 88           56 - 62          120 - 127

The  MIDI  implementation  chart  which  comes  with each instrument should
describe the program numbering scheme for that machine:  if not, REXMAN!

## MIDI Note Numbers

MIDI note numbering is also handled differently by different manufacturers.
The  note  numbering  system  used by Dr.  T's is shown in the chart below,
where  th  keyboard  represents  a five octave keyboard like those found on
most instruments today.  Note that the system we use does not coincide with
that  used  by Yamaha.  Yamaha designates the lowest key on the five octave
keyboard C1, whereas we call that key C2.

## MIDI Drums

When drum machines are played through MIDI, each drum is asigned to one or
more notes on the MIDI keyboard. While newer machines allow you to assign
each drum to a specific note (and possibly to a specific channel as well),
there is sort of a quasi-standard in effect regarding drum machine note
assignments. These assignments, which are also used in our Copyist
transcription program, are listed below.

    Drum                    Note #'s                Notes
    
    Bass                    35, 36                  B1, C2
    Snare                   38, 40                  D2, E2
    Rim                     37                      C#2
    Claps                   39                      D#2
    Floor Tom               41, 43                  F2, G2
    Low Tomm,               45, 47                  A2, B2
    Mid Tom                 49 50                   C3, D3
    Hi Tom                  52, 53                  E3, F3
    Open Hi Hat             46                      A#2
    Closed Hi Hat           42, 44                  F#2, G#2
    Crash cymbal            49                      C#3
    Ride Cymbal             51                      D#3
    Tamb/Crash 2            54                      F#3
    Cowbell                 56                      G#3
    Shaker                  58                      A#3

Most  drum  machines  only allow one note number to be assigned to a single
drum.   In  this  case,  use the higher note for any drums which are listed
with two numbers.

# Chapter 13 - TIPS FOR ADVANCED USERS

In the four years since the release of Version 1.0 of the Commodore 64 KCS,
the  thousands  or  musicians  who use the program have undoubtably come up
with  many  thousands of useful techniques, tricks, and shortcuts.  Much as
we  would  like  to,  space does not permit us to present all of them here.
This  chapter  discusses  many fundmental KCS techniques which might not be
obvious  at  first,  and  will  hopefully  serve  as a catalyst for further
experimentation.

## Control Sequences in Open Mode

A sequence shich consists of sequence control events (PRIMARY, ST, XX, XL,
MS, US, PT, or VT) is called a control sequence. You may find it beneficial
to record individual sequences or parts of songs and then use control
sequences to start them up. This example will start three sequences
together and end four measures later.

    MSR-    ST      EVNT     TIME   CH    TYP      NOTE    VEL     DUR
        
    1-      1       1         0            A       0        0      1
    1-      1       2         0            7       0        0      1
    1-      1       3         0            2       4        0      1
    5-      1       4         384          DE                 

When  the  control  sequence  which  follows  is started, sequences A and B
immediately start and will play four times.  One measure later, sequence 15
(which  is  a  secondary sequence) starts playing for two repetitions.  Two
measures  later, sequence B is forced to shut off, and another two measures
later, the TM event will change the tempo to 100 beats/minute.

    MSR-    ST      EVNT       TIME CH  TYP NOTE     VEL     DUR
    
    1-      1       1           0           B       0         0       4
    1-      1       2           0           A       0         0       4
    1-      1       3          96       ST  15        0       2
    1-      1       4         192       XX  B                 
    1-      1       5         192       TM  100     

## Creating Songs with Control Sequences

There are two techniques that we recommend for using control sequences to
combine Open mode sequences into songs. The first technique involves
creating a control sequence that starts other control sequences and waits
for each sequence. This sequence controls the segueing of the sections of
the piece. The sequences started by this sequence each start the sequences
required by their section. In the following example, the song consists of
sequence 1, followed by 2, 3 and then 1 again.

    MSR-    ST      EVNT    TIME            CH TYP  NOTE    VEL     DUR
    
    1-      1       1       0                       1       0         0     1W
    1-      1       2       0                       2       0         0     1W
    1-      1       3       0                       3       0         0     1W
    1-      1       4       0                       1       0         0     1W

    MSR-ST  EVNT    TIME            CH TYP  NOTE    VEL     DUR
    
    1-      1       1       0                       A       0         0     1
    1-      1       2       0                       B       0         0     2
    1-      1       3       0                       C       0         0     1W
    1-      1       4       0                   DE

The sccond sequence above is sequence 1.  Sequences A, B, and C are started
together,  and  sequence  1 waits for sequence C to complcte before ending.
Sequence  B is played tiwce.  When using a structure such as this, you will
probably  want  all  parts to play for the same Control amount of time.  In
the  case, sequence B would be half the length of sequences A and C.  The W
(Wait)  for  sequence  C  prevents  the song from, continuing to sequence 2
until  sequence C has completed.  The DE event may look superfluous, but it
is  necessary  to  keep sequence 1 from ending after sequence C is started,
causing the main control sequence to continue.  If you always end a control
sequence  that will be started by another control sequence with a DE event,
you  will  prevent such problems without having to think about what goes on
inside the program.

The  other  technique  is to use a single control sequence without waits to
"schedule"  the  starting of other sequences.  This has the disadvantage of
requiring  you  to  compute and enter the times necessary to get all of the
parts  to  start  exactly  when  you want them to.  It has the advantage of
comptete  flexibility.   Parts  can  be started while other parts are still
playing,  and  XX  or  XL  events can be used to stop looping parts without
calculating their normal stop points.

    MSR-    ST      EVNT    TIME            CH TYP  NOTE    VEL     DUR
    
    1-      1       1         0                     A       0         0  1
    1-      1       2         0                     B       0         0     2
    1-      1       3         0                     C       0         0     1
    9-      1       4       768                     B       0         0     2
    9-      1       5         0                     D       0         0     99
    9-      1       6         0                     E       0         0  1
    13-     1       7       384                     F       0         0     1
    13-     1       8         0                 XX    D

This  example  might  be used to play a song with the same beginning as the
one  in  the  previous  example.   Eight bars into the piece, sequence B is
started  for  two more plays.  Sequence D, perhaps just a sixteenth note hi
hat,  is started indefinitely, and sequence E is started for a single play.
Four bars after that, sequence D is stopped and sequence F is started.  The
second  method is the one Dr.  T usually prefers when he is composing music
instead of writing software.

## Control Sequences as Real Time Controllers

Many  of the KCS's event types which modify the playback of other sequences
can  be  used  as  real  time  controllers  themselves, by creating control
sequences  which  perform  specific  operations  on  other  sequences.  For
example,  suppose that you find that, when creating songs in Open mode, you
often  have a need to mute every part EXCEPT your drum sequences.  Assuming
that  you use channel 16 for your drum parts, enter the following sequences
in sequences 91 and 92.

    MSR- ST EVNT     TIME  CH  TYP   NOTE  VEL   DUR
    
    1-      1       1         0               MS      *
    1-      1       2         0               US   *16

    MSR-    ST      EVNT     TIME  CH  TYP   NOTE  VEL  DUR
    
    1-      1       1       0                 US    *

Now  typing  91 on the nuberic keyboard will mute all active sequences, and
immediately unmute all active sequences that start with an event on channel
16.   This  is  effectively  the  same as muting all sequences but those on
channel  16.   Sequence  92  will  return  all sequences to their original,
unmuted status.

Note  that,  as  with  all  applications  which  involve starting Open mode
sequences  from  the  keyboard,  the  number of repeats programmed for each
control  sequence  will have a profound effect on the operation of any real
time  control  sequences.  In the preceeding example, if sequence 91 is set
to  loop  indefinitely,  then all subsequent sequences on that start with a
channel  other  than  16  will be muted each time sequence 91 loops, and if
sequence  91  is  set  to  loop  only once, then sequences that start after
sequence  91  is  played  will not be muted.  Generally speaking, real time
control sequences should be set to repeat only once, if predictable effects
are to be obtained.

Real time control sequences can perform more exciting functions than simply
muting  tracks,  though.   Suppose  that,  for  some  reason, you'd like to
simulate  the  effect  of playing a 33 RPM record at 45 RPM.  In this case,
you'd  need  to  speed  up  the  sequencer's  tempo,  while  simultaneously
transposing each part up by a corresponding amount.  The following sequence
does just that:

    MSR-  ST         EVNT  TIME  CH  TYP  NOTE  VEL  DUR
    
    1-       1        1         0      AC   372
    1-       1        1         0      PT     *   5

If  you're  picky  about details, you could program a sequence in which the
tempo  and  pitch  transposition  are  gradually increased, to simulate the
flywheel  effect  caused  by  the inertia of the turntable.  Of course, you
will  probably  want to create a corresponding sequence to return the speed
to normal, unless you really enjoy listening to records at the wrong speed.

If you have created a series of real time control sequences that are useful
in  a  number of applications, it may be convenient to save these sequences
in  a  group, so they can be loaded for use with other sequences.  This can
be done by simply creating a song, in Song mode, which contains all of your
real  time  control  sequences.  Such a song would never be played as other
songs are, of course, but this technique allows these sequences to be saved
and loaded as a group.  See Chapter 10 for details.

## Additional Control Sequence Techniques

You may wish to create a separate control sequence that contains all of the
program changes needed for your song.  You might want to put a few steps of
rest  in this sequence if using the first technique, or start this sequence
slightly  ahead  of the others.  The extra time gives the program changes a
chance to "settle" before any notes are played.

You may wish to set up the basic structure of your song using either of the
above  techniques,  and  then  use  the  RECORD  WITH  CUE  feature  to add
additional  parts  which  can start at any point in the sequence.  You must
then  add  a sequence start event (without a WAIT) for each new sequence at
the  beginning  of  the main control sequence.  Dr.  T frequently uses this
technique  to  overdub  continuous  controller  information after the basic
piece is completed.

## Suggestions on Timing Resolution

The   Keyboard   Controlled  Sequencer  defaults  to  a  resolution  of  24
steps/beat.   This  corresponds  to  clocks  that are separated by about 20
milliseconds  (ms)  at a tempo of 120 beats/minute.  The program allows you
to  increase  the steps/beat value up to 384, but there are several reasons
that we recommend a value no higher than 96.

Given  that  it  takes  1  ms  to  send  most  MIDI  messages,  and that no
instruments will respond instantly, setting the time between clock steps to
1  or  2  ms  does  not  give you as much increased resolution as you might
think.   A  higher resolution creates larger time and duration values which
are more difficult to edit.

Other  disadvantages  stem  from  the  design  of the KCS.  The program was
designed  to  use  the time between clock steps to do work to get ready for
the  next time step.  If the time steps are too close together, the program
will  not always be able to do this work.  The program was also designed to
play  the  lower  numbered  tracks or sequences before the higher numbered.
This order is preserved even when tracks are copied to a sequence.  You can
thus  improve  timing  of  critical  parts  by  putting  them on the lowest
numbered  tracks  or  sequences.   If the time steps are so close toghether
that  the program has not finished with the previous time step before it is
supposed to start the next, this advantage will be lost.

When  in  Track  mode,  timing  accuracy  may be affected slightly by mouse
movement  and  placement.   Generally speaking, if you have critical timing
requirements,  you  should avoid moving the mouse while in Track mode, and,
on the ST, keep the mouse away from any active display areas on the screen,
such  as  the measure/step counter or the activity displays.  We have never
found  a  need  to  do this, but if you are a perfectionist and are working
with a high resolution clock, these steps may be helpful.

The real time clock is derived from the same clock used to step through the
sequencer.   Thus,  when  an  external  clock is in use, the program has no
direct  knowledge  of  the tempo - so the calculations used to maintain the
real  time  clock  are based on the TM, AC and DC events within a sequence.
This  might  seem to be an inherently inaccurate method for calculating the
time,  but  as long as the external clock source is a SMPTE or similar sync
signal  (such  as that generated by our Model S synchronizer) that was laid
down  using  the  same  tempo  changes,  the results are excellent.  In our
measurements,  we  have  found  the  accuracy of this method to be around 1
second  in  4  hours using the same computer as the clock source, though in
real  life the accuracy of the clock will be limited by the accuracy of the
tape deck's motors.  The tempo events in a piece are also used to calculate
the real time clock value when chasing a cue point, either in response to a
MIDI  song pointer message or to selecting a "play from cue" operation, and
to  interpolate  between  MIDI  clocks when synchronizing to an external 24
PPQN  clock  (for instance) while using a higher internal clock resolution.
Since MIDI song pointer messages are quantized in units of six clock steps,
the  time and tempo calculation routines used for these purposes by the KCS
expect  to  see  TM,  AC,  and DC events auto-corrected to a six step grid.
Otherwise, timing inaccuracies will result.

The  longest  single  rest  (DE event) that the program can record is 65535
steps, which corresponds to about 683 bars at 96 steps/measure.  If you are
recording  a  part that begins more than this number of steps into a track,
the  part  will play 65536 steps earlier than you expect, and you will have
to put extra rests in from the edit screen.

## Syncing to Tape

If  you  are  using  a  sync  to tape box such as our Model S or the Roland
SBX80, we suggest that you mute all tracks, sequences, or channels when you
lay down the sync tone.  The reason for this is that, when the sequences is
playing  a full set of sequences, the MIDI data st5ream is pretty busy, and
the  timing  of  individual  clock  messages  may be affected slightly.  By
muting  all  sequences, we allow the computer tofunction strictly as a very
expensive  but  deadly  accurate  MIDI  clock  source, which is all that is
needed  when  laying  down  a  sync tone.  However, be sure NOT to mute the
conductor  track in Track mode, or any Open mode sequences that contain TM,
AC,  or  DC  events, as this will eliminate all your tempo changes from the
sync track!

The exact procedure for recording a sync tone will depend on your sync box,
but  the  basic  method  is  as  follows.   First,  set up the sequencer as
described above, then start the tape recorder.  After it has run for a bit,
start  the  sequencer.   When  the song has finished, stop the recorder and
rewind the tape.  (You might want to let the clock run on for a while after
the  song  ends, in case you decide to lengthen the song later.) Now unmute
all  the  previously  muted  tracks or sequences, set the sequencer's clock
source  to  MIDI  (or  MIDI W SONG POINTER.  if your sync box supports this
feature)  on  the  SET OPTIONS screen, and patch the MIDI clock output from
the  sync  box  into  the  computer's MIDI input.  From here on, everything
should function as described in your sync box manual.

## Sending System Exclusive Messages

System  exclusive  messages,  which most MIDI hardware manufacturers use to
communicate  patch  data  and  other non-standard message types, can be set
from the KCS using single byte events.

For many shorter messages, the single byte events can be simply inserted in
the  sequence without any adjustments to the remainder of the sequence, but
for  longer messages such as data dumps, it may be necessary to add time to
the sequence after the message, to allow the KCS to "settle".  For example,
it  takes  about  1 second to send a 3000 byte sysex message.  This message
should  all  be  sent  on one time step (that is, each event in the message
should  have a TIME value of zero) since the receiving instrument may react
strangely  if  delays  are inserted into the message.  While the message is
being  sent, the sequencer is accumulating a "backlog" of other messages to
be  sent  (MIDI  clocks,  note  messages,  etc.)  which  will  all  be sent
immediately after the sysex message as the sequencer tries to catch up with
itself.   For  this  reason,  it's a good idea to put a dead space, with no
activity  in  eiher the sequence itself or any synchronized instruments, in
the song immediately following any large sysex messages.

The  KCS  can directly record system exclusive messages of up to 5000 bytes
if  the  SYSEX  button  on  the SET OPTIONS page is active.  Sometimes bulk
dumps  (which  may  be  longer  than this limit) may consist of a series of
shorter sysex messages.  These will be recorded properly if each individual
message does not exceed this limit.  For larger messages, the public domain
program  DRTSYSEX.PRG  (ST  only),  which  can be found on a number of MIDI
related  bulletin  boards, can be used to converert sysex messages of up to
32K bytes into sequence files.

To  record  a  sysex  data  dump  from a MIDI instrument, turn on the SYSEX
button  on  the  SET  OPTIONS  screen, and select an Open mode sequence for
recording.    Following  the  instructions  in  your  instrument's  manual,
initiate  a data dump forom the instrument's front panel.  If everything is
working  properly,  the sequencer will start to record immediately, and the
word  SYSEX  will  appear on the screen as the name for that sequence.  The
sequencer's  clock  may  pause  momentarily while long data dumps are being
recorded.

If  you  have  an  instrument  that does not allow sending sysex data dumps
directly  from  its front panel, it may be possible to initiate a data dump
by  sending  a  "dump request" message to the instrument from the Open mode
record  screen, while recording the data dump in an Open mode sequence.  Be
sure  that  your dump request sequence is set to play only once; otherwise,
strange  behavior  will certainly result.  Synths which require handshaking
during sysex dumps, such as Casio and some Roland instruments, will need to
have  delays  inserted  a  certain  points  in  the dump request.  See your
owner's  manuals for details on dump requests, and please don't call us for
help with specific instruments!

## Transferring Sequences from Other Sequencers

If  you  are  upgrading  to  the  Keyboard Controlled Sequencer from a less
powerful hardware or software sequencer, you might be wondering if you will
have  to  redo  all the work you've done on your old sequencer, to play the
same  music  on  the KCS.  Fortunately, transferring sequences into the KCS
from  another  instrument is quite simple.  Essentially, we treat the older
sequencer  as a keyboard player with a built in MIDI clock, and let it play
into the KCS while we record.

First,  set the external sequencer to send MIDI clock, and disable looping,
if possible.  If you can't turn looping off on the external sequencer, make
sure you have a blank sequence available in that machine.  The tempo of the
external  sequences  can  usually  be  set  to  its  maximum  value with no
problems, which is handy if you have a lot of sequences to transfer; but be
careful  when  transferring  dense  music, since minor timing discrepancies
might occur due to MIDI data logjams.

On  the  KCS,  set  the  clock  source  to  MIDI,  enable  the recording of
controllers  and  aftertouch,  and turn MIDI MERGE on.  ECHO should be off,
and  you will probably want to leave FILTER off as well, unless you want to
record  one channel at a time.  QUANTIZE should be off, and ALIGN should be
on.

Now  go to the Track or Open mode record screen, as you prefer, and you are
ready  to  record  material  from  the original sequencer.  If recording in
Track  mode,  be  sure not to set the length of all tracks.  You can either
record  a  single  sequence,  pattern, segment, whatever, from the external
device,  or  an  entire song.  We usually prefer to record single sequences
from  the external device in Open mode, and then string them together using
control  sequences or Song mode.  Once a sequence is recorded in Open mode,
it  is  a simple matter to bread it into individual channels by copying the
sequence to Track mode.

When  you  enter  the  record  screen, ensure that recording is enabled and
press  F10  or  the  SPACE bar to start recording.  The KCS will wait for a
start  signal  from the external sequencer.  Start your song or sequence on
the  external  sequencer, and data on all 16 MIDI channels will be recorded
by  the  KCS.   If  looping is disabled on the older sequencer, then a stop
signal  will  be  sent at the end of the sequence and recording will cease.
If  looping  is turned on, then select the blank sequence mentioned earlier
after  starting  the external sequencer.  On most machines, this will cause
the  blank  sequence  to  start  as soon as the first sequence is finished.
Stop  both  sequencers  after the blank sequence starts.  In this case, you
will  undoubtedly  need  to  remove  some time from the end of the recorded
sequence  or track, to compensate for recording part of the blank sequence.
In  either case, you may also need to make slight adjustments to the timing
of the first event of the track or sequence.

Since  drum machines are nothing but stripped down sequencers with built in
sounds,  drum patterns can be transferred to the sequencer in the same way.
This allows you to keep all of your drum parts on the same disk as the rest
of a song.

For more information on transferring sequences between two instruments, see
the December 1986 issue of Music Technology.

## Loopback Recording

Loopback  recording  is  an extension of the idea of transferring sequences
from  another  sequencer; but in this case, the external device is replaced
by  a  previously recorded track or sequence in the KCS itself.  This might
seem like a strange notion at first, but there are a number of applications
for  this technique.  For example, loopback recording can be used to reduce
a  complex  control sequence to a single sequence for use within a song, or
for capturing a performance using the interactive play features of Track or
Open modes.

To  set  up  for loopback recording, connect the computer's MIDI in jack to
its  own  MIDI  out,  either  directly  or through a merger.  Set the clock
source to INTERNAL CLK.  ECHO and MIDI MERGE must very definitely be turned
off,  and  MUTE  NEW TRACKS should be on of you're in Track mode.  You will
need  to  turn  FILTER  on  if you want to record on only one channel while
listening to all channels.

From  here,  the procedure is the same as recording from a keyboard, except
that  the  KCS is providing th ekeyboard player.  Simply turn RECORD on and
start  the  sequencer.   One  way  to use this technique would be to bounce
portions of several tracks down to one trakc, while muting and unmuting the
individual  tracks  as  needed.   The  result would be a single track which
contains  only the portions of the other tracks that you want to keep.  You
could  double  portions  of  a track using loopback recording by muting the
track  in  the  appropriate places, and then merging the new track with the
original.   In  Open mode, loopback recording can be used to reduce a song,
which  may  have  evolved  from  a  few  simple  sequences  to  an ungainly
collection  of  looped and unlooped control sequences interspersed with XX,
XL,  and other events, to a more manageable single sequence.  If you prefer
to  create  songs  in real time by starting and stopping sequences from the
keyboard, loopback recording can be used to capture such a performance.

The   velocity   pedal  feature  of  Open  and  Track  modes  was  designed
specifically  for  use  with  this  technique.   As  a sequence or track is
played, it is re-recorded in another sequence or track with velocity values
processed by the velocity pedal.  When doing this, you will need to set the
filter  channel  to  the  channel  of  the  sequence or track that is being
processed with the velocity pedal, so that only that channel is recorded.

 
# Chapter 14 - TROUBLESHOOTING

While  MIDI  is  one  of  the  most  successful  and consistent interfacing
standards in the computer industry, it is still possible that certain types
of  equipment won't work well together.  Many times, what might seem like a
perfectly  reasonable  configuration won't give the expected results.  This
could  be  because you are trying to use a feature which is not implemented
on  a  particular  machine,  or because you haven't initialized your synths
correctly, or for many other reasons.

When you get into a situation like this, a MIDI data display program can be
very helpful.  You can then determine if a piece of equipment is doing what
it  is  supposed  to  do, or if the problem lies elsewhere.  A MIDI display
program  for  the Commodore 64 was published in the September 1986 issue of
Electronic  Musician,  and instructions for adapting this program to the ST
appeared in the June 1987 issue.  We're sorry, but Dr.  T's can only answer
directions  directly  regarding  the  operation  of  our  software, and not
questions  regarding the idiosyncrasies of a particular piece of equipment.
See Appendix 1 for further information on customer support.

There  are  two  general  approaches that are useful when troubleshooting a
complex  system.   you  can attempt to isolate the source of the trouble by
changing one aspect of the system at a time, or you can simplify the system
by  using  fewer  pieces  of equipment or program features.  You should try
both  approaches when confronted with a problem in the use of the software.
Don't  forget  the  Doctor's  prescription  for dealing with MIDI technical
problems,  REXMAN  (Relax, EXperiment, and read your owner's MANuals).  The
remainder of this chapter outlines solutions to various common problems.

## Program Gives Errors on Loading

Does  the  computer load other programs?  If so, you might have a bad disk.
In  this  case, contact Dr.  T's to arrange for a replacement disk.  DO NOT
send  back your disk without contacting Dr.  T's for a return authorization
number.   Returned  products  which  do  not  display  such a number on the
outside of the package will be returned to the sender.  And remember, NEVER
save your data files on your KCS program disk!

## Program Gives Errors While Running

If you booted your Atari ST from a system disk containing disk accessories,
try re-booting from the KCS program disk.

If  you  are  using  an  Amiga, it is possible that some other programs may
cause  problems  when  run  concurrently with the KCS.  Try eliminating all
other  programs from the Amiga's memory, or re-booting from the KCS program
disk.   We  are  interested in hearing about any problems you may have when
multi-tasking  the  KCS  with  another  company's  product,  but  we cannot
guarantee that we will be able to solve the problem.

## Computer Appears to be Dead

Adjust  your  monitor settings and check for a loose monitor cable.  is the
disk drive on and is the drive cable OK?  Is the mouse properly inserted in
the  correct  jack?   Try  turning the computer's power off for at least 15
seconds,  then  re-boot.  This forces the computer to completely clear it's
memory.

## Instruments Do Not Respond

First  check  to see that all your MIDI cables are connected properly, that
data  reception is enabled on each instrument, and that the correct channel
assignments are being used.

If  nothing plays at all, the program might be set to sync to a nonexistent
external clock.  check the clock source on the SET OPTIONS page.

The  program  may  have crashed.  Save your files (if possible), remove the
disk, power down or reset the computer, and then run the program again.

If a sequence or track that you've just finished recording won't play back,
use  the  edit  screen to confirm that you have acutally recorded data, and
that  it's  on  the right channel.  Check your master synth, as well as the
ECHO and FILTER settings on the SET OPTIONS screen if not.

## Continuous Controllers are Recorded Incorrectly

Occasionally,  a  long  string  of  continuous controller messages, such as
pitch  bend or the modulation wheel, may be recorded as a string of program
changes  or  other incorrect message types.  This happens if the instrument
used for recording employs running status, and recording is turned on after
the  start  of  the controller motion.  When running status is used, a MIDI
status byte is sent only at the start of the controller motion, rather than
with each individual message, and if recording is enabled after this single
status byte is sent, the KCS (or any MIDI devide, for that matter) will not
interpret the subsequent data correctly.  If this happens, simply re-record
the  controller  data, but play a single note before moving the controller.
This  ensures  that  a  status  byte  will  be sent at the beginning of the
controller  motion,  and the note can be easily removed on the edit screen.
Note  that  changing the RUNNING STATUS switch on the SET OPTIONS screen of
the KCS will not help with this problem.

## Some Instruments Don't Respond Correctly All the Time

Some  instruments  can't  respond to MIDI information at the full specified
MIDI  rate.   This  is especially true for some DX7's.  The symptom is that
the  instrument  appears  to be missing notes.  Sometimes changing programs
will  fix the problem; a more drastic action is to re-power the instrument.
Use  the  MIDI  SLOW  function in the SET OPTIONS section of the program to
slow  down the MIDI transmission rate.  Use the lowest value which provides
acceptable  results.   MIDIed  Drumulators  are  also  susceptible  to this
problem.

## Sequencer Plays Back, but Notes are Garbled

Using  nonstandard MIDI cables on the Atari ST's MIDI output can cause this
problem, especially if you're playing an instrument that's connected to the
computer's  MIDI  in at the same time.  Check your cables to make sure that
pins  1 and 3 are not shorted to pins 4 and 5.  Some synthesizers also have
these pins shorted together at their MIDI inputs, which will cause problems
if you are using a 5 conductor MIDI cable, though three conductor cables do
not exhibit this problem.

Are  notes  overlapping  improperly?   If an instrument is in mono mode and
notes  overlap,  the  instrument  may  not  retrigger its envelopes.  If an
instrument is in poly mode and notes of the same pitch overlap, undesirable
results might occur.  If a note ends and a new note begins in the same time
step, the new note will start before the old one ends, causing an overlap.

Sending  program  changes  too  close to a note on or off message can cause
missing  or  stuck notes on some synths.  Try moving any program changes in
the area of the affected notes.

## Synthesizers Spit Out Notes at High Speed

If  you  loop  an Open mode sequence that contains one or more MIDI events,
all  with times of zero, the program will send these MIDI events as fast as
it can, causing your synthesizer to sound as if it's going haywire.  If you
loop  a  control sequence of length zero, and the control sequence does not
have  a  WAIT  programmed,  that  sequence  will keep restarting all of the
sequences  it  is  controlling,  and  they  will keep replaying their first
notes.   Don't  loop any sequence whose times are all zero, unless it has a
WAIT  programmed  and  a DE event at the end.  A MIDI loop condition, where
the  computer's  MIDI  out is fed back to its own MIDI in through a merger,
can also cause this to occur.

## Instrument Sends Data, but Doesn't Receive

The  instrument  may  not  be set to receive on the MIDI channel that it is
sending  on.   Are  your MIDI cables good?  Some sync cables look like MIDI
cables,  but  won't  work  properly  for MIDI.  Check that the synth's MIDI
receive  channel  is the same as its send channel, and that ECHO and FILTER
are set properly.

## MIDI Controllers Are Not Recorded

Have  you set the KCS to record controllers?  Does this instrument send and
receive  the controllers you're using?  Some early MIDI synths, such as the
Roland  Jupiter  6, won't send control changes over MIDI.  Others, like the
Prophet  600,  must have controllers enabled from the front panel each time
the synth is turned on.  Early DX7's sent aftertouch as controller 3.

## Sequencer and Drum Machine Go Out of Sync When Looping

This  can occur if the length of the sequence in Open mode or of track 1 in
Track  mode is not a multiple of the length of the drum box pattern.  Check
to  make sure that the sequence ends on the first step of a measure, rather
than step 96 or some other nearby value.

If  you do not use the ALIGN feature while recording you will almost always
end  the  recording  process a little before or after the end of a measure.
On  playback  each  loop  will  put the sequence further out of sync.  When
using  ALIGN,  you  must press the F10 key DURING the last measure that you
wish  to  record.   Pressing F10 a fraction of a beat into the next measure
will  force  the  program to continue recording for another entire measure,
even  if  you  do  not  play  any  notes.   Clicking on STOP or pressing F1
immediately stops recording and defeats the ALIGN feature.

If  a  drum box is synced to the program via MIDI, it may lose timing clock
information  if  too  much  MIDI  information  is being sent.  As the piece
progresses  the  drum  machine  will go further out of sync.  Does the drum
keep  sync  when  only  playing a few sequences?  Does it play better if no
sequences  with  PB, AT or CC events are running?  Select RUNNING STATUS on
the  SET  OPTIONS  screen  may help.  Other ways around this are to use the
drum  machine  as  the master, or to have the KCS play the drums instead of
sending time to the drum machine to play its own patterns.

## Synths Not Accepting Program Changes

Some synthesizers, for example Sequential's instruments, power up in a mode
in  which  they  do  not accept program changes via MIDI.  Your synthesizer
manual  should  contain  instructions  on  how  to make them accept program
changes.   Many instruments only accept a limited range of program numbers,
and reject all others.

## A Programmed Wait Does Not Occur

Sequences which call other sequences and use the WAIT feature should have a
DE  event  with  a time of zero for the last event.  If you do not do this,
you  will  encounter  problems  when  you try to chain this sequence into a
higher level control sequence.

## Noticeable Time Delays Occur When Sequences Start or Loop

The  computer  is  a  powerful,  but  finite  tool.  If you attempt to play
several  sequences  simultaneously,  which in turn each play a lot of notes
simultaneously,  the  computer  may  lag.   If  this occurs, rearrange your
sequence  structure  to reduce the amount of work the computer has to do in
one  time  step.  Edit the timing so that not as many sequence start events
occur at the same time.

Most instruments will react strangely if you try to send a patch change and
play  a  note in the same time step.  See the note on program changes under
Sequencer Plays Back, But Notes Are Garbled.

## Synthesizer Not Functioning in Multi-Timbral Mode

Some  multi-timbral  synthesizers (the Sixtrak and the CZ-101, for example)
power up in poly mode.  To use the multi-timbral feature, you must set them
to  mono  mode,  either through MIDI (see the MIDI chapter) or by following
the  instructions in your owner's manual.  The Sixtrak will always transmit
on  its basic channel, so you may need to use Local Control Off and ECHO to
record  in  real  time.   you  will  have  to use the edit screen to insert
program  changes  for  each channel recorded, as selecting a program on the
Sixtrak affects all six voices.

If a synth appears to be responding sluggishly in multi-timbral mode (short
staccato notes are lost or one note may have a rough attack), try using the
MIDI SLOW option on the SET OPTIONS screen.

# Chapter 15 - APPLICATION NOTES

This  Chapter  contains  tips  for making better use of certain instruments
with  the  Keyboard Controlled Sequencer.  Since new equipment continues to
be  released  at  an increasing rate, it is not possible to make a complete
listing  of  products  that  will  work with the program.  Many instruments
share  design  features, so the following information may be useful even if
you do not own the instruments discussed.

Casio CZ Series

The   Casio  CZ-101  is  a  programmable  eight  voice  polyphonic  digital
instrument.   It  can hold 32 programs (16 of these are presets and may not
be changed) or 48 programs if you buy the optional RAM cartridge.  Dr.  T's
also  has available a patch librarian/editor for the CZ, and RAM cartridges
pre-loaded with 64 of our favorite sounds.

The CZ-101 is very useful with the KCS because it can also function as four
mono  synths.   It  may  be  programmed  to  work on any four adjacent MIDI
channels,  with  each  channel  playing a different sound.  One drawback is
that there is only one output jack for the four different sounds.  You will
have to change DCA envelope levels to balance the relative volumes.

There  is  no  MIDI  thru  on  the  CZ  synthesizers, so you'll need a MIDI
junction  box  or else patch the CZ at the end of the MIDI chain.  The CZ's
are  not  sensitive  to velocity but respond well to variations in duration
because of their three 8 stage envelope generators.  you can put the CZ-101
in  mono  multi-timbral mode by pressing the SOLO button.  You can then use
the MIDI, cursor right, and up arrow buttons to select programs, or you can
select  programs from the sequencer.  Note in the multi-timbral mode the CZ
may  not  always  react  predictably.   Notes may ge chopped or missed.  If
doing  serious  recording,  you may wish to use a syncing device and record
each  Casio part in normal rather than in mono mode.  This will also depend
on  what  patches you are using and the value of the notes it is receiving.
Casio  has an "overlap" in its program calling.  A program on the Casio can
be specified with either of two numbers when selected from the sequencer.

KCS PG Value                    CZ Program

0 - 15                                  Presets 1 - 16
16 - 31                                         Presets 1 - 16  
32 - 47                                         Internal 1 - 16
48 -    63                                      Internal 1 - 16
64 - 79                                         Cartridge 1 - 16
80 - 95                                         Cartridge 1 - 16

The  CZ's  have  one MIDI controller conflict with other instruments.  MIDI
controller  6, which is assigned to the data slider on most instruments, is
used  for  a  tune  control  on  the CZ's, which can cause problems if data
slider information is accidentally sent to a CZ.  Another quirk of the CZ's
is  that  in Mono mode, pitch bend is only received on one channe - and not
the  basic  channel,  as you'd expect, but the most recently selected voice
channel, which is shown beside the letters VO in the Casio's MIDI display.

Korg  EX-800, Poly-800 and DW-6000

The  Poly-800  and  EX-800  are  similar,  with  the  newer  EX-800 being a
keyboardless  version  of  the  Poly-8OO  with  a  few more features.  Both
machines  send  on  channel  1 and may be set to receive on any channel and
both  may  select an external MIDI clock to drive their own sequencer along
with the KCS.  The Poly 800 sends its sequence data on channel 2.

The  DW-6OOO is a 6 voice synth with 64 programmable memories.  It features
a  digital  waveform  generator  system.  The DW-6000 will send and receive
note  data,  program  change,  pitch  bend, OSC mod, VCF mod, damper pedal,
podamento switch and system exclusive messages.

Korg  instruments  use  a modifed octal numbering system to arrange patches
into "banks", as described in the MIDI chapter.

These Korg instruments neither send or receive velocity but they do respond
to  MIDI volume information.  Standard MIDI controller assignments are used
except  for  mod  wheel and breath control (controllers 1 and 2), which are
used for joystack up and joystick down on the Korgs.

MIDI Clock and Merge Boxes

The  MIDI  interfaces  used  by  the Amiga and ST do not provide any inputs
other  than  MIDI  in.   If you want to sync to tape or to an external drum
machine,  you  need  a device that provides MIDI clock to the computer.  If
you  want  to be able to use the real time record features of the KCS while
syncing  to  tape, you need a device that can combine the MIDI clock signal
from  your drum machine or sync box with the MIDI output of your keyboards.
The  Yamaha  KX76 and KX88 keyboards do this automatically, and some others
may  as well.  Harmony Systems, JL Cooper and others make MIDI merge boxex,
which  merge  two  MIDI  inputs  into a single MIDI output.  Yamaha makes a
device  which  does  MIDI  merge and provides several additional continuous
controllers.   Any  of  these  will allow you to merge MIDI clock with MIDI
keyboard  data,  and newer models will simultaneously generate a MIDI clock
and merge it with data from one or more MIDI instruments.

MIDI Junction or Thru Boxes and MIDI Switcher Boxes

Many companies manufacture MIDI thru boxes.  They consist of one MIDI input
and  several  MIDI  outputs, and are useful if you have several instruments
with  no  MIDI thrus.  Kamlet, 360 Systems, JL Cooper, and others make MIDI
switcher  boxes.   These  are more elaborate boxes that allow you to choose
among  several MIDI inputs for each of 8 or 10 MIDI devices.  We find these
invaluable in our setups.

Ensoniq Mirage 

The  Mirage  samplwr  responds  to  vwlocity changes particularly well with
velocity  controlled ADSR's velocity sensitive oscillator mix, and keyboard
scaled  decay.   You  may  have several samples spread across the keyboard,
giving  the  impression  that  it is several instruments (although there is
only  one  audio  output).   You  can  balance  the volunle between the two
keyboard sides.  The instrument powers up in omni mode.

The  Mirage  Operating System Version 3 update adds a lot more MIDI control
to  the instrument which the KCS can address using CC events or single byte
messages.   Among  the  performance  enhancements  are  aftertouch,  breath
controller, and Local Control Off.  The Mirage can also be made to initiate
a  disk  load by sending it an appropriate program change command; see your
Mirage manual for details.

Ensoniq  ESQ1  

The  ESQl  is  a very powerful eight voice multi-timbral synthesizer, which
can receive on up to nine channels simultaneously when the instrument is in
multi  mode.   Channel  assignments  are  controlled by the ESQ1's internal
sequencer.   Since  each sequence on the iESQ1 can be selected from MIDI by
sending an appropriate song select command, it is possible to re-assign the
channel that the ESQ receives on from one instant to the next.

Since  voices  are  assigned  to  channel  on  an  "as needed" basis, it is
possible  to  play  up  to  eight voices on any of the nine channels at one
time,  without  worring about which channel has how many voices assigned to
it.  The keyboard sends release velocity through MIDI, though the ESQ won't
recognize  this information.  It is also possible to push any button on the
ESQ's front panel via system exclusive messages; see the version 2.0 update
documentation for details.

Yamaha KX76 and KX88 Master Keyboards

CAUTION:   KX76's  and  KX88's  can have problems when using the MIDI merge
feature  of  the  KCS.   If you patch a KX76 or 88 to receive data from the
KCS, and then send it on to the receiving synths, and the KX76 or 88 (or at
least  ours)  receives  too  much  MIDI data at one time, it will erase its
internal memory and go back to the state it was in when it was shipped from
the factory.  Beware of MIDI loops and length 0 sequences when using a KX76
of KX88 in this manner.

Yamaha RX11 and RX15 Drum Machines

The  RX11  features  several variations of the most essential drums.  There
are 8 snares, 3 kicks, 3 closed hats, 2 open hats, 2 cowbells, 2 claps, and
2  rimshots.   It  is  possible  to set the instrument select, note number,
volume,  pan,  and MIDI channel assignment for each drum from the KCS using
system  exclusive  messages;  the codes for doing this are contained in the
RX11 service manual.

One  problem  with  the  RX11  is  that it can not record when wynced to an
external  device,  either  through MIDI or the tape sync input; nor will it
send  a  MIDI clock or tape sync pulse while recording.  It also "hangs up"
and  refuses  to  accept  MIDI  information  for  about  two  seconds after
receiving  a  MIDI start command, if it is set to an empty pattern or song.
For  these  reasons,  it  is  best  to  ignore the RX11's pattern recording
features  and  use  it  strictly  as  a  drum  synthesizer,  with  the  KCS
controlling the drums via MIDI note commands.  In this case, set the RX11's
clock source to EXTERNAL.

The  RX15 is similar to the RX11, but has fewer features.  There are not as
many drums, fewer patterns and only two audio outputs.  Nor does it receive
the  system  exclusive  messages that the RX11 recognizes.  One problem the
RX15  has  when  syncing to MIDI clock is that occasionally, if it receives
too much data (such as note information intended for another instrument) it
will start to miss MIDI clocks.  This causes the drum machine to lose sync,
and  the  musician  to pull his hair out.  Try activating RUNNING STATUS on
the SET OPTIONS screen.

                          Appendix 1
                          
                      SERVICE AND SUPPORT
                      
This program and the associated documentation are copyright (C) 1986, 1987,
and  1988  by  Emile  Tobenfeld.   This program is licensed to be used on a
single  machie,  by  the  original  purchaser  only.   It may not be copied
without explicit written permission.

The diskette on which the program is furnished is warranted for ninety (90)
days from the date of delivery.  The program is not guaranteed to meet your
requirements,  and  operation  of  the  program  is  not  guaranteed  to be
uninterrupted  or error free.  In no event will Emile Tobenfeld or Dr.  T's
Music  Software be liable for any damages, including any lost savings, lost
profits,  or  other  incidental or consequential damages arising out of the
use  or  inability to use this program, even if we have been advised of the
possibility  of damages.  Dr.  T's Music Software and Emile Tobenfeld shall
not  be  responsible  for any damages claimed by any other party, resulting
from  the use or attempted use of this program.  All warranties implied are
Dr.   T's,  not  your  local  dealer.   If  problems  arise,  call Dr.  T's
directly.

Copy Protection and Backups

The  disk  containing  the  KCS  is copy protected, and must be inserted in
drive A:  on the Atari ST, or any disk drive on the Amiga, when running the
program  from  either the hard or floppy disk.  We regret the necessity for
copy  protection,  but experience has shown this to be the only way to deal
with unauthorized distribution of our programs.  Software piracy is a crime
and deprives your fellow artists of their rightful income.  Because of this
problem,  we  are  much  more  fun  to  deal with if we have your completed
warranty card in our hands when you call for technical support.

Backup  disks  may be obtained from Dr.  T's for $15, when you send in your
warranty  registration  card.   You  must  include  either  your  completed
warranty  card  or  your  diskette  serial  number  and a copy of the sales
receipt.

When  calling  Dr.   T's for customer service, there are a number of things
that  you can do to help us help you, which can also save you money on your
long  distance  bill.   Here  is  a  check list of things to have ready when
calling Dr.  T's.

1. Your diskette regstration number
2. Your manual
3. Computer turned on and KCS booted
4. Any data related to the problem
5. Information on your computer's disk configuration, monitor type, printer
type, etc.
6. Paper and pencil

When  you  call  us,  we  will  walk  you  through  the program and ask you
questions  about  what  happens, so it is very important that you have this
material  at  hand when calling.  If you don't have this ready, we will ask
you  to  call  back  later  with  the  required  information.  After you've
completed  the  checklist, call us at (617) 244-1542 between 10 AM and 4 PM
Eastern Standard Time, Monday through Friday.

                           Appendix 2
                           
                  COMMAND KEY REFERENCE LISTS
                  
The next few pages contain reference lists of the keyboard functions on the
Track,  Open,  and  Song  mode  play  and record screens, and the step time
record  screen.   You  may  make  copies of these pages and keep the copies
close at hand when using the KCS, if you like.


                 TRACK MODE PLAY/RECORD SCREEN
                 
TRACK SELECT KEYS                               

1 - 9                   : Tracks 1 - 9                  
A - Z                   : Tracks 10 - 35        
Numeric 1 - 9           : Tracks 36 - 44                        
Numeric (               : Track 45                      
Nvmeric )               : Track 46                              
Numeric '               : Track 47
Numeric /               : Track 48                              
                                         
CONTROL PANEL

F1                      :EXIT
F2                      :RECORD
F10/SPACE               :PLAY
ESC                     :PAUSE
ENTER           :STOP
.                       :TEMPO UP
,                       :TEMPO DOWN
UNDO                    :RE-RECORD
?                       :ERASE TRK
:                       :CONTROLLERS
'                       :AFTERTOUCH
*                       :NOTE OFF VEL
;                       :MIDI MERGE
BACKSPACE               :ECHO
>                       :ECHO CHAN UP
<                       :ECHO CHAN DOWN
TAB                     :CUE
CRSR UP         :START CUE UP
CRSR DOWN               :START CUE DOWN
CRSR RIGHT      :END CUE UP
CRSR LEFT               :END CUE DOWN

LIVE EDIT

RIGHT SHIFT     :DELETES NOTES
CONTROL         :RESTORE NOTES
ALTERNATE               :VEL = 127
LEFT SHIFT      :VEL = 64
ALT/L.SHIFT     :VEL = 16

AMIGA KEY SUBSTITUTIONS

Atari ST                Amiga

UNDO                    :Right AMIGA key
INSERT          :Right ALT key
CLR HOME                :Shift-DEL
Numeric (               :Numeric -
Numeric )      :Shift-Numeric -
Numeric *               :Numeric .
Numeric /      :Shift-Numeric .

The four numeric key substitutions apply to the Amiga 1000 only.

TRACK OPTIONS

F3                      :MUTE/UNMUTE
F4                      :SET PUNCH
F5                      :CLEAR PUNCH
F6                      :ERASE PUNCH
F7                      :COPY PUNCH
F8                      :SOLO
F9                      :SET SWITCH
F11                     :SHIFT +1
F12            :SHIFT +3
F13            :SHIFT +12
F14            :SHIFT -1
F15            :SHIFT -3
F16            :SHIFT -12
F17            :EDIT SELECT
F18            :SWAP
F20            :NAME
CLR HOME       :ERASE
ALTERNATE      :MUTE ONLY
SHIFT          :UNMUTE ONLY

HIDDEN CONTROLS

DELETE          :ALIGN
RETURN         :TRACK SWITCH
\              :TRACK MERGE
|              :AUTO-RECORD
%              :VISIBLE METRONOME
$              :AUDIBLE METRONOME
!              :ALL TRACKS TO SEQ
^              :TEMPO CHG BY RATIO
&              :STEP DELAY
#              :MUTE ALL TRACKS
@              :UNMUTE ALL TRACKS
*              :EDIT/PUNCH BUTTONS
-              :SILENT PUNCH
/              :CUE LOOP
]              :CUE BACK 1 BAR
[              :CUE BACK 2 BARS
'              :CUE BACK 4 BARS
=              :CUE BACK 8 BARS
INSERT         :CUE MOVE AMOUNT
(              :TRACK LOOP
)              :FILTER
_              :FILTER CHAN DOWN
+              :FILTER CHAN UP
F19            :VELOCITY PEDAL
              :PANIC BUTTON
0              :SET OPTIONS

            
                   SONG MODE PLAY SCREEN
                

SEGMENT KEYS                            

1 - 9                   : Segments 1 - 9                
A - Z                   : Segments 10 - 35      
Numeric 1 - 9           : Segments 36 - 44                      
Numeric (               : Segment 45                    
Nvmeric )               : Segment 46                            
Numeric *               : Segment 47
Numeric /               : Segment 48                            
                                         

SEGMENT OPTIONS

F4                      :PLAY IMMEDIATE
F5                      :PLAY AFTER CURRENT
F6                      :SET LOOP START
F7                      :SET LOOP END

CHANNEL KEYS

1 - 9                   : Channels 1 - 9                
A - G                   : Channels 10 - 16      


CHANNEL OPTIONS

F3                      :MUTE/UNMUTE
F8                      :SOLO
F9                      :SET SWITCH


HIDDEN CONTROLS

F1                      :EXIT 
LEFT MOUSE     :EXIT        
F10/SPACE      :PLAY       
'              :TEMPO UP    
,              :TEMPO DOWN       
UNDO           :STOP             
RETURN         :CHANNEL SWITCH   
TAB            :CUE       
CRSR UP        :CUE POINT UP
CRSR DOWN      :CUE POINT DOWN
INSERT         :CUE MOVE AMOUNT
CRSR LEFT      :LAST SEGMENT     
CRSR RIGHT     :NEXT SEGMENT
F2             :LOOP CURRENT SEGMENT
\              :LOOP ON/OFF   
;              :MIDI MERGE     
BACKSPACE      :ECHO
>              :ECHO CHAN UP
<               :ECHO CHAN DOWNT
0              :SET OPTIONS
              :PANIC BUTTON

============================================================================
The Dr. T's Keyboard Controlled Sequencer docs are brought to you by    
Gorila /2000 .



