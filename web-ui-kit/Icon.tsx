'use client';
import { CSSProperties } from 'react';

export type IconName = string;

// Each value is an array of SVG <path d="..."> strings (24×24 viewBox, stroke-based)
const ICONS: Record<string, string[]> = {

  /* ── Navigation ── */
  'house.fill':       ['M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', 'M9 22V12h6v10'],
  'magnifyingglass':  ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  'person.fill':      ['M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2', 'M12 11a4 4 0 100-8 4 4 0 000 8z'],
  'person.2.fill':    ['M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', 'M9 11a4 4 0 100-8 4 4 0 000 8z', 'M23 21v-2a4 4 0 00-3-3.87', 'M16 3.13a4 4 0 010 7.75'],
  'person.3.fill':    ['M1 18c0-2.21 3.58-4 8-4s8 1.79 8 4', 'M13 7a4 4 0 11-8 0 4 4 0 018 0', 'M23 18c0-1.66-2.69-3-6-3', 'M20 4a3 3 0 010 6'],
  'map.fill':         ['M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4', 'M8 2v16', 'M16 6v16'],
  'location.fill':    ['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z', 'M12 13a3 3 0 100-6 3 3 0 000 6z'],
  'arrow.left':       ['M19 12H5', 'M12 19l-7-7 7-7'],
  'arrow.right':      ['M5 12h14', 'M12 5l7 7-7 7'],
  'arrow.up':         ['M12 19V5', 'M5 12l7-7 7 7'],
  'arrow.down':       ['M12 5v14', 'M19 12l-7 7-7-7'],
  'chevron.right':    ['M9 18l6-6-6-6'],
  'chevron.left':     ['M15 18l-6-6 6-6'],
  'chevron.up':       ['M18 15l-6-6-6 6'],
  'chevron.down':     ['M6 9l6 6 6-6'],
  'line.3.horizontal':['M3 12h18', 'M3 6h18', 'M3 18h18'],

  /* ── Actions ── */
  'plus':             ['M12 5v14', 'M5 12h14'],
  'plus.circle':      ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 8v8', 'M8 12h8'],
  'minus':            ['M5 12h14'],
  'minus.circle':     ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M8 12h8'],
  'xmark':            ['M18 6L6 18', 'M6 6l12 12'],
  'xmark.circle':     ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M15 9l-6 6', 'M9 9l6 6'],
  'checkmark':        ['M5 13l4 4L19 7'],
  'checkmark.circle': ['M22 11.08V12a10 10 0 11-5.93-9.14', 'M22 4L12 14.01l-3-3'],
  'pencil':           ['M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7', 'M18.5 2.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L18.5 2.5z'],
  'trash':            ['M3 6h18', 'M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2'],
  'square.and.arrow.up':['M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8', 'M16 6l-4-4-4 4', 'M12 2v13'],
  'square.and.arrow.down':['M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8', 'M8 12l4 4 4-4', 'M12 2v13'],
  'bookmark':         ['M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z'],
  'bookmark.fill':    ['M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z'],
  'heart':            ['M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'],
  'star':             ['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'],
  'star.fill':        ['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'],
  'link':             ['M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'],
  'paperclip':        ['M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48'],
  'scissors':         ['M6 9a3 3 0 100-6 3 3 0 000 6z', 'M6 15a3 3 0 100 6 3 3 0 000-6z', 'M20 4L8.12 15.88', 'M14.47 14.48L20 20', 'M8.12 8.12L12 12'],
  'wand.and.rays':    ['M15 4V2', 'M15 16v-2', 'M8 9H2', 'M20 9h-2', 'M17.8 11.8L19 13', 'M15 9h0', 'M17.8 6.2L19 5', 'M3 21L12 12'],
  'sparkles':         ['M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z', 'M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3z', 'M19 13l.5 1.5 1.5.5-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13z'],
  'arrow.clockwise':  ['M23 4v6h-6', 'M20.49 15a9 9 0 11-2.12-9.36L23 10'],
  'arrow.counterclockwise':['M1 4v6h6', 'M3.51 9a9 9 0 1014.85-3.36L23 10... M3.51 9A9 9 0 103.36 14.85'],
  'slider.horizontal.3':['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M1 14h6', 'M9 8h6', 'M17 16h6'],

  /* ── Content ── */
  'doc.text':         ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'],
  'doc.fill':         ['M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', 'M14 2v6h6'],
  'folder.fill':      ['M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'],
  'photo':            ['M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z', 'M12 17a4 4 0 100-8 4 4 0 000 8z'],
  'camera.fill':      ['M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z', 'M12 17a4 4 0 100-8 4 4 0 000 8z'],
  'calendar':         ['M3 4h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z', 'M1 10h22', 'M8 2v4', 'M16 2v4'],
  'clock':            ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 6v6l4 2'],
  'timer':            ['M10 2h4', 'M12 14a4 4 0 100-8 4 4 0 000 8z... M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 6v6l4 2'],
  'chart.bar.fill':   ['M12 20V10', 'M18 20V4', 'M6 20v-4'],
  'list.bullet':      ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
  'text.alignleft':   ['M17 10H3', 'M21 6H3', 'M21 14H3', 'M17 18H3'],
  'square.grid.2x2':  ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],

  /* ── Communication ── */
  'envelope.fill':    ['M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6l-10 7L2 6'],
  'phone.fill':       ['M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z'],
  'message.fill':     ['M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'],
  'bell.fill':        ['M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 01-3.46 0'],
  'bell.slash':       ['M13.73 21a2 2 0 01-3.46 0', 'M18.63 13A17.89 17.89 0 0118 8', 'M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14', 'M18 8a6 6 0 00-9.33-5', 'M1 1l22 22'],
  'mic.fill':         ['M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z', 'M19 10v2a7 7 0 01-14 0v-2', 'M12 19v4', 'M8 23h8'],
  'mic.slash':        ['M1 1l22 22', 'M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6', 'M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23', 'M12 19v4', 'M8 23h8'],
  'speaker.fill':     ['M11 5L6 9H2v6h4l5 4V5z', 'M19.07 4.93a10 10 0 010 14.14', 'M15.54 8.46a5 5 0 010 7.07'],
  'speaker.slash':    ['M11 5L6 9H2v6h4l5 4V5z', 'M23 9l-6 6', 'M17 9l6 6'],
  'headphones':       ['M3 18v-6a9 9 0 0118 0v6', 'M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z', 'M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'],

  /* ── Commerce ── */
  'bag':              ['M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z', 'M3 6h18', 'M16 10a4 4 0 01-8 0'],
  'bag.fill':         ['M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z', 'M3 6h18', 'M16 10a4 4 0 01-8 0'],
  'cart.fill':        ['M9 22a1 1 0 100-2 1 1 0 000 2z', 'M20 22a1 1 0 100-2 1 1 0 000 2z', 'M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6'],
  'creditcard.fill':  ['M1 4h22v16H1z', 'M1 10h22'],
  'tag.fill':         ['M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z', 'M7 7h.01'],
  'gift.fill':        ['M20 12v10H4V12', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z', 'M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z'],
  'rosette':          ['M12 15a3 3 0 100-6 3 3 0 000 6z', 'M12 22l-1.5-2.6-3 .4-.4-3L4.5 15.5l1.5-2.5L4.5 10.5l2.6-1.3.4-3 3 .4L12 4l1.5 2.6 3-.4.4 3 2.6 1.3-1.5 2.5 1.5 2.5-2.6 1.3-.4 3-3-.4L12 22z'],
  'trophy.fill':      ['M6 9H3.5a2.5 2.5 0 010-5H6', 'M18 9h2.5a2.5 2.5 0 000-5H18', 'M4 22h16', 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22', 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22', 'M18 2H6v7a6 6 0 0012 0V2z'],

  /* ── System / Security ── */
  'gearshape':        ['M12 15a3 3 0 100-6 3 3 0 000 6z', 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z'],
  'lock.fill':        ['M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z', 'M7 11V7a5 5 0 0110 0v4'],
  'lock.open.fill':   ['M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z', 'M7 11V7a5 5 0 019.9-1'],
  'shield.fill':      ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
  'shield.checkmark': ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'],
  'key.fill':         ['M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'],
  'eye':              ['M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z', 'M12 12a3 3 0 100-6 3 3 0 000 6z'],
  'eye.slash':        ['M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24', 'M1 1l22 22'],
  'wifi':             ['M5 12.55a11 11 0 0114.08 0', 'M1.42 9a16 16 0 0121.16 0', 'M8.53 16.11a6 6 0 016.95 0', 'M12 20h.01'],
  'wifi.slash':       ['M1 1l22 22', 'M16.72 11.06A10.94 10.94 0 0119 12.55', 'M5 12.55a11 11 0 0111.08-3.49', 'M10.71 5.05A16 16 0 0122.56 9', 'M1.42 9a15.91 15.91 0 014.7-2.88', 'M8.53 16.11a6 6 0 016.95 0', 'M12 20h.01'],
  'info.circle':      ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 8v4', 'M12 16h.01'],
  'questionmark.circle':['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3', 'M12 17h.01'],
  'exclamationmark.circle':['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 8v4', 'M12 16h.01'],
  'flame.fill':       ['M12 22c5 0 9-3.5 9-9 0-4.5-2-7-4.5-10C16 6 14 7.5 14 10c0-3-2-6-5-8-1 3.5-3 5-3 8.5C6 15 8.5 22 12 22z'],

  /* ── Media / Device ── */
  'play.fill':        ['M5 3l14 9-14 9V3z'],
  'pause.fill':       ['M6 19h4V5H6z', 'M14 19h4V5h-4z'],
  'stop.fill':        ['M6 6h12v12H6z'],
  'forward.fill':     ['M5 4l8 8-8 8V4z', 'M19 5v14'],
  'backward.fill':    ['M19 20L11 12l8-8v16z', 'M5 19V5'],
  'repeat':           ['M17 1l4 4-4 4', 'M3 11V9a4 4 0 014-4h14', 'M7 23l-4-4 4-4', 'M21 13v2a4 4 0 01-4 4H3'],
  'shuffle':          ['M16 3h5v5', 'M4 20L21 3', 'M21 16v5h-5', 'M15 15l6 6', 'M4 4l5 5'],
  'tv.fill':          ['M21 3H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z', 'M8 21h8', 'M12 17v4'],
  'display':          ['M20 3H4a1 1 0 00-1 1v13a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1z', 'M8 21h8', 'M12 17v4'],
  'iphone':           ['M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z', 'M12 18h.01'],
  'airplane':         ['M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'],

  /* ── Social ── */
  'hand.thumbsup':    ['M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z', 'M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3'],
  'hand.thumbsdown':  ['M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z', 'M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17'],
  'arrow.left.circle':['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M8 12h8', 'M12 8l-4 4 4 4'],

  /* ── Nature / Misc ── */
  'sun.max.fill':     ['M12 17a5 5 0 100-10 5 5 0 000 10z', 'M12 1v2', 'M12 21v2', 'M4.22 4.22l1.42 1.42', 'M18.36 18.36l1.42 1.42', 'M1 12h2', 'M21 12h2', 'M4.22 19.78l1.42-1.42', 'M18.36 5.64l1.42-1.42'],
  'moon.fill':        ['M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'],
  'cloud.fill':       ['M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z'],
  'bolt.fill':        ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
  'drop.fill':        ['M12 2.69l5.66 5.66a8 8 0 11-11.31 0z'],
  'snowflake':        ['M12 2v20', 'M2 12h20', 'M20 4L4 20', 'M4 4l16 16', 'M16 8l-4-4-4 4', 'M8 16l4 4 4-4', 'M4 8l4-4 4 4', 'M20 16l-4 4-4-4'],
  'leaf.fill':        ['M2 22c3.2-3.2 5.5-5.2 6.9-8.1C10.7 10.5 10 7.5 10 2c4.9.9 9 4 9 10 0 4.4-3.5 8-8 10z'],
};

export function Icon({
  name,
  size = 24,
  color = 'currentColor',
  style,
}: {
  name: IconName;
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  const paths = ICONS[name] ?? ['M12 12h.01'];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

// Expose all icon names for the gallery
export const ALL_ICONS = Object.keys(ICONS);

// Grouped by category for the gallery
export const ICON_CATEGORIES: Record<string, string[]> = {
  'Navigation':    ['house.fill','magnifyingglass','person.fill','person.2.fill','person.3.fill','map.fill','location.fill','arrow.left','arrow.right','arrow.up','arrow.down','chevron.right','chevron.left','chevron.up','chevron.down','line.3.horizontal'],
  'Actions':       ['plus','plus.circle','minus','minus.circle','xmark','xmark.circle','checkmark','checkmark.circle','pencil','trash','square.and.arrow.up','square.and.arrow.down','bookmark','bookmark.fill','heart','star','star.fill','link','paperclip','scissors','wand.and.rays','sparkles','arrow.clockwise','slider.horizontal.3'],
  'Content':       ['doc.text','doc.fill','folder.fill','photo','camera.fill','calendar','clock','chart.bar.fill','list.bullet','text.alignleft','square.grid.2x2'],
  'Communication': ['envelope.fill','phone.fill','message.fill','bell.fill','bell.slash','mic.fill','mic.slash','speaker.fill','speaker.slash','headphones'],
  'Commerce':      ['bag','bag.fill','cart.fill','creditcard.fill','tag.fill','gift.fill','rosette','trophy.fill'],
  'System':        ['gearshape','lock.fill','lock.open.fill','shield.fill','shield.checkmark','key.fill','eye','eye.slash','wifi','wifi.slash','info.circle','questionmark.circle','exclamationmark.circle','flame.fill'],
  'Media':         ['play.fill','pause.fill','stop.fill','forward.fill','backward.fill','repeat','shuffle','tv.fill','display','iphone','airplane'],
  'Social':        ['hand.thumbsup','hand.thumbsdown','arrow.left.circle'],
  'Nature':        ['sun.max.fill','moon.fill','cloud.fill','bolt.fill','drop.fill','snowflake','leaf.fill'],
};
