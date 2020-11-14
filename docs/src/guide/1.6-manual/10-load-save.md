# Chapter 10 - LOAD/SAVE

[[toc]]

The  Atari ST and Amiga vergions of the KCS use six different types of disk
files  to  store  the  data  used  by  the program.  Each file has a unique
extension.  When you select LOAD/SAVE from one of the edit screens a dialog
box  or  edit window will ask whether you want to load or save a file, which
disk drive to use, and what file type is to be accessed.

After  selecting  a  drive (on the ST only) and file type, click on LOAD or
SAVE.   Another  dialog  box  will  display  a  directory of files with the
selected  extension  on  the current disk.  In the Atari version, files are
selected  in  the  window using the GEM protocols that are discussed in the
STs  docuentation.   In  the  Amiga version, a fairly self explanatory file
select window will appear.  After selecting a file name, click on CANCEL to
exit or OK to load or save the file.  You do not have to specify .ALL,.SEQ,
.ENV, etc.  as these extensions will be added by the program.

In  the  ST  version of the program, clicking on FORMAT will format a blank
disk  for  data  storage.   The  file  type  selected  is  irrelevant  when
formatting  a disk.  Dialog bexes will confirm your choice, and ask for the
disk  type.   (In  the  Amiga  version of the program, you may format disks
directly  from  the  WorkBench.)  Clicking  on  CANCEL  exits the LOAD/SAVE
screen.

## File Types

.ALL files contain all songs, sequences and tracks, plus the status of each
individual  track  and the contents of the text area, in memory at the time
the  file was saved.  ..  dtLL files can only be loaded or saved from Track
or  Open modes.  Loading a .ALL file will erase all data in the sequencer's
memory.

.SEQ files hold a single track or sequence.  These files can only be loaded
or  saved  from  Track  or Open mode.  The file saved will be the currently
selected  track  or sequence; when loaded, the file will be put in the next
available track or sequence, depending on the mode selected.

.TRK  files  hold all 48 tracks, plus their statuses.  Savng all tracks can
be done from any mode, but loading tracks can only be done from Track mode.

.SNG  files  hold a single song as wel1 as the sequences used in that song.
When  a .SNG file is loaded, each sequence is put in its original location,
unless  that  slot is already occupied, in which case the sequence is moved
to  the  first  empty  slot  and  the  song  is  changed to reflect the new
location.   This  allows  merging  multiple  songs into a single .ALL file.
Songs  can  only  be loaded or saved from Song mode, and the song loaded or
saved   is  the  currently  selected  song  or  the  next  available  song,
respectively.

A set of Open mode sequences that are not otherwise used in a song can be
saved and loaded as a group by creating a dummy song made up from a list of
the desired sequences. In this case, though, PRIMARY and ST events
contained in Open mode sequences will not be reassigned if that sequence is
already in use, so you will need to be careful to avoid such conflicts if
you use the dummy song method.

.ENV  files  are  environment  files,  and  contain  most of the parameters
diplayed in the SET OPTIONS edit window, as well as the time, duration, and
velocity  values  used in step time recording.  If a file named DEFAULT.ENV
is saved on the KCS program disk, this file will be loaded when the program
boots.

.ENV  files  are  also created automatical@y whenever you save a .ALL file.
When  a .ALL file is saved, the searches for a .ENV file with the same name
and loads that file as well.

## MIDI Files and File Formats

For Atari ST owners who would like to use KCS 
sequence files  with  other  sequencers  that support the MIDI sequence
file
format, we  have  written a utility program entitled CONVERT.PRG,    which
will convert KCS  sequence  files to MIDI standard files, and vice versa.
(An
Amiga  version  will  be  available shortly.) The MIDI sequence file
fornhat is an emerging standard, which has been unofficially adopted by
many music software publishers, including Dr. T's, Opcode, Intelligent
Music, Passport, and others. Instructions for the use of this program are
contained in a README file, which is included with the program. CONVERT.PRG
may be found on many MIDI related bulletin boards, or it may be obtained
directly from Dr. T's for a nominal fee.

For advanced computer musicians who would like to write programs that can
exchange files with the KCS, the file formats for the .ALL, .SEQ, .SNG, and
.TRK file types are available for a nominal charge to cover printing and
shipping. Contact us for more information.

## Caveats

One  point  to  be  aware of when saving ,ALL or other long files is that a
computer with 1 meg or more of memory can hold many more notes than can fit
on  a  single disk.  A double sided disk can hold about 120000 notes, and a
single  sided  disk (on the ST only) only holds about half this number.  If
you  somehow  find yourself with more notes than will fit on a single disk,
you  will  have to save some individual sequences or songs then delete them
and save the remaining data in a .ALL file.

CAUTION:  With the exception of the DEFAULT.ENV file mentioned earlier, you
should  NEVER  save  your  data  files on the KCS program disk!  This could
cause  conflicts  with  the  program,'s copy protection, which will make it
impossible  to  load  the  program.   The  write protect tab on the program
diskette  should be left open at all times except when saving a DEFAULT.ENV
file.