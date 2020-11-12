# Chapter 14 - TROUBLESHOOTING

[[toc]]

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