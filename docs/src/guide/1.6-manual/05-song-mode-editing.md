# CHAPTER 5 - SONG MODE EDITING

[[toc]]

Song  mode provides a simple environment for creating longer pieces (songs)
by  chaining  Open mode sequences.  This task can be accomplished much more
generally   with   control  sequences  in  Open  mode,  but  Song  mode  is
conceptually  much  simpler.   You  may want to create a few pieces in Song
mode  before  you attempt to use control sequences.  You may also choose to
do  all  of  your  sequence  chaining  in Song mode.  Song mode is intended
primarily for use with multi-instrument sequences created in Track mode, as
only one sequence can play at any time.  There is certainly no limit to the
complexity of the music that you can create using Track mode and Song mode.

The  Song mode edit screen allows you to create songs that consist of up to
100  linked  segments.  For each segment you can specify the sequence to be
played,  a  tempo change, a delay, a pitch transposition, and the number of
times the segment is to repeat.  You can also specify program and/or volume
changes  on  any  or  all of the 16 MIDI channels for each segment.  Tempo,
program  and  volume  change  entries are optional; if you do not specify a
tempo  change for a segment, it will play at the current tempo.  No program
or  volume  changes  will be made by the program on channels for which they
have not been specified.  Sequences entered in Song mode should not contain
PRIMARY, ST, XX, XL, MS, or US events, as these are ignored in Song mode.

Entering Segments

Song  segments  are  entered  into an event list that is similar to the one
used  in  Track  and  Open modes.  Although the headings are different, the
procedure  for  is entry and edit of individual segments is similar to that
described  in Chapter 4.  As in the other modes, any of the edit options on
the  right  side  of the screen can be selected by clicking on that option,
and  songs can be selected with the select boxes in the lower right corner.
The fields used in the Song mode event list are:

SEG:   A  number  supplied  by  the  program indicating the position of the
segment  in  the  list.   SEG is used to specify a range of segments in the
song when you are using the various edit options.

SEQ:   The  number  <1 - 9, A - X, or 00 - 92) of the sequence to be paayed
for  the segment.  Frequently, this will be the only entry that you need to
make for a segment.

NAME: The name of the sequence to be played.  This is supplied by the
program, and cannot be changed in Song mode.

TEMPO:   The  tempo  at  which  the  segment  is  to be played.  If this is
omitted,  the segment will play at the previously established tempo.  Tempo
changes  will have no effect unless you are using the internl clock, though
it is used in calculations when synchronizing to an external clock.

DELAY:   The number of time steps that you wish the program to pause before
playing the segment.  Most of the time, you will probably not need to enter
a DELAY.

TRN:   The  number of half steps that you wish the segment to be transposed
in  pitch.   If  a drum channel has been defined on the SET OPTIONS screen,
notes on that channel will not be transposed.

REP:  The number of times that you wish the segment to repeat.  If you want
the segment to play only once, you do not need to enter this field.

When  you  first  enter  Song  mode,  the edit screen will come up, and the
cursor  will  be under SEQ on the first line.  To enter a segment, type the
desired  sequence  number, and any other fields that you wish to enter, and
press  RETURN.   You can use the TAB and SHlFT-TAB keys to move forward and
back  along  a  line.   The  DELAY and TRN fields default to 0, and the REP
field  to  1,  so  if  you  want  your sequence to play once vwih no delay,
transposition, or tempo change, you need only enter the sequence number.

Here is a shot of the Song mode edit screen, with a representative song
in ihc event list:

These  seven  segments  illustrate all of the options available on the left
side  of  the screen.  The first segment entered was sequence 1, at a tempo
of  90  BPN.   If  no tempo had been entered, the segment would play at the
previously set tempo, shown at the bottom of the play screen.  Tempo change
events  within  the  sequences  themselves  will change the tempo from that
programmed on the Song mode edit screen.

The  second  segment  plays  sequence  F  with  the tempo increased to 120.
Sequences  3  and  4 are each played once at the same tempo.  Sequence 5 is
then  played twice at a tempo of 140, and then twice again transposed up 12
half steps (an octave).  Finally, sequence 6 plays at a tempo of 120.  This
segment  does  not start until 48 time steps (half a measure at the default
setting) after the previous segment ends.

To  play  the  song,  click  the right mouse button, and the Song mode play
screen  will come up.  Click the right mouse button or press Fl to play the
song.  The Song mode play scrcen is described in detail in Chapter 8.

