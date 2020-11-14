# Chapter 6 - TRACK MODE PLAY/RECORD

[[toc]]

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