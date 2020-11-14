# Chapter 1 - Getting Started

[[toc]]

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