Editing Single Segments

Segments  are  edited  using  the same procedure used in the Track and Open
mode edit screens.  Move the edit cursor to the line that you wish to edit,
and  click  the  mouse.   Type in any desired changes, and press RETURN, or
press UNDO to cancel any changes.  If you want to remove a tempo, repeat or
delay  specification,  just  type  over  it with blanks.  You can delete an
entire  segment  by pressing the DELETE key while the cursor is on the line
you wish to delete.

If  you  want  to add segments to a song, click under SEQ on the line below
the  last segment shown.  If your song is more than a full screen long, you
can  use  the  scroll arrows to move up and down.  A song can contain up to
100 segments.

Song Mode Editing Options

The  Song  mode edit options, on the right side of the screen, are selected
by  clicking  the  mouse  as  in  the other modes.  Most of the options are
similar  to  corresponding options on the Open and Track mode edit screens,
described in Chapter 4.

Name

The  song  name  is 60 characters long, and stretches across the top of the
screen.  Clicking on NAME, or anywhere on the line, will move the cursor to
this line.  Type in the desired name and press RETURN.

Text and Map

The  TEXT  option  provides  access to the KCS's comment text area, and MAP
displays  information  about  every  active track, sequence, and song.  See
Chapter 4 for more on these options.

Prog/Vol Changes

You can specify program and/or volume changes for any or all of the 16 MIDI
channels  to  be sent before a segment is started.  Move the edit cursor to
the  line  containing  the segment that you want to insert changes for, and
then  click  the mouse on PROG/VOL CHANGES on the right side of the screen.
An edit window with data fields for MIDI program and volume change commands
on  all  16  channels will appear.  The segment number will be displayed at
the top of the window.

Data  is  entered  in  the usual manner for edit windows.  MIDI program and
volume  numbers  range  from 0 - 127, though not all instruments respond to
MIDI  volume changes and most instruments do not use all 128 patch numbers.
Different  instrumens  also  use  different  patch numbering systems.  MIDI
patch  number 0 will for example, call up patch off on an Oberheim Matrix 6,
patch  1  on Yamaha instruments, preset 1 on a CZ-10l, and patch 11 on Korg
instruments.   In  general  when  you  have  difficulties  interfacing MIDI
devices,  the  Doctor's  precription is REXMAN (Relax, EXperiment, and read
your owner's MANuals).

The  program and volume changes will be sent before the selected segment in
played.   No  program  or  volume information will be sent for channels for
which no data was entered.

Insert and Delete

Clicking on INSERT or pressing the INSERT key will open up a blank line, as
in  the  other  modes.  Type in the new segments pressing RETURN after each
one,  or UNDO after any mistakes.  Click the m*ouse on a new line to cancel
INSERT.

Pressing the DELETE key will delete the segment under the cursor.

Copy Song to Song and Copy Song to Sequence

COPY  SONG TO SONG lets you copy the current song to the first unused song.
COPY  SONG  TO  SEQ  lets you copy the segment list to an Open mode control
sequence.   Open  mode control sequences, described in Chapter 4, provide a
more  general way to arrange your sequences into songs.  If you decide that
your  song  needs  some more parts, you may want to use Copy Song to Seq to
get  the  song  into  Open  mode,  and then add more parts using overdub or
record  with  cue.   Copying  a  song to a sequence is also a good starting
point  for  understanding  the  structure of control sequences.  you should
remember  that  you  cannot  go  the  other  way; there is no way to copy a
control sequence to a song.

Append and Delete Song

You  can append another song to the current song or delete an unwanted song
from memory by clicking on APPEND or DELETE SONG.  Dialog boxes will prompt
for the song to append or delete.

Song to All Tracks

Clicking  on  this  option  will  delete all tracks currently in Track mode
memory  and  place  the current song in all tracks by copying each sequence
used  in the song to all tracks.  This is useful for overdubbing solo parts
or  controllers  over  an  entire  song:   but  makes editing the song more
difficult.

Since  coping  a  song  to all tracks requires quite a bit of the computers
memory  for  work space, it is possible that you may get an "out of memory"
message when doing this with a long song.

Other Options 

The  remaining  options  on  the Song mode edit screen are identical to the
coresponding  options  in  Open and Track modes.  See Chapters 4, 10 and 11
for  more  details  on PLAY, LOAD/SAVE, SET OPTIONS, OPEN MODE, TRACK MODE,
and QUIT.