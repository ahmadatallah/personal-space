% Intro Options
\ProvidesClass{deedy-resume-openfont}[2014/04/30 CV class]
\NeedsTeXFormat{LaTeX2e}
\DeclareOption{print}{\def\@cv@print{}}
\DeclareOption*{%
  \PassOptionsToClass{\CurrentOption}{article}
}
\ProcessOptions\relax
\LoadClass{article}

% Package Imports
\usepackage[hmargin=0.85cm, vmargin=0.85cm]{geometry}
\usepackage[hidelinks]{hyperref}

% Publications
\usepackage{cite}
\renewcommand\refname{\vskip -1.5cm}

% Color definitions
\usepackage[usenames,dvipsnames]{xcolor}
\definecolor{date}{HTML}{666666}
\definecolor{primary}{HTML}{2b2b2b}
\definecolor{headings}{HTML}{6A6A6A}
\definecolor{info}{HTML}{6A6A6A}
\definecolor{subheadings}{HTML}{333333}

% Set main fonts
\usepackage{fontspec}
\usepackage{fontawesome5}
\setmainfont[Color=primary, Path = fonts/generalsans/,BoldItalicFont=GeneralSans-BoldItalic,BoldFont=GeneralSans-Bold,ItalicFont=GeneralSans-Italic]{GeneralSans-Regular}
\setsansfont[Scale=MatchLowercase,Mapping=tex-text, Path = fonts/generalsans/]{GeneralSans-Extralight}

% Date command
\usepackage[absolute]{textpos}
\usepackage[UKenglish]{isodate}
\setlength{\TPHorizModule}{1mm}
\setlength{\TPVertModule}{1mm}
\newcommand{\lastupdated}{\begin{textblock}{60}(200,5)
\color{date}\fontspec[Path = fonts/generalsans/]{GeneralSans-Extralight}\fontsize{8pt}{10pt}\selectfont
Last Updated on \today

\color{date}\fontspec[Path = fonts/generalsans/]{GeneralSans-Extralight}\fontsize{8pt}{10pt}\selectfont
Hamburg, Germany
\end{textblock}}

% Name command
\newcommand{\namesection}[3]{
\raggedright{
\fontsize{40pt}{60pt}
\fontspec[Path = fonts/generalsans/]{GeneralSans-Light}\selectfont #1
\fontspec[Path = fonts/generalsans/]{GeneralSans-Bold}\selectfont #2
} \\[5pt]
\raggedright{
\color{headings}
\fontspec[Path = fonts/generalsans/]{GeneralSans-Light}\fontsize{11pt}{14pt}\selectfont #3}
\vspace{3pt}
}

% Section seperators
\usepackage{titlesec}
\titlespacing{\section}{0pt}{0pt}{0pt}
\titlespacing{\subsection}{0pt}{0pt}{0pt}
\newcommand{\sectionsep}{\vspace{8pt}}

% Headings command
\titleformat{\section}{\color{headings}
\scshape\fontspec[Path = fonts/generalsans/]{GeneralSans-Light}\fontsize{16pt}{24pt}\selectfont \raggedright\uppercase}{}{0em}{}

% Subeadings command
\titleformat{\subsection}{
\color{subheadings}\fontspec[Path = fonts/generalsans/]{GeneralSans-Bold}\fontsize{14pt}{12pt}\selectfont\bfseries\uppercase}{}{0em}{}

\newcommand{\runsubsection}[1]{
\color{subheadings}\fontspec[Path = fonts/generalsans/]{GeneralSans-Bold}\fontsize{12pt}{12pt}\selectfont\bfseries\uppercase {#1} \normalfont}

\newcommand{\subsectionsep}{\vspace{6pt}}

% Descriptors command
\newcommand{\descript}[1]{
\color{subheadings}\raggedright\scshape\fontspec[Path = fonts/generalsans/]{GeneralSans-Light}\fontsize{10pt}{12pt}\selectfont {#1 \\} \normalfont}

% Location command
\newcommand{\location}[1]{
\color{info}\raggedright\fontspec[Path = fonts/generalsans/]{GeneralSans-Bold}\fontsize{10pt}{12pt}\selectfont {#1\\} \normalfont}

% Bullet Lists with fewer gaps command
\newenvironment{tightemize}{
\vspace{-\topsep}\begin{itemize}\itemsep1pt \parskip0pt \parsep0pt}
{\end{itemize}\vspace{-\topsep}}

\geometry{paperwidth=28cm, paperheight=36cm}

