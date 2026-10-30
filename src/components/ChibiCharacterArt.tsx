import React from 'react';
import { CharacterId, CHARACTERS } from '../data/rezeroData';

interface ChibiCharacterArtProps {
  characterId: CharacterId;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZE_MAP = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-36 h-36',
  xl: 'w-44 h-44',
};

/**
 * Transparent-background Q-version (Chibi) Character Art component.
 * Renders all 30 Re:Zero characters with bespoke illustrations and trait-driven Q-chibi SVG cutouts.
 */
export const ChibiCharacterArt: React.FC<ChibiCharacterArtProps> = ({
  characterId,
  className = '',
  size = 'lg',
}) => {
  const character = CHARACTERS[characterId];

  return (
    <div
      className={`relative select-none flex items-center justify-center ${SIZE_MAP[size]} ${className}`}
      title={`${character.name} (${character.title})`}
    >
      {/* Subtle ambient glow behind transparent character */}
      <div
        className="absolute inset-2 rounded-full blur-xl opacity-25 pointer-events-none transition-all duration-500"
        style={{ background: character.themeColor }}
      />

      {/* Transparent background Q-version Chibi SVG illustration */}
      <ChibiSvgCutout characterId={characterId} />
    </div>
  );
};

const ChibiSvgCutout: React.FC<{ characterId: CharacterId }> = ({ characterId }) => {
  switch (characterId) {
    case 'emilia':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(124,58,237,0.18)]">
          <path d="M48 85 C35 130 38 185 55 205 L145 205 C162 185 165 130 152 85 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M68 138 L52 198 L148 198 L132 138 Z" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="3" />
          <path d="M85 138 L80 198 L120 198 L115 138 Z" fill="#A855F7" />
          <circle cx="100" cy="146" r="6" fill="#10B981" stroke="#FEF08A" strokeWidth="2.5" />
          <path d="M40 92 L58 84 L55 102 Z" fill="#FDE2E4" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M160 92 L142 84 L145 102 Z" fill="#FDE2E4" stroke="#E2E8F0" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="46" ry="42" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="105" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="105" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="95" rx="9" ry="11" fill="#6D28D9" />
          <ellipse cx="80" cy="93" rx="5" ry="6" fill="#C084FC" />
          <circle cx="77" cy="89" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="95" rx="9" ry="11" fill="#6D28D9" />
          <ellipse cx="120" cy="93" rx="5" ry="6" fill="#C084FC" />
          <circle cx="117" cy="89" r="3" fill="#FFFFFF" />
          <path d="M95 112 Q100 117 105 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 85 C50 48 150 48 150 85 C135 68 118 82 100 66 C82 82 65 68 50 85 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
          <g transform="translate(138, 62)">
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="4" fill="#DDD6FE" />
          </g>
        </svg>
      );

    case 'rem':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(37,99,235,0.2)]">
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M76 138 L66 198 L134 198 L124 138 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M90 144 L100 150 L110 144 L108 156 L100 152 L92 156 Z" fill="#F43F5E" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.6" />
          <ellipse cx="128" cy="106" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.6" />
          <ellipse cx="120" cy="95" rx="9" ry="11" fill="#0284C7" />
          <ellipse cx="120" cy="93" rx="5.5" ry="6.5" fill="#38BDF8" />
          <circle cx="117" cy="89" r="3" fill="#FFFFFF" />
          <path d="M95 112 Q100 118 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M52 92 C48 46 148 46 148 92 C142 74 126 70 112 76 C105 95 88 112 58 106 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="3" />
          <path d="M60 56 Q100 42 140 56" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
          <rect x="122" y="68" width="14" height="6" rx="2" fill="#F472B6" transform="rotate(-12 122 68)" />
        </svg>
      );

    case 'ram':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(225,29,72,0.2)]">
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M76 138 L66 198 L134 198 L124 138 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M90 144 L100 150 L110 144 L108 156 L100 152 L92 156 Z" fill="#FB7185" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="80" cy="95" rx="9" ry="10" fill="#E11D48" />
          <ellipse cx="80" cy="93" rx="5.5" ry="6" fill="#FDA4AF" />
          <circle cx="77" cy="89" r="3" fill="#FFFFFF" />
          <path d="M70 81 L88 85" stroke="#881337" strokeWidth="3" strokeLinecap="round" />
          <path d="M95 113 L105 111" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M148 92 C152 46 52 46 52 92 C58 74 74 70 88 76 C95 95 112 112 142 106 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="3" />
          <path d="M60 56 Q100 42 140 56" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
          <rect x="64" y="68" width="14" height="6" rx="2" fill="#38BDF8" transform="rotate(12 64 68)" />
        </svg>
      );

    case 'beatrice':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(217,119,6,0.2)]">
          <path d="M36 90 C22 125 25 175 42 195 C55 180 58 135 54 90 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <path d="M164 90 C178 125 175 175 158 195 C145 180 142 135 146 90 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <path d="M62 138 L44 198 L156 198 L138 138 Z" fill="#BE185D" stroke="#831843" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#FDF2F8" />
          <ellipse cx="100" cy="96" rx="44" ry="40" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="80" cy="96" rx="9" ry="10" fill="#0284C7" />
          <path d="M75 96 L85 96 M80 91 L80 101" stroke="#FDE047" strokeWidth="2.5" />
          <ellipse cx="120" cy="96" rx="9" ry="10" fill="#0284C7" />
          <path d="M115 96 L125 96 M120 91 L120 101" stroke="#FDE047" strokeWidth="2.5" />
          <path d="M70 82 L88 86" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M130 82 L112 86" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M96 113 Q100 110 104 113" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M52 84 C52 50 148 50 148 84 C132 70 115 78 100 68 C85 78 68 70 52 84 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <path d="M84 52 L88 34 L100 44 L112 34 L116 52 Z" fill="#F43F5E" stroke="#FDE047" strokeWidth="2.5" />
        </svg>
      );

    case 'echidna':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.22)]">
          <path d="M46 85 C34 135 38 185 52 204 L148 204 C162 185 166 135 154 85 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <path d="M88 138 L100 165 L112 138 Z" fill="#F8FAFC" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <path d="M68 83 L88 85" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" />
          <path d="M132 83 L112 85" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8.5" ry="10" fill="#0F172A" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="10" fill="#0F172A" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M93 111 Q100 118 108 110" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 82 100 66 C82 82 65 68 50 86 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M52 62 L38 48 L46 66 L36 76 L54 70 Z" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
        </svg>
      );

    case 'reinhard':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(220,38,38,0.2)]">
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M92 138 L92 198 L108 198 L108 138 Z" fill="#1E3A8A" />
          <circle cx="70" cy="144" r="7" fill="#FBBF24" />
          <circle cx="130" cy="144" r="7" fill="#FBBF24" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="80" cy="95" rx="8.5" ry="10" fill="#2563EB" />
          <circle cx="77" cy="91" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="95" rx="8.5" ry="10" fill="#2563EB" />
          <circle cx="117" cy="91" r="3" fill="#FFFFFF" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 86 L56 48 L78 60 L100 40 L122 60 L144 48 L154 86 C136 68 118 78 100 66 C82 78 64 68 46 86 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="3" />
        </svg>
      );

    case 'subaru_envy':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(234,88,12,0.2)]">
          <path d="M62 138 L48 198 L152 198 L138 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M62 138 L52 185 L68 185 L74 138 Z" fill="#F97316" />
          <path d="M138 138 L148 185 L132 185 L126 138 Z" fill="#F97316" />
          <path d="M86 138 L100 165 L114 138 Z" fill="#FFFFFF" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <path d="M70 82 L88 87" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <path d="M130 82 L112 87" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8" ry="9" fill="#451A03" />
          <circle cx="78" cy="93" r="2.5" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8" ry="9" fill="#451A03" />
          <circle cx="118" cy="93" r="2.5" fill="#FFFFFF" />
          <path d="M93 112 L107 110" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
        </svg>
      );

    case 'subaru_pride':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(190,18,60,0.25)]">
          <path d="M52 135 L34 202 L166 202 L148 135 Z" fill="#0F172A" stroke="#E11D48" strokeWidth="3" />
          <path d="M84 135 L100 198 L116 135 Z" fill="#BE123C" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="80" cy="96" rx="8" ry="9" fill="#9F1239" />
          <circle cx="80" cy="96" r="3" fill="#FDA4AF" />
          <ellipse cx="120" cy="96" rx="8" ry="9" fill="#9F1239" />
          <circle cx="120" cy="96" r="3" fill="#FDA4AF" />
          <path d="M90 112 Q100 120 110 110" fill="none" stroke="#881337" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <circle cx="48" cy="60" r="5" fill="#F43F5E" opacity="0.85" />
          <circle cx="155" cy="72" r="4" fill="#FB923C" opacity="0.85" />
        </svg>
      );

    case 'subaru_greed':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(13,148,136,0.22)]">
          <path d="M58 136 L44 200 L156 200 L142 136 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="3" />
          <path d="M84 136 L100 172 L116 136 Z" fill="#F8FAFC" />
          <path d="M96 142 L100 168 L104 142 Z" fill="#0D9488" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="80" cy="96" rx="8" ry="8" fill="#334155" />
          <ellipse cx="120" cy="96" rx="8" ry="8" fill="#334155" />
          <path d="M91 113 Q100 118 109 113" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
        </svg>
      );

    case 'subaru_wrath':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(79,70,229,0.22)]">
          <path d="M56 136 L40 200 L160 200 L144 136 Z" fill="#1E1B4B" stroke="#312E81" strokeWidth="3" />
          <path d="M74 130 L126 130 L132 148 L68 148 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
          <path d="M64 78 L98 92 L94 104 L60 90 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
          <ellipse cx="120" cy="96" rx="8" ry="9" fill="#4338CA" />
          <circle cx="120" cy="96" r="3" fill="#C7D2FE" />
          <path d="M95 114 L105 114" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="3" />
        </svg>
      );

    default: {
      const char = CHARACTERS[characterId];
      const v = char.visual;

      if (characterId === 'puck') {
        return (
          <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(100,116,139,0.2)]">
            <path d="M52 72 L42 32 L82 54 Z" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
            <path d="M54 66 L48 40 L76 56 Z" fill="#FDA4AF" />
            <path d="M148 72 L158 32 L118 54 Z" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
            <path d="M146 66 L152 40 L124 56 Z" fill="#FDA4AF" />
            <circle cx="44" cy="54" r="5" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
            <path d="M72 135 L62 192 L138 192 L128 135 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="3" />
            <ellipse cx="100" cy="162" rx="18" ry="22" fill="#F8FAFC" />
            <ellipse cx="100" cy="96" rx="46" ry="40" fill="#CBD5E1" stroke="#64748B" strokeWidth="3" />
            <ellipse cx="100" cy="106" rx="28" ry="22" fill="#F8FAFC" />
            <ellipse cx="78" cy="94" rx="8" ry="9" fill="#0F172A" />
            <circle cx="75" cy="90" r="3" fill="#FFFFFF" />
            <ellipse cx="122" cy="94" rx="8" ry="9" fill="#0F172A" />
            <circle cx="119" cy="90" r="3" fill="#FFFFFF" />
            <path d="M92 110 Q96 115 100 110 Q104 115 108 110" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      }

      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.16)]">
          {/* Back hair */}
          {(v.hairStyle === 'long' || v.hairStyle === 'sleek_long') && (
            <path
              d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z"
              fill={v.hairColor}
              stroke="#1E293B"
              strokeWidth="2.5"
            />
          )}
          {v.hairStyle === 'ponytail' && (
            <path
              d="M135 65 C165 65 175 115 158 155 C145 135 142 100 135 78 Z"
              fill={v.hairColor}
              stroke="#1E293B"
              strokeWidth="2.5"
            />
          )}
          {v.hairStyle === 'drills' && (
            <>
              <path d="M40 86 C22 120 26 172 44 190 C54 170 56 125 52 86 Z" fill={v.hairColor} stroke="#1E293B" strokeWidth="2.5" />
              <path d="M160 86 C178 120 174 172 156 190 C146 170 144 125 148 86 Z" fill={v.hairColor} stroke="#1E293B" strokeWidth="2.5" />
            </>
          )}

          {/* Cat ears accessory */}
          {v.accessory === 'cat_ears' && (
            <>
              <path d="M54 68 L44 34 L78 52 Z" fill={v.hairColor} stroke="#1E293B" strokeWidth="2.5" />
              <path d="M146 68 L156 34 L122 52 Z" fill={v.hairColor} stroke="#1E293B" strokeWidth="2.5" />
            </>
          )}

          {/* Outfit / Torso */}
          <path
            d="M60 138 L44 198 L156 198 L140 138 Z"
            fill={v.outfitColor}
            stroke="#1E293B"
            strokeWidth="3"
          />
          <path d="M82 138 L100 172 L118 138 Z" fill="#FFFFFF" />
          <path d="M93 138 L100 185 L107 138 Z" fill={v.accentColor} />

          {/* Chibi Head */}
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />

          {v.hairStyle === 'helmet' ? (
            <g>
              <ellipse cx="100" cy="92" rx="47" ry="43" fill="#334155" stroke="#0F172A" strokeWidth="3" />
              <path d="M62 88 L138 88 L130 116 L70 116 Z" fill="#0F172A" />
              <line x1="75" y1="98" x2="125" y2="98" stroke="#EA580C" strokeWidth="3" />
              <path d="M95 50 C110 22 145 28 158 58 C135 50 115 52 95 50 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="2.5" />
            </g>
          ) : (
            <>
              <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
              <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />

              {characterId === 'roswaal' ? (
                <>
                  <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#FACC15" />
                  <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
                  <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
                  <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
                </>
              ) : (
                <>
                  <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill={v.eyeColor} />
                  <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
                  <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill={v.eyeColor} />
                  <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
                </>
              )}

              {/* Expressions */}
              {(v.eyeExpression === 'tsundere' || v.eyeExpression === 'sanpaku') && (
                <>
                  <path d="M68 82 L88 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M132 82 L112 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M94 113 L106 111" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
              {(v.eyeExpression === 'smug' || v.eyeExpression === 'closed_smile') && (
                <>
                  <path d="M68 84 L88 82" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M132 84 L112 86" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
              {(v.eyeExpression === 'tired' || v.eyeExpression === 'normal') && (
                <>
                  <path d="M70 84 L88 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M112 84 L130 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M94 112 Q100 116 106 112" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
              {v.eyeExpression === 'crazy' && (
                <>
                  <circle cx="80" cy="96" r="3" fill="#FFFFFF" />
                  <circle cx="120" cy="96" r="3" fill="#FFFFFF" />
                  <path d="M68 80 L88 88" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M132 80 L112 88" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M88 110 Q100 123 112 110" fill="none" stroke="#9F1239" strokeWidth="3" strokeLinecap="round" />
                </>
              )}
              {v.eyeExpression === 'gentle' && (
                <>
                  <path d="M70 83 Q79 80 88 84" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  <path d="M112 84 Q121 80 130 83" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}

              {v.accessory === 'scar' && (
                <path d="M86 74 L114 78" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
              )}

              {v.hairStyle === 'spiky' ? (
                <path
                  d="M46 86 L58 46 L80 58 L100 38 L120 58 L142 46 L154 86 C136 68 118 76 100 64 C82 76 64 68 46 86 Z"
                  fill={v.hairColor}
                  stroke="#1E293B"
                  strokeWidth="2.5"
                />
              ) : (
                <path
                  d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z"
                  fill={v.hairColor}
                  stroke="#1E293B"
                  strokeWidth="2.5"
                />
              )}

              {(v.accessory === 'top_hat' || v.accessory === 'hat_green') && (
                <g>
                  <ellipse cx="100" cy="54" rx="48" ry="12" fill={v.outfitColor} stroke="#1E293B" strokeWidth="2.5" />
                  <path d="M68 54 L74 24 L126 24 L132 54 Z" fill={v.outfitColor} stroke="#1E293B" strokeWidth="2.5" />
                  <rect x="72" y="44" width="56" height="6" fill={v.accentColor} />
                </g>
              )}

              {v.accessory === 'crown' && (
                <path
                  d="M72 54 L82 34 L94 48 L100 28 L106 48 L118 34 L128 54 Z"
                  fill="#FACC15"
                  stroke="#CA8A04"
                  strokeWidth="2"
                />
              )}

              {v.accessory === 'maid_band' && (
                <path d="M60 56 Q100 42 140 56" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
              )}

              {v.accessory === 'veil' && (
                <path
                  d="M46 66 Q100 40 154 66 L162 96 Q100 76 38 96 Z"
                  fill="#1E1B4B"
                  opacity="0.82"
                  stroke="#7C3AED"
                  strokeWidth="2"
                />
              )}
            </>
          )}
        </svg>
      );
    }
  }
};
