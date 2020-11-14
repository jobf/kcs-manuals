# Chapter 8 - Song Mode Play

[[toc]]

The Song mode play screen allows you to play songs created on the song mode
edit  screen described in Chapter 5.  You cannot record while in Song mode.
The  Song mode pIay screen is reached from the Song edit screen by clicking
on PLAY or pressing the right mouse button.

The following example shows the Song mode play screen as it might look
before a song is started:

The  Song  mode play screen has severl sections.  The top line has the song
number and title.  The bottom of the screen is used for status lines, as in
Open and Track modes.  Most of the rest of the screen is used for a list of
up  to  48 song segments.  A song can have up to 100 segments, but only the
first  48  can  be  seen on the play screen.  Each song segment shown has a
number  ,  and a segment key.  The segment keys are used to select segments
much  like  track  keys  can  be  used  to  select  tracks  in  Track mode.
Typewriter  keys 1 - 9 are used for segments 1 - 9, keys A - Z for segments
10  -  35,  and  keys on the numeric keypad for segments 36 - 48.  There is
also a set of segment/channel options, seleted with the function keys which
determine how the song is affected by selecting a segment.

Each  segment  plays  a  single  Open mode sequence.  The sequence key (for
primary sequences) or a two digit sequence number (for secondary sequences)
is  shown  in  the  SQ  column.  The sequence name is displayed in the NAME
column,  and the number of times the segment is to play is shown under REP.
Other information will appear in the REP column as the song is played.

The  right  edge of the screen displays the status of the 16 MIDI channels.
Each  channel  has  a channel number and a corresponding key (1 - 9 and A -
G).   Channels  can be soloed and muted, in the same way that tracks are in
Track mode.

## Playing the Song

The  song  is  started  by pressing FlO or clicking the right mouse button.
When  play  starts,  the  measure/step  counter  starts to count, and a red
musical  note  will  appear  in  the REP column for segment 1.  This symbol
indicates  the  segment currently playing.  If the segment is programmed to
play  more  than  once,  the number in the REP column will count down as it
plays.

## PAUSE and MIDI MERGE

The Song can be paused at any point by pressing the ESC key; pressing ESC a
second  time lets the song continue.  MIDI merging can be toggled using the
SEMICOLON  (;)  key.   PAUSE or MIDI MERGE will appear in red on the status
line if either of these functions are active.

See  the  chapters  on  the Track and Open mode play screens for details on
PAUSE and MIDI MERGE.

## Cueing and Single Segment Looping

A  song may also be started at an arbitrary cue point, just as in Track and
Open modes.  Pressing the TAB key stacts the song at the current cue point.
The  cue  point is moved forward or backward using the CURSOR UP and CURSOR
DOWN  keys,  and the cue point move amount is toggled between one and eight
measures  with the INSERT key.  See the chapters on the Track and Open mode
play screens for more details on cueing.

The F2 key will cause the current segment to loop indeinitely.  99L appears
under  REF to show looping, Pressing F2 again will cause the segment to end
after its current play.

## Segment/Channel Options

Song mode provides seven segment/channel options channel which allow you to
alter the playback of a song just as the track options discussed in Chapter
6  allow you to alter the playbach of individual tracks.  These options can
assist  you  in  composition by allowing you to hear sections of a piece in
different  contexts  and  instrunents  in different combinations.  They can
also be used to provide real time control in performance.

The  current segment or channel option is selected with one of the function
keys  F3  -  F9.   Pressing a segment or channel key will cause the current
option  to  be  applied  to  the  corresponding  segment  or  channel.  The
segment/channel   options  are  MUTE/UNMUTE,  PLAY  IMMEDIATE,  PLAY  AFTER
CURRENT, SET LOOP START, SET LOOP END, SOLO, and SET SWITCH.

The   MUTE/UNMUTE,  SOLO,  and  SET  SWITCH  options  are  similar  to  the
corresponding  options  in  Track  mode,  but  they  apply to MIDI channels
instead of tracks.  The PLAY IMMEDIATE, PLAY AFTER CURRENT, SET LOOP START,
and SET LOOP END options are unique to Song mode and apply to segments.

The current segment/channel option is displayed on the right end of the top
status line.  The default is PLAY IMMEDIATE, as shown in the screen example
on  the  last  page.   Only one segment option or one channel option may be
active at any time.

## MUTE, SOLO and SET SWITCH

The MUTE, SOLO, and SET SWITCH options are very similar
to the corresponding options in Track mode. MUTE is
selected with the F3 key, SOLO with F8, and SET SWITCH with F9. When one of
these options is active, keys 1 - 9 control channels 1 - 9, while keys A -
G control channels 10 - 16.

When  a  channel  is muted, MIDI data for that channel is not sent.  When a
channel  is  soloed,  only  data  for  that channel is sent.  When a switch
between  two  channels is set, the RETURN key alternately mutes one channel
and unmutes the other.  The words MUTE, SOLO, or SWIT will appear next to a
channel which is currently muted or soloed, or for which a switch is in the
process of being set.

See  the  chapter  on the Track mode play screen for more details on muting
soloing or switching.

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

Exit 

Press Fl or the left mouse button to exit to the Song mode edit screen.