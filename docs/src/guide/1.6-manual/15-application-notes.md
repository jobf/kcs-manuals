# Chapter 15 - APPLICATION NOTES

[[toc]]

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



