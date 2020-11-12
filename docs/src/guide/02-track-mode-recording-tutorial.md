# CHAPTER 2 - Track Mode Recording Tutorial

[[toc]]

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

