# Chapter 7 - OPEN MODE PLAY/RECORD

[[toc]]

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