/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useState, useEffect, useCallback } from 'react';
import { FaUniversalAccess } from 'react-icons/fa';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [adhdMode, setAdhdMode] = useState(false);
  const [epilepticMode, setEpilepticMode] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const toggleWidget = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  useEffect(() => {
    // Memoized style injection to avoid recreating identical styles
    let currentStyleContent = '';

    const ensureWidgetPosition = () => {
      const newStyleContent = `
        [data-accessibility-widget="true"] {
          position: fixed !important;
          z-index: 99999 !important;
        }
        [data-accessibility-widget="true"]:first-of-type {
          bottom: 20px !important;
          right: 20px !important;
          width: 60px !important;
          height: 60px !important;
          min-width: 60px !important;
          max-width: 60px !important;
          min-height: 60px !important;
          max-height: 60px !important;
        }
        [data-accessibility-widget="true"]:last-of-type {
          bottom: 90px !important;
          right: 20px !important;
          max-width: calc(100vw - 40px) !important;
        }
        
        /* Force fixed font sizes for accessibility widget */
        [data-accessibility-widget] {
          font-size: 14px !important;
        }
        [data-accessibility-widget] * {
          font-size: inherit !important;
        }
        [data-accessibility-widget] h3 {
          font-size: 18px !important;
        }
        [data-accessibility-widget] button {
          font-size: 14px !important;
        }
        [data-accessibility-widget] small,
        [data-accessibility-widget] .text-sm {
          font-size: 12px !important;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 480px) {
          [data-accessibility-widget="true"]:first-of-type {
            bottom: 15px !important;
            right: 15px !important;
            width: 50px !important;
            height: 50px !important;
            min-width: 50px !important;
            max-width: 50px !important;
            min-height: 50px !important;
            max-height: 50px !important;
          }
          
          /* Force fixed font sizes for accessibility widget on mobile */
          [data-accessibility-widget] {
            font-size: 13px !important;
          }
          [data-accessibility-widget] * {
            font-size: inherit !important;
          }
          [data-accessibility-widget] h3 {
            font-size: 16px !important;
          }
          [data-accessibility-widget] button {
            font-size: 13px !important;
          }
          [data-accessibility-widget] small,
          [data-accessibility-widget] .text-sm {
            font-size: 11px !important;
          }
        }
      `;

      // Only update if content has changed
      if (currentStyleContent !== newStyleContent) {
        const existingStyle = document.getElementById(
          'accessibility-widget-position-styles'
        );
        if (existingStyle) {
          existingStyle.remove();
        }

        const style = document.createElement('style');
        style.id = 'accessibility-widget-position-styles';
        style.textContent = newStyleContent;
        document.head.appendChild(style);

        currentStyleContent = newStyleContent;
      }
    };

    ensureWidgetPosition();

    return () => {
      removeAdhdOverlay();
      removeEpilepticSafeStyles();
      // Clean up all accessibility styles
      const stylesToRemove = [
        'accessibility-font-size-styles',
        'accessibility-widget-position-styles',
      ];
      stylesToRemove.forEach((id) => {
        const style = document.getElementById(id);
        if (style) {
          style.remove();
        }
      });
    };
  }, []);

  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    applyFontSize(newSize);
    announceStatus(`Font size increased to ${newSize}%`);
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    applyFontSize(newSize);
    announceStatus(`Font size decreased to ${newSize}%`);
  }, [fontSize]);

  const resetFontSize = useCallback(() => {
    setFontSize(100);
    applyFontSize(100);
    announceStatus('Font size reset to default 100%');
  }, []);

  const resetAllSettings = useCallback(() => {
    // Reset font size
    setFontSize(100);
    applyFontSize(100);

    // Reset high contrast
    setHighContrast(false);
    document.documentElement.style.filter = 'none';

    // Reset ADHD mode
    setAdhdMode(false);
    removeAdhdOverlay();

    // Reset epileptic mode
    setEpilepticMode(false);
    removeEpilepticSafeStyles();

    announceStatus(
      'All accessibility settings have been reset to default values'
    );
  }, []);

  const applyFontSize = (size) => {
    const scaleFactor = size / 100;

    // Create CSS content
    const newStyleContent = `
        /* Apply font scaling to content areas, header, and footer (but not accessibility widget) */
        main, article, section, header, footer, nav, .content, .post-content, .mdx-content {
          font-size: calc(1em * ${scaleFactor}) !important;
        }
        
        /* Exclude accessibility widget from font scaling - more specific rules */
        [data-accessibility-widget] {
          font-size: 14px !important;
        }
        [data-accessibility-widget] *,
        [data-accessibility-widget] h1,
        [data-accessibility-widget] h2, 
        [data-accessibility-widget] h3,
        [data-accessibility-widget] h4,
        [data-accessibility-widget] h5,
        [data-accessibility-widget] h6,
        [data-accessibility-widget] p,
        [data-accessibility-widget] a,
        [data-accessibility-widget] span,
        [data-accessibility-widget] button,
        [data-accessibility-widget] div,
        [data-accessibility-widget] small {
          font-size: inherit !important;
        }
        
        /* Specific overrides for accessibility widget elements */
        [data-accessibility-widget] h3 {
          font-size: 18px !important;
        }
        [data-accessibility-widget] button {
          font-size: 14px !important;
        }
        [data-accessibility-widget] small,
        [data-accessibility-widget] .text-sm {
          font-size: 12px !important;
        }
        
        /* Preserve relative sizing for headings in content areas */
        main h1, article h1, section h1, header h1, footer h1, nav h1, .content h1, .post-content h1, .mdx-content h1 { 
          font-size: calc(2em * ${scaleFactor}) !important; 
        }
        main h2, article h2, section h2, header h2, footer h2, nav h2, .content h2, .post-content h2, .mdx-content h2 { 
          font-size: calc(1.5em * ${scaleFactor}) !important; 
        }
        main h3, article h3, section h3, header h3, footer h3, nav h3, .content h3, .post-content h3, .mdx-content h3 { 
          font-size: calc(1.25em * ${scaleFactor}) !important; 
        }
        main h4, article h4, section h4, header h4, footer h4, nav h4, .content h4, .post-content h4, .mdx-content h4 { 
          font-size: calc(1.125em * ${scaleFactor}) !important; 
        }
        main h5, article h5, section h5, header h5, footer h5, nav h5, .content h5, .post-content h5, .mdx-content h5 { 
          font-size: calc(1em * ${scaleFactor}) !important; 
        }
        main h6, article h6, section h6, header h6, footer h6, nav h6, .content h6, .post-content h6, .mdx-content h6 { 
          font-size: calc(0.875em * ${scaleFactor}) !important; 
        }
        
        /* Text size classes in content areas */
        main small, article small, section small, header small, footer small, nav small, .content small, .post-content small, .mdx-content small { 
          font-size: calc(0.75em * ${scaleFactor}) !important; 
        }
        main p, article p, section p, header p, footer p, nav p, .content p, .post-content p, .mdx-content p { 
          font-size: calc(1em * ${scaleFactor}) !important; 
        }
        main a, article a, section a, header a, footer a, nav a, .content a, .post-content a, .mdx-content a { 
          font-size: calc(1em * ${scaleFactor}) !important; 
        }
    `;

    // Check if we need to update the styles
    const existingStyle = document.getElementById(
      'accessibility-font-size-styles'
    );
    const needsUpdate =
      !existingStyle || existingStyle.textContent !== newStyleContent;

    if (needsUpdate) {
      // Remove existing style if present
      if (existingStyle) {
        existingStyle.remove();
      }

      // Create and inject new style element
      const style = document.createElement('style');
      style.id = 'accessibility-font-size-styles';
      style.textContent = newStyleContent;
      document.head.appendChild(style);
    }
  };

  const toggleHighContrast = useCallback(() => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    if (newContrast) {
      document.documentElement.style.filter = 'contrast(150%) brightness(1.2)';
      announceStatus('High contrast mode enabled');
    } else {
      document.documentElement.style.filter = 'none';
      announceStatus('High contrast mode disabled');
    }
  }, [highContrast]);

  const toggleAdhdMode = useCallback(() => {
    const newAdhdMode = !adhdMode;
    setAdhdMode(newAdhdMode);

    if (newAdhdMode) {
      createAdhdOverlay();
      announceStatus('ADHD focus mode enabled - reading spotlight activated');
    } else {
      removeAdhdOverlay();
      announceStatus('ADHD focus mode disabled');
    }
  }, [adhdMode]);

  const toggleEpilepticMode = useCallback(() => {
    const newEpilepticMode = !epilepticMode;
    setEpilepticMode(newEpilepticMode);

    if (newEpilepticMode) {
      applyEpilepticSafeStyles();
      announceStatus(
        'Epilepsy-safe mode enabled - animations and flashing content disabled'
      );
    } else {
      removeEpilepticSafeStyles();
      announceStatus('Epilepsy-safe mode disabled');
    }
  }, [epilepticMode]);

  const applyEpilepticSafeStyles = () => {
    const root = document.documentElement;

    // Only apply if not already applied
    if (root.classList.contains('epileptic-safe')) {
      return;
    }

    root.classList.add('epileptic-safe');

    // Check if styles already exist
    const existingStyle = document.getElementById('epileptic-safe-styles');
    if (existingStyle) {
      return;
    }

    const styleContent = `
      .epileptic-safe * {
        animation: none !important;
        transition: none !important;
      }
      .epileptic-safe video, .epileptic-safe img[src*=".gif"] {
        filter: grayscale(100%) !important;
      }
      .epileptic-safe {
        filter: saturate(50%) !important;
      }
    `;

    const style = document.createElement('style');
    style.id = 'epileptic-safe-styles';
    style.textContent = styleContent;
    document.head.appendChild(style);
  };

  const removeEpilepticSafeStyles = () => {
    const root = document.documentElement;

    // Only remove if currently applied
    if (!root.classList.contains('epileptic-safe')) {
      return;
    }

    root.classList.remove('epileptic-safe');
    const style = document.getElementById('epileptic-safe-styles');
    if (style) {
      style.remove();
    }
  };

  const createAdhdOverlay = () => {
    // Remove existing overlay if present
    const existingOverlay = document.getElementById('adhd-focus-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'adhd-focus-overlay';

    // Initial position - lower on screen (70% down instead of 50%)
    const initialFocusTop = window.innerHeight * 0.7 - 50;

    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 8000;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) ${initialFocusTop}px,
        transparent ${initialFocusTop}px,
        transparent ${initialFocusTop + 100}px,
        rgba(0, 0, 0, 0.8) ${initialFocusTop + 100}px,
        rgba(0, 0, 0, 0.8) 100%
      );
      transition: background 0.1s ease;
    `;

    document.body.appendChild(overlay);

    // Throttle mouse move updates for better performance
    let rafId = null;
    let lastMouseY = initialFocusTop + 50;

    const updateFocusArea = (mouseY) => {
      // Center the focus window around the mouse Y position
      const focusTop = Math.max(
        0,
        Math.min(mouseY - 50, window.innerHeight - 100)
      );

      overlay.style.background = `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) ${focusTop}px,
        transparent ${focusTop}px,
        transparent ${focusTop + 100}px,
        rgba(0, 0, 0, 0.8) ${focusTop + 100}px,
        rgba(0, 0, 0, 0.8) 100%
      )`;
    };

    const throttledMouseMove = (event) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        updateFocusArea(event.clientY);
        rafId = null;
      });
    };

    // Add optimized mouse move listener
    document.addEventListener('mousemove', throttledMouseMove, {
      passive: true,
    });

    // Store cleanup function
    overlay.cleanup = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      document.removeEventListener('mousemove', throttledMouseMove);
    };
  };

  const removeAdhdOverlay = () => {
    const overlay = document.getElementById('adhd-focus-overlay');
    if (overlay) {
      // Remove mouse move listener
      if (overlay.cleanup) {
        overlay.cleanup();
      }
      overlay.remove();
    }
  };

  const announceStatus = (message) => {
    setStatusMessage(message);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <Fragment>
      {/* Floating Accessibility Button */}
      <div
        data-accessibility-widget="true"
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 99999,
        }}
      >
        <button
          onClick={toggleWidget}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleWidget();
            }
          }}
          title="Accessibility Options"
          id="accessibility-widget"
          aria-label="Open accessibility options menu"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          role="button"
          tabIndex={0}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            bg: 'primary',
            color: 'background',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
            },
            '&:focus': {
              outline: '3px solid',
              outlineColor: 'accent',
              outlineOffset: '2px',
            },
            '&:active': {
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            },
          }}
        >
          <FaUniversalAccess
            size={24}
            sx={{
              width: '24px',
              height: '24px',
              flexShrink: 0,
              display: 'block',
              '@media (max-width: 480px)': {
                width: '20px',
                height: '20px',
              },
            }}
          />
        </button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          data-accessibility-widget="true"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="false"
          aria-live="polite"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
          sx={{
            position: 'fixed !important',
            bottom: 'calc(20px + 60px + 10px) !important', // 10px above the div container
            right: '20px !important',
            width: '300px',
            maxWidth: 'calc(100vw - 40px)', // Prevent overflow on small screens
            bg: 'background',
            color: 'text',
            border: '2px solid',
            borderColor: 'primary',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            zIndex: 99998,
            p: 3,
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        >
          {/* Header */}
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: '1px solid',
              borderColor: 'muted',
            }}
          >
            <h3
              id="accessibility-title"
              sx={{ m: 0, fontSize: '18px', fontWeight: 'bold' }}
            >
              Accessibility Options
            </h3>
            <button
              onClick={toggleWidget}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleWidget();
                }
              }}
              aria-label="Close accessibility options menu"
              role="button"
              tabIndex={0}
              sx={{
                bg: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'text',
                p: 1,
                borderRadius: '4px',
                fontSize: '18px',
                fontWeight: 'bold',
                '&:hover': {
                  bg: 'muted',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                },
              }}
            >
              ×
            </button>
          </div>

          {/* Font Size Controls */}
          <div sx={{ mb: 3 }}>
            <div sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <span sx={{ fontWeight: 'bold' }}>Text Size</span>
              <span sx={{ ml: 'auto', fontSize: '14px', color: 'text' }}>
                {fontSize}%
              </span>
            </div>
            <div sx={{ display: 'flex', gap: 2 }}>
              <button
                onClick={decreaseFontSize}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    decreaseFontSize();
                  }
                }}
                aria-label={`Decrease text size. Current size: ${fontSize}%`}
                role="button"
                tabIndex={0}
                sx={{
                  flex: 1,
                  py: 2,
                  px: 3,
                  bg: 'muted',
                  color: 'text',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  '&:hover': {
                    bg: 'accent',
                    color: 'background',
                  },
                  '&:focus': {
                    outline: '2px solid',
                    outlineColor: 'accent',
                    outlineOffset: '1px',
                  },
                }}
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    resetFontSize();
                  }
                }}
                aria-label={`Reset text size to default 100%. Current size: ${fontSize}%`}
                role="button"
                tabIndex={0}
                sx={{
                  flex: 1,
                  py: 2,
                  px: 3,
                  bg: 'muted',
                  color: 'text',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  '&:hover': {
                    bg: 'accent',
                    color: 'background',
                  },
                  '&:focus': {
                    outline: '2px solid',
                    outlineColor: 'accent',
                    outlineOffset: '1px',
                  },
                }}
              >
                Reset
              </button>
              <button
                onClick={increaseFontSize}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    increaseFontSize();
                  }
                }}
                aria-label={`Increase text size. Current size: ${fontSize}%`}
                role="button"
                tabIndex={0}
                sx={{
                  flex: 1,
                  py: 2,
                  px: 3,
                  bg: 'muted',
                  color: 'text',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  '&:hover': {
                    bg: 'accent',
                    color: 'background',
                  },
                  '&:focus': {
                    outline: '2px solid',
                    outlineColor: 'accent',
                    outlineOffset: '1px',
                  },
                }}
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div sx={{ mb: 3 }}>
            <button
              onClick={toggleHighContrast}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleHighContrast();
                }
              }}
              aria-label={`${
                highContrast ? 'Disable' : 'Enable'
              } high contrast mode for better visibility`}
              aria-pressed={highContrast}
              role="switch"
              tabIndex={0}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 2,
                px: 3,
                bg: highContrast ? 'primary' : 'muted',
                color: highContrast ? 'background' : 'text',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bg: 'accent',
                  color: 'background',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                },
              }}
            >
              {highContrast ? 'Disable' : 'Enable'} High Contrast
            </button>
          </div>

          {/* ADHD Mode Toggle */}
          <div sx={{ mb: 3 }}>
            <button
              onClick={toggleAdhdMode}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleAdhdMode();
                }
              }}
              aria-label={`${
                adhdMode ? 'Disable' : 'Enable'
              } ADHD focus mode with reading spotlight that follows your mouse`}
              aria-pressed={adhdMode}
              role="switch"
              tabIndex={0}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 2,
                px: 3,
                bg: adhdMode ? 'primary' : 'muted',
                color: adhdMode ? 'background' : 'text',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bg: 'accent',
                  color: 'background',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                },
                '@media (max-width: 480px)': {
                  fontSize: '13px',
                  py: 1.5,
                  px: 2,
                },
              }}
            >
              <span sx={{ whiteSpace: 'nowrap' }}>
                {adhdMode ? 'Disable' : 'Enable'} ADHD Focus Mode
              </span>
            </button>
          </div>

          {/* Epileptic Mode Toggle */}
          <div sx={{ mb: 3 }}>
            <button
              onClick={toggleEpilepticMode}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleEpilepticMode();
                }
              }}
              aria-label={`${
                epilepticMode ? 'Disable' : 'Enable'
              } epilepsy-safe mode to disable animations and reduce flashing content`}
              aria-pressed={epilepticMode}
              role="switch"
              tabIndex={0}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 2,
                px: 3,
                bg: epilepticMode ? 'primary' : 'muted',
                color: epilepticMode ? 'background' : 'text',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bg: 'accent',
                  color: 'background',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                },
              }}
            >
              {epilepticMode ? 'Disable' : 'Enable'} Epilepsy-Safe Mode
            </button>
          </div>

          {/* Reset All Button */}
          <div sx={{ mb: 3 }}>
            <button
              onClick={resetAllSettings}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  resetAllSettings();
                }
              }}
              aria-label="Reset all accessibility settings to their default values"
              role="button"
              tabIndex={0}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 2,
                px: 3,
                bg: 'muted',
                color: 'text',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bg: 'accent',
                  color: 'background',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                },
              }}
            >
              Reset All Settings
            </button>
          </div>

          {/* Accessibility Statement Link */}
          <div sx={{ pt: 2, borderTop: '1px solid', borderColor: 'muted' }}>
            <a
              href="/accessibility-statement"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = '/accessibility-statement';
                }
              }}
              aria-label="View full accessibility statement page with detailed information about our accessibility features and compliance"
              role="link"
              tabIndex={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'primary',
                textDecoration: 'none',
                fontSize: '14px',
                padding: '8px 4px',
                borderRadius: '4px',
                '&:hover': {
                  textDecoration: 'underline',
                  bg: 'muted',
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: 'accent',
                  outlineOffset: '1px',
                  bg: 'muted',
                },
              }}
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      )}

      {/* Screen Reader Status Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        sx={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        {statusMessage}
      </div>
    </Fragment>
  );
};

export default AccessibilityWidget;
