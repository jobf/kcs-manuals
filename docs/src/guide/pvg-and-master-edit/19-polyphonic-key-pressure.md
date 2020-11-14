# Chapter 19 - Polyphonic Key Pressure

The Level II KCS allows recording, playback and editing of polyphonic key pressure events.

While poly key pressure is not a recent addition to the MIDI spec, it has been almost universally ignored until recently.

Two instruments recently introduced by Ensoniq send an independent key pressure value for each note being held down, and the Kurzweil MIDIboard and the late Prophet TS from Sequential also send polyphonic key pressure.

Recording of poly key pressure is enabled by turning on the AFTERTOUCH button on the play/record screen or the Set Options page.

On the edit screen, polyphonic key pressure events have a type of PK followed by a MIDI note value in the note column and a key pressure value in the velocity column.

    MSR-ST    EVNT    TIME    CH    TYP    NOTE    VEL
    1-  1     1       0       1     PK     C 3     0
    1-  1     2       0       1     PK     C 3     1
    1-  1     3       0       1     PK     C 3     3
    1-  2     4       1       1     PK     C 3     5
    1-  2     5       0       1     PK     C 3     7
    1-  3     6       1       1     PK     C 3     12
    1-  3     7       0       1     PK     C 3     18
    1-  4     8       1       1     PK     C 3     22
    1-  5     9       1       1     PK     C 3     29

Individual PK events are edited in the same manner as note off events.

The only bulk operations affecting PK events are Erase Controllers from the Transpose page, and the Split or Erase options from the Controllers page of the Master Editor. 

Here endeth PVG docs. Further, deponent sayeth not. 