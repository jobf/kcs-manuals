# Chapter 13 - TIPS FOR ADVANCED USERS

[[toc]]

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
