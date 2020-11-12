# Chapter 12 - MIDI

[[toc]]

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