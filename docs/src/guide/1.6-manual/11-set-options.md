# Chapter 11- SET OPTIONS

[[toc]]

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