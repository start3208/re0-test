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
 * Combines the adorable kokeshi-chibi face/head/eye proportions of re0-test
 * with bespoke outfits, hair silhouettes, and lore-accurate accessories for all 36 characters.
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
    // 01. 菜月昴（本篇）
    case 'subaru_envy':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(234,88,12,0.2)]">
          {/* High stand collar & tracksuit torso */}
          <path d="M76 128 L124 128 L128 142 L72 142 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M82 130 L118 130 L114 140 L86 140 Z" fill="#F97316" />
          <path d="M62 138 L48 198 L152 198 L138 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M62 138 L52 188 L68 188 L74 138 Z" fill="#F97316" />
          <path d="M138 138 L148 188 L132 188 L126 138 Z" fill="#F97316" />
          <path d="M84 138 L100 166 L116 138 Z" fill="#FFFFFF" />
          <rect x="82" y="164" width="36" height="34" fill="#FFFFFF" />
          <line x1="100" y1="138" x2="100" y2="198" stroke="#0F172A" strokeWidth="2" />
          {/* Chibi Head */}
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
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

    // 02. 艾米莉亚
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
          {/* White rose on viewer's left & butterfly clip on viewer's right */}
          <g transform="translate(62, 62)">
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="4" fill="#DDD6FE" />
          </g>
          <path d="M138 64 L145 58 L143 66 L146 72 L138 68 Z" fill="#FFFFFF" stroke="#A855F7" strokeWidth="1.8" />
        </svg>
      );

    // 03. 雷姆
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

    // 04. 拉姆
    case 'ram':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(225,29,72,0.2)]">
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M76 138 L66 198 L134 198 L124 138 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M90 144 L100 150 L110 144 L108 156 L100 152 L92 156 Z" fill="#FB7185" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="8" ry="4.5" fill="#FDA4AF" opacity="0.55" />
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

    // 05. 碧翠丝
    case 'beatrice':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(217,119,6,0.2)]">
          <path d="M36 90 C22 125 25 175 42 195 C55 180 58 135 54 90 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <path d="M164 90 C178 125 175 175 158 195 C145 180 142 135 146 90 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <path d="M62 138 L44 198 L156 198 L138 138 Z" fill="#BE185D" stroke="#831843" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#FDF2F8" />
          <circle cx="76" cy="152" r="5.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="124" cy="152" r="5.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          <ellipse cx="100" cy="96" rx="44" ry="40" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
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

    // 06. 罗兹瓦尔
    case 'roswaal':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(76,29,149,0.22)]">
          {/* High crimson-lined cape collar */}
          <path d="M54 118 L146 118 L138 146 L62 146 Z" fill="#991B1B" stroke="#1E293B" strokeWidth="2.5" />
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#4C1D95" stroke="#1E293B" strokeWidth="3" />
          <path d="M82 138 L100 172 L118 138 Z" fill="#FFFFFF" />
          <path d="M93 138 L100 185 L107 138 Z" fill="#FBBF24" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          {/* Left eye (viewer's left): Blue; Right eye (viewer's right): Yellow + purple triangle makeup */}
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#FACC15" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M116 107 L124 107 L120 116 Z" fill="#7C3AED" />
          <path d="M68 84 L88 82" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          {/* Indigo bangs + cyan-blue front streak on viewer's left */}
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#312E81" stroke="#1E293B" strokeWidth="2.5" />
          <path d="M54 78 C52 96 58 112 64 118 C64 104 62 88 66 76 Z" fill="#38BDF8" stroke="#1E293B" strokeWidth="2" />
          {/* Top hat */}
          <ellipse cx="100" cy="54" rx="48" ry="12" fill="#4C1D95" stroke="#1E293B" strokeWidth="2.5" />
          <path d="M68 54 L74 24 L126 24 L132 54 Z" fill="#4C1D95" stroke="#1E293B" strokeWidth="2.5" />
          <rect x="72" y="44" width="56" height="6" fill="#FBBF24" />
        </svg>
      );

    // 07. 加菲尔
    case 'garfiel':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(202,138,4,0.2)]">
          {/* Sleeveless dark vest with pink trim, bare chest & blue crystal pendant */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M78 138 L100 184 L122 138 Z" fill="#FFF5F5" stroke="#F43F5E" strokeWidth="2.5" />
          <path d="M50 184 L150 184 L154 198 L46 198 Z" fill="#7E22CE" />
          <polygon points="100,144 106,151 100,158 94,151" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.8" />
          {/* Chibi Head */}
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 82 L88 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 82 L112 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M94 113 L106 111" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          {/* Forehead white/red scar */}
          <path d="M88 74 L112 78 M96 71 L104 81" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
          {/* Spiky golden hair */}
          <path d="M46 86 L58 46 L80 58 L100 38 L120 58 L142 46 L154 86 C136 68 118 76 100 64 C82 76 64 68 46 86 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
        </svg>
      );

    // 08. 奥托
    case 'otto':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(5,150,105,0.2)]">
          {/* Green merchant cloak with geometric border & red bow tie */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#065F46" stroke="#1E293B" strokeWidth="3" />
          <path d="M82 138 L100 168 L118 138 Z" fill="#FFFFFF" />
          <path d="M64 138 L136 138 L142 154 L58 154 Z" fill="#047857" stroke="#FACC15" strokeWidth="2" />
          <path d="M90 143 L100 149 L110 143 L108 154 L100 150 L92 154 Z" fill="#EF4444" />
          {/* Chibi Head */}
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#4338CA" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#4338CA" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 84 L88 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M112 84 L130 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M94 112 Q100 116 106 112" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          {/* Silver bangs */}
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="2.5" />
          {/* Green merchant hat with gold band & white pom-pom */}
          <ellipse cx="100" cy="54" rx="48" ry="12" fill="#065F46" stroke="#1E293B" strokeWidth="2.5" />
          <path d="M66 54 L72 28 L128 28 L134 54 Z" fill="#065F46" stroke="#1E293B" strokeWidth="2.5" />
          <rect x="70" y="45" width="60" height="6" fill="#FACC15" />
          <circle cx="100" cy="41" r="4.5" fill="#FACC15" />
          <circle cx="134" cy="44" r="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      );

    // 09. 法兰黛莉卡
    case 'frederica':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(234,179,8,0.2)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M76 138 L66 198 L134 198 L124 138 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M90 144 L100 150 L110 144 L108 156 L100 152 L92 156 Z" fill="#FACC15" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#15803D" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#15803D" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M60 56 Q100 42 140 56" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    // 10. 佩特拉
    case 'petra':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(244,63,94,0.2)]">
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M76 138 L66 198 L134 198 L124 138 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <path d="M90 144 L100 150 L110 144 L108 156 L100 152 L92 156 Z" fill="#F43F5E" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="2.5" />
          <path d="M60 56 Q100 42 140 56" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
          {/* Cute red ribbon bow on top */}
          <path d="M88 46 L100 52 L112 46 L110 56 L100 52 L90 56 Z" fill="#E11D48" />
        </svg>
      );

    // 11. 帕克
    case 'puck':
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

    // 12. 梅莉
    case 'meili':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(59,130,246,0.2)]">
          {/* Blue side braid on viewer's right */}
          <path d="M144 86 C168 112 166 168 148 194 C136 178 138 130 140 86 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2.5" />
          {/* Dark purple-brown cape with red lining & gold crescent brooch */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#312E81" stroke="#1E1B4B" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#BE123C" />
          <circle cx="100" cy="146" r="5.5" fill="#FACC15" stroke="#1E1B4B" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          {/* Bright green eyes */}
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 82 L88 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 82 L112 87" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M94 113 L106 111" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2.5" />
          {/* Purple flower clip with gold center on viewer's right */}
          <circle cx="134" cy="60" r="8" fill="#A855F7" stroke="#581C87" strokeWidth="2" />
          <circle cx="134" cy="60" r="3" fill="#FACC15" />
        </svg>
      );

    // 13. 夏乌拉
    case 'shaula':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(234,88,12,0.2)]">
          {/* Scorpion tail ponytail curving on viewer's right */}
          <path d="M135 65 C168 65 178 118 158 162 C145 140 142 100 135 78 Z" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
          <circle cx="160" cy="158" r="5" fill="#FACC15" stroke="#1E293B" strokeWidth="2" />
          {/* Dark cloak with orange lining & bikini top */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M78 138 L72 198 L128 198 L122 138 Z" fill="#EA580C" />
          <path d="M84 140 L100 166 L116 140 Z" fill="#FFF5F5" />
          <circle cx="100" cy="144" r="4" fill="#FACC15" />
          {/* Black & orange twin hair ribbon ears on top */}
          <path d="M66 56 L54 34 L84 48 Z" fill="#1E293B" stroke="#EA580C" strokeWidth="2.5" />
          <path d="M134 56 L146 34 L116 48 Z" fill="#1E293B" stroke="#EA580C" strokeWidth="2.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#16A34A" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <path d="M94 112 Q100 118 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
        </svg>
      );

    // 14. 莱茵哈鲁特
    case 'reinhard':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(220,38,38,0.2)]">
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M92 138 L92 198 L108 198 L108 138 Z" fill="#1E3A8A" />
          <circle cx="70" cy="144" r="7" fill="#FBBF24" />
          <circle cx="130" cy="144" r="7" fill="#FBBF24" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="95" rx="8.5" ry="10" fill="#2563EB" />
          <circle cx="77" cy="91" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="95" rx="8.5" ry="10" fill="#2563EB" />
          <circle cx="117" cy="91" r="3" fill="#FFFFFF" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 86 L56 48 L78 60 L100 40 L122 60 L144 48 L154 86 C136 68 118 78 100 66 C82 78 64 68 46 86 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="3" />
        </svg>
      );

    // 15. 菲鲁特
    case 'felt':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(239,68,68,0.2)]">
          {/* Black top ribbon bow */}
          <path d="M74 44 L100 54 L126 44 L122 60 L100 54 L78 60 Z" fill="#1E293B" />
          {/* Brown vest, cream inner top & blue scarf with gold pin */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#78350F" stroke="#1E293B" strokeWidth="3" />
          <path d="M82 138 L78 198 L122 198 L118 138 Z" fill="#FEF3C7" />
          <path d="M68 134 L132 134 L126 150 L74 150 Z" fill="#2563EB" stroke="#1E3A8A" strokeWidth="2" />
          <circle cx="100" cy="142" r="4.5" fill="#FACC15" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 84 L88 82" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 86 L58 46 L80 58 L100 38 L120 58 L142 46 L154 86 C136 68 118 76 100 64 C82 76 64 68 46 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
        </svg>
      );

    // 16. 库珥修
    case 'crusch':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(21,128,61,0.2)]">
          <path d="M135 65 C165 65 175 115 158 155 C145 135 142 100 135 78 Z" fill="#15803D" stroke="#14532D" strokeWidth="2.5" />
          {/* Military coat with white cravat, gold clover pin & red rose badge */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M84 138 L100 170 L116 138 Z" fill="#FFFFFF" />
          <circle cx="100" cy="148" r="4.5" fill="#FACC15" />
          <circle cx="70" cy="144" r="6" fill="#FACC15" />
          <circle cx="130" cy="144" r="6" fill="#FACC15" />
          <circle cx="122" cy="160" r="5" fill="#E11D48" stroke="#FACC15" strokeWidth="1.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 84 L88 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M112 84 L130 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M94 112 Q100 116 106 112" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#15803D" stroke="#14532D" strokeWidth="2.5" />
        </svg>
      );

    // 17. 菲利斯
    case 'ferris':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(2,132,199,0.2)]">
          {/* Proportionate cute cat ears */}
          <path d="M56 68 L48 38 L78 54 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
          <path d="M58 64 L52 44 L74 56 Z" fill="#FDA4AF" />
          <path d="M144 68 L152 38 L122 54 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
          <path d="M142 64 L148 44 L126 56 Z" fill="#FDA4AF" />
          {/* Blue & white healer dress with blue bow & gold bell */}
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="3" />
          <path d="M82 138 L76 198 L124 198 L118 138 Z" fill="#FFFFFF" />
          <path d="M88 144 L100 150 L112 144 L110 156 L100 152 L90 156 Z" fill="#0284C7" />
          <circle cx="100" cy="148" r="4" fill="#FACC15" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 84 L88 82" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q96 116 100 111 Q104 116 108 111" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
        </svg>
      );

    // 18. 威尔海姆
    case 'wilhelm':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(51,65,85,0.2)]">
          {/* Small low silver ponytail */}
          <path d="M130 108 C148 114 152 134 142 146 C134 136 132 122 128 112 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          {/* Black tailcoat with royal-blue lapels, white shirt & dark tie */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M72 138 L92 178 L108 178 L128 138 Z" fill="#2563EB" />
          <path d="M84 138 L100 172 L116 138 Z" fill="#FFFFFF" />
          <path d="M94 138 L100 184 L106 138 Z" fill="#475569" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#334155" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#334155" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 82 L88 85" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 82 L112 85" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M94 113 L106 113" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="2.5" />
        </svg>
      );

    // 19. 特蕾西亚
    case 'theresia':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(239,68,68,0.2)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" />
          {/* White gold-bordered knight cloak, pink inner dress & green shield gem */}
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#FDA4AF" />
          <circle cx="100" cy="146" r="6" fill="#10B981" stroke="#FEF08A" strokeWidth="2.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#0284C7" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#0284C7" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" />
          {/* Purple-red hair ribbon on top right */}
          <path d="M126 52 L144 44 L140 62 Z" fill="#9D174D" stroke="#FACC15" strokeWidth="1.5" />
        </svg>
      );

    // 20. 安娜塔西亚
    case 'anastasia':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(147,51,234,0.18)]">
          <path d="M40 86 C22 120 26 172 44 190 C54 170 56 125 52 86 Z" fill="#C084FC" stroke="#7E22CE" strokeWidth="2.5" />
          <path d="M160 86 C178 120 174 172 156 190 C146 170 144 125 148 86 Z" fill="#C084FC" stroke="#7E22CE" strokeWidth="2.5" />
          {/* White fur-trimmed cape, pink ribbon bow & white pom-pom */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#F472B6" />
          <circle cx="100" cy="145" r="5" fill="#38BDF8" stroke="#1E293B" strokeWidth="1.8" />
          <circle cx="122" cy="162" r="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#0D9488" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#0D9488" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 84 L88 82" stroke="#581C87" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#581C87" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#C084FC" stroke="#7E22CE" strokeWidth="2.5" />
          {/* Fluffy white fox-fur hat */}
          <rect x="54" y="34" width="92" height="26" rx="13" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
          <circle cx="132" cy="47" r="4" fill="#FACC15" />
        </svg>
      );

    // 21. 尤里乌斯
    case 'julius':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(124,58,237,0.18)]">
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M92 138 L92 198 L108 198 L108 138 Z" fill="#7C3AED" />
          <circle cx="70" cy="144" r="6.5" fill="#FBBF24" />
          <circle cx="130" cy="144" r="6.5" fill="#FBBF24" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#EAB308" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#EAB308" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M94 112 Q100 116 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M50 86 C50 48 150 48 150 86 C135 68 116 80 94 64 C80 78 65 68 50 86 Z"
            fill="#A855F7"
            stroke="#6B21A8"
            strokeWidth="2.5"
          />
          <path
            d="M94 64 Q102 76 93 85"
            fill="none"
            stroke="#6B21A8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    // 22. 普莉希拉
    case 'priscilla':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(220,38,38,0.22)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2.5" />
          {/* Crimson & black royal gown with turquoise gem necklace */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#1E293B" />
          <circle cx="100" cy="146" r="6" fill="#2DD4BF" stroke="#FBBF24" strokeWidth="2.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 84 L88 82" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2.5" />
          {/* Black-red hair flower on viewer's right */}
          <circle cx="138" cy="62" r="9" fill="#1E293B" stroke="#EF4444" strokeWidth="2.5" />
          <circle cx="138" cy="62" r="3.5" fill="#FBBF24" />
        </svg>
      );

    // 23. 阿尔（阿尔迪巴兰）
    case 'aldebaran':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.22)]">
          {/* Green vest, bare chest & tan jagged shoulder cape with red X stitches */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#15803D" stroke="#1E293B" strokeWidth="3" />
          <path d="M84 138 L100 176 L116 138 Z" fill="#FDE68A" />
          <path d="M56 132 L144 132 L134 156 L100 162 L66 156 Z" fill="#D97706" stroke="#78350F" strokeWidth="2.5" />
          <path d="M78 140 L84 146 M84 140 L78 146 M116 140 L122 146 M122 140 L116 146" stroke="#DC2626" strokeWidth="2" />
          {/* Gladiator helmet & red plume */}
          <ellipse cx="100" cy="92" rx="47" ry="43" fill="#334155" stroke="#0F172A" strokeWidth="3" />
          <path d="M62 88 L138 88 L130 116 L70 116 Z" fill="#0F172A" />
          <line x1="75" y1="98" x2="125" y2="98" stroke="#EA580C" strokeWidth="3" />
          <path d="M95 50 C110 22 145 28 158 58 C135 50 115 52 95 50 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="2.5" />
        </svg>
      );

    // 24. 艾姬多娜
    case 'echidna':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.22)]">
          <path d="M46 85 C34 135 38 185 52 204 L148 204 C162 185 166 135 154 85 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <path d="M88 138 L100 165 L112 138 Z" fill="#F8FAFC" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
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

    // 25. 莎缇拉
    case 'satella':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(109,40,217,0.22)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
          {/* Dark gothic gown with purple center panel & pale gold rose */}
          <path d="M64 138 L48 198 L152 198 L136 138 Z" fill="#1E1B4B" stroke="#0F172A" strokeWidth="3" />
          <path d="M85 138 L80 198 L120 198 L115 138 Z" fill="#4C1D95" />
          <circle cx="100" cy="146" r="6" fill="#FDE68A" stroke="#7C3AED" strokeWidth="2" />
          {/* Half-elf ears */}
          <path d="M40 92 L58 84 L55 102 Z" fill="#FDE2E4" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M160 92 L142 84 L145 102 Z" fill="#FDE2E4" stroke="#CBD5E1" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="95" rx="9" ry="11" fill="#6D28D9" />
          <ellipse cx="80" cy="93" rx="5" ry="6" fill="#C084FC" />
          <circle cx="77" cy="89" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="95" rx="9" ry="11" fill="#6D28D9" />
          <ellipse cx="120" cy="93" rx="5" ry="6" fill="#C084FC" />
          <circle cx="117" cy="89" r="3" fill="#FFFFFF" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
          {/* Dark veil & black rose ornament */}
          <path d="M46 66 Q100 40 154 66 L162 96 Q100 76 38 96 Z" fill="#1E1B4B" opacity="0.82" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="62" cy="62" r="8" fill="#1E1B4B" stroke="#A855F7" strokeWidth="2" />
        </svg>
      );

    // 26. 潘多拉
    case 'pandora':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(37,99,235,0.18)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
          {/* Pure white cape dress with blue border & thin blue ribbon */}
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="3" />
          <path d="M88 142 L100 150 L112 142 L110 152 L100 148 L90 152 Z" fill="#2563EB" />
          <rect x="97" y="148" width="6" height="50" fill="#3B82F6" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#2563EB" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <path d="M93 111 Q100 117 107 111" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
        </svg>
      );

    // 27. 密涅瓦
    case 'minerva':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(236,72,153,0.2)]">
          <path d="M135 65 C165 65 175 115 158 155 C145 135 142 100 135 78 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          {/* White jacket over pink-purple bodice with pink heart clasp */}
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#FFFFFF" stroke="#F472B6" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#EC4899" />
          <circle cx="100" cy="146" r="5.5" fill="#F43F5E" stroke="#FEF08A" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#0284C7" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#0284C7" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 82 L88 87" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 82 L112 87" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          <path d="M94 113 L106 111" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          {/* Pink-blue wing hairclip on viewer's left */}
          <rect x="60" y="64" width="14" height="6" rx="2" fill="#38BDF8" stroke="#EC4899" strokeWidth="1.5" transform="rotate(14 60 64)" />
        </svg>
      );

    // 28. 雷古勒斯
    case 'regulus':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(245,158,11,0.18)]">
          {/* Pure white coat with black-gold collar & double gold buttons */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
          <path d="M80 138 L100 166 L120 138 Z" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="90" cy="172" r="3.5" fill="#F59E0B" />
          <circle cx="110" cy="172" r="3.5" fill="#F59E0B" />
          <circle cx="90" cy="186" r="3.5" fill="#F59E0B" />
          <circle cx="110" cy="186" r="3.5" fill="#F59E0B" />
          {/* Left blue teardrop earring */}
          <circle cx="53" cy="105" r="4" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#D97706" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 82 L88 87" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 82 L112 87" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M94 113 L106 111" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2.5" />
        </svg>
      );

    // 29. 培提尔其乌斯
    case 'petelgeuse':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(22,101,52,0.22)]">
          {/* Dark bishop robe with crimson & green vertical stoles */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#18181B" stroke="#0F172A" strokeWidth="3" />
          <path d="M84 138 L80 198 L120 198 L116 138 Z" fill="#991B1B" />
          <path d="M94 138 L92 198 L108 198 L106 138 Z" fill="#166534" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#ECFDF5" stroke="#94A3B8" strokeWidth="2.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="80" cy="96" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#DC2626" />
          <circle cx="120" cy="96" r="3" fill="#FFFFFF" />
          <path d="M68 80 L88 88" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 80 L112 88" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M88 110 Q100 123 112 110" fill="none" stroke="#9F1239" strokeWidth="3" strokeLinecap="round" />
          {/* Green bowl bangs & small black bishop cap */}
          <path d="M50 86 C50 48 150 48 150 86 C135 72 118 76 100 72 C82 76 65 72 50 86 Z" fill="#166534" stroke="#052E16" strokeWidth="2.5" />
          <path d="M78 52 C78 38 122 38 122 52 Z" fill="#18181B" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );

    // 30. 卡佩拉
    case 'capella':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(225,29,72,0.2)]">
          <path d="M40 86 C22 120 26 172 44 190 C54 170 56 125 52 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M160 86 C178 120 174 172 156 190 C146 170 144 125 148 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M62 138 L46 198 L154 198 L138 138 Z" fill="#18181B" stroke="#0F172A" strokeWidth="3" />
          <path d="M84 138 L78 198 L122 198 L116 138 Z" fill="#EC4899" />
          <circle cx="100" cy="144" r="5" fill="#18181B" stroke="#FFFFFF" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.55" />
          <path d="M68 80 L88 86" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 80 L112 86" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#E11D48" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#E11D48" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M90 111 Q100 121 110 111" fill="none" stroke="#9F1239" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <circle cx="62" cy="56" r="9" fill="#1E293B" stroke="#EC4899" strokeWidth="2.5" />
          <circle cx="138" cy="56" r="9" fill="#1E293B" stroke="#EC4899" strokeWidth="2.5" />
        </svg>
      );

    // 31. 艾尔莎
    case 'elsa':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(159,18,57,0.22)]">
          <path d="M46 85 C34 135 38 188 54 204 L146 204 C162 188 166 135 154 85 Z" fill="#18181B" stroke="#0F172A" strokeWidth="2.5" />
          {/* Dark feather cape & deep-V crimson-black dress */}
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#18181B" stroke="#4C0519" strokeWidth="3" />
          <path d="M80 138 L100 180 L120 138 Z" fill="#9F1239" />
          <circle cx="100" cy="144" r="4.5" fill="#FACC15" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#CBD5E1" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#9F1239" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#9F1239" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M68 84 L88 82" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 84 L112 86" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 111 Q100 118 109 109" fill="none" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 86 C50 48 150 48 150 86 C135 68 118 80 100 66 C82 80 65 68 50 86 Z" fill="#18181B" stroke="#0F172A" strokeWidth="2.5" />
          {/* Purple rose ornament on viewer's left */}
          <circle cx="60" cy="62" r="8.5" fill="#9333EA" stroke="#581C87" strokeWidth="2" />
          <circle cx="60" cy="62" r="3" fill="#D8B4FE" />
        </svg>
      );

    // 32. 菜月昴（傲慢IF）
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

    // 33. 菜月昴（强欲IF）
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

    // 34. 菜月昴（愤怒IF）
    case 'subaru_wrath':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(79,70,229,0.22)]">
          <path d="M56 136 L40 200 L160 200 L144 136 Z" fill="#1E1B4B" stroke="#312E81" strokeWidth="3" />
          <path d="M74 130 L126 130 L132 148 L68 148 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
          <path d="M70 84 L88 86" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M112 86 L130 84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8" ry="9" fill="#4338CA" />
          <circle cx="80" cy="96" r="3" fill="#C7D2FE" />
          <ellipse cx="120" cy="96" rx="8" ry="9" fill="#4338CA" />
          <circle cx="120" cy="96" r="3" fill="#C7D2FE" />
          <path d="M95 114 L105 114" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="3" />
        </svg>
      );

    // 35. 菜月昴（怠惰IF）
    case 'subaru_sloth':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(2,132,199,0.2)]">
          <path d="M135 65 C160 68 168 108 154 142 C144 125 140 96 135 78 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M60 138 L44 198 L156 198 L140 138 Z" fill="#3B0764" stroke="#1E1B4B" strokeWidth="3" />
          <path d="M82 138 L100 172 L118 138 Z" fill="#F8FAFC" />
          <path d="M64 176 L136 176 L138 186 L62 186 Z" fill="#1E293B" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.5" />
          <path d="M70 83 Q79 80 88 84" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M112 84 Q121 80 130 83" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="80" cy="96" rx="8" ry="9" fill="#451A03" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8" ry="9" fill="#451A03" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M94 112 Q100 117 106 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
        </svg>
      );

    // 36. 菜月昴（暴食IF）
    case 'subaru_gluttony':
      return (
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,23,42,0.2)]">
          <path d="M58 136 L42 198 L158 198 L142 136 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <path d="M62 136 L52 166 L148 166 L138 136 Z" fill="#78350F" stroke="#F59E0B" strokeWidth="2" />
          <ellipse cx="100" cy="95" rx="45" ry="41" fill="#FFF5F5" stroke="#E2E8F0" strokeWidth="2.5" />
          <ellipse cx="72" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.45" />
          <ellipse cx="128" cy="106" rx="7.5" ry="4" fill="#FDA4AF" opacity="0.45" />
          <ellipse cx="80" cy="96" rx="8.5" ry="9.5" fill="#F59E0B" />
          <circle cx="77" cy="92" r="3" fill="#FFFFFF" />
          <ellipse cx="120" cy="96" rx="8.5" ry="9.5" fill="#94A3B8" />
          <circle cx="117" cy="92" r="3" fill="#FFFFFF" />
          <path d="M93 112 Q100 117 107 112" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 84 L60 46 L82 58 L100 38 L118 58 L140 46 L152 84 C136 66 116 74 100 62 C84 74 64 66 48 84 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
        </svg>
      );
  }
};
