# Chapter 9 - STEP TIME RECORDING

[[toc]]

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