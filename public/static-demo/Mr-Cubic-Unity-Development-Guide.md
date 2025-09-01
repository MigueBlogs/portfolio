# Mr. Cubic - Unity Mobile Game Development Guide

## 📋 Resumen del Proyecto

**Mr. Cubic** es un juego de puzzle 3D basado en Tetris donde los jugadores colocan piezas polycube (1-3 bloques) en una cuadrícula 3x3x3 para completar planos y ganar puntos. El juego incluye un sistema heurístico inteligente de generación de piezas, mecánicas de bonus con cubos blancos (+1/+2 puntos), sistema de combos consecutivos, y está diseñado para dispositivos móviles.

### 🎮 Mecánicas Principales
- **Grid 3x3x3**: Cuadrícula tridimensional donde se colocan las piezas
- **Piezas polycube**: 1-3 bloques con rotaciones aleatorias en 24 orientaciones
- **Eliminación por planos**: Se eliminan planos completos (9 cubos) en X, Y, o Z
- **Sistema de puntos**: 10 puntos por colocación + 50 por cubo eliminado + 100 por plano
- **Cubos bonus blancos**: +1 y +2 puntos que otorgan piezas extra
- **Sistema de combos**: Multiplicadores por planos múltiples o consecutivos
- **Generación inteligente**: IA heurística que adapta las piezas al estado del tablero

---

## 🏗️ Fase 1: Configuración Inicial del Proyecto

### 1.1 Setup del Proyecto Unity

**Configuración recomendada:**
- **Unity Version**: 2022.3 LTS o superior
- **Template**: 3D Core
- **Platform**: Android/iOS
- **Rendering Pipeline**: URP (Universal Render Pipeline)
- **Input System**: New Input System

**Paquetes necesarios:**
```
- Universal RP
- Cinemachine
- TextMeshPro
- Mobile Notifications
- Unity Analytics
- Unity Cloud Build (opcional)
- DOTween (Asset Store - animaciones)
```

### 1.2 Estructura de Carpetas

```
Assets/
├── Scripts/
│   ├── Core/
│   ├── Game/
│   ├── UI/
│   ├── Audio/
│   ├── Input/
│   └── Utils/
├── Prefabs/
├── Materials/
├── Models/
├── Textures/
├── Audio/
├── Scenes/
└── Settings/
```

---

## 🎯 Fase 2: Desarrollo Core - Sistema de Grid 3D

### 2.1 Grid Manager

**Funcionalidades:**
- Representación 3D de la cuadrícula 3x3x3
- Detección de colisiones
- Renderizado de cubos ocupados
- Sistema de coordenadas mundo/grid

### 2.2 Cube Renderer

**Funcionalidades:**
- Renderizado de cubos individuales con caras visibles/ocultas
- Sistema de materiales por color
- Shading automático por orientación de cara
- Oclusión de caras interiores

### 2.3 Projection System

**Funcionalidades:**
- Sistema de proyección 3D a 2D
- Rotación de cámara con mouse/touch
- Proyección isométrica optimizada para mobile

---

## 🧩 Fase 3: Sistema de Piezas

### 3.1 Piece Generator

**Funcionalidades:**
- Generación de piezas polycube (1-3 bloques)
- Sistema de rotaciones 3D (24 orientaciones)
- Normalización de coordenadas locales
- Asignación de colores aleatorios

### 3.2 Smart Piece AI

**Funcionalidades:**
- Análisis heurístico del estado del tablero
- Generación de piezas óptimas, neutrales y aleatorias
- Sistema de pesos configurables
- Prevención de bloqueos y patrones repetitivos

### 3.3 Piece Preview System

**Funcionalidades:**
- Vista 3D de la pieza actual
- Vista 2D simplificada
- Preview de la siguiente pieza
- Sistema de múltiples opciones (modo bonus)

---

## ⚡ Fase 4: Sistema de Interacción Móvil

### 4.1 Touch Input Manager

**Funcionalidades:**
- Detección de toques y gestos
- Drag & drop con feedback visual
- Rotación de cámara con dos dedos
- Zoom con pellizco (pinch)

### 4.2 Ghost Placement System

**Funcionalidades:**
- Preview fantasma de la pieza durante drag
- Validación en tiempo real de posiciones válidas
- Highlight de planos que se completarían
- Feedback visual para posiciones inválidas

### 4.3 Piece Manipulation

**Funcionalidades:**
- Rotación manual de piezas (tap para rotar)
- Sistema de snap-to-grid
- Animaciones fluidas de colocación
- Cancelación de gestos (ESC/back button)

---

## 🏆 Fase 5: Sistema de Puntuación y Progresión

### 5.1 Score Manager

**Funcionalidades:**
- Cálculo de puntos por acción
- Sistema de combos y multiplicadores
- High score persistente
- Progreso hacia récord personal

### 5.2 Plane Elimination System

**Funcionalidades:**
- Detección de planos completos (X, Y, Z)
- Animación de eliminación de cubos
- Efecto de partículas por eliminación
- Cálculo de bonus por planos múltiples

### 5.3 Bonus Cube System

**Funcionalidades:**
- Generación probabilística de cubos blancos (+1/+2)
- Límite de cubos bonus simultáneos
- Queue de piezas bonus
- UI para mostrar piezas extra disponibles

---

## 🎨 Fase 6: Audio y Efectos Visuales

### 6.1 Audio Manager

**Funcionalidades:**
- Efectos de sonido por acción
- Música de fondo adaptativa
- Control de volumen por categoría
- Audio espacial 3D

### 6.2 Particle Effects

**Funcionalidades:**
- Efectos de eliminación de cubos
- Partículas de completión de plano
- Efectos de combo y nuevo récord
- Feedback visual para bonus

### 6.3 Animation System

**Funcionalidades:**
- Animaciones de colocación de piezas
- Transiciones de promoción de piezas
- Animaciones de UI (puntuación, combos)
- Efectos de game over

---

## 📱 Fase 7: UI y UX Móvil

### 7.1 Main Game UI

**Funcionalidades:**
- HUD con puntuación actual y récord
- Panel de pieza actual y siguiente
- Indicadores de progreso hacia récord
- Botones de pausa, restart, settings

### 7.2 Mobile-Optimized Layout

**Funcionalidades:**
- Layout responsivo para diferentes pantallas
- UI escalable para tablets y phones
- Orientación portrait/landscape
- Safe area handling (notch, etc.)

### 7.3 Game Over & Menus

**Funcionalidades:**
- Pantalla de game over con estadísticas
- Menú principal con opciones
- Sistema de settings (audio, controles)
- Tutorial interactivo

---

## 💾 Fase 8: Persistencia y Analytics

### 8.1 Save System

**Funcionalidades:**
- Guardado automático del high score
- Persistencia de configuraciones
- Sistema de backup en la nube (opcional)
- Compatibilidad cross-platform

### 8.2 Analytics Integration

**Funcionalidades:**
- Tracking de eventos de gameplay
- Métricas de retención y progresión
- A/B testing para balanceo
- Crash reporting

---

## 🚀 Fase 9: Optimización Mobile

### 9.1 Performance Optimization

**Funcionalidades:**
- Object pooling para cubos y partículas
- LOD system para vistas distantes
- Batching de materiales similares
- Optimización de draw calls

### 9.2 Memory Management

**Funcionalidades:**
- Gestión eficiente de texturas
- Compresión de assets
- Garbage collection optimization
- Loading screens para assets pesados

### 9.3 Battery Optimization

**Funcionalidades:**
- Frame rate adaptativo
- Pausa automática en background
- Reducción de efectos en batería baja
- Perfil de rendimiento configurable

---

## 📋 Prompts para GitHub Copilot

### 🎯 Prompt 1: Grid Manager Core

```
Crea un GridManager para Unity que represente una cuadrícula 3x3x3 para un juego tipo Tetris 3D. Necesito:

1. Una clase GridManager con un array 3D [3,3,3] que almacene CubeData (color, bonusType, pieceId)
2. Métodos para:
   - GetCube(x, y, z) -> CubeData
   - SetCube(x, y, z, CubeData) 
   - IsCubeEmpty(x, y, z) -> bool
   - ClearCube(x, y, z)
   - GetAllOccupiedPositions() -> List<Vector3Int>

3. Sistema de coordenadas donde (0,0,0) es esquina inferior-izquierda-frontal
4. Validación de bounds para todas las operaciones
5. Eventos cuando se modifica el grid (OnCubeChanged)
6. Método para convertir coordenadas world a grid y viceversa
7. Debug visual con Gizmos para mostrar la cuadrícula en Scene view

El GridManager debe ser un Singleton y usar Vector3Int para las posiciones del grid.
```

### 🎯 Prompt 2: Cube Renderer System

```
Crea un sistema de renderizado de cubos 3D para Unity que optimice el rendering de una cuadrícula 3x3x3:

1. CubeRenderer component que renderice un cubo con:
   - Material asignado por color
   - Oclusión automática de caras interiores (caras que tocan otros cubos)
   - Shading diferente por cara (top más claro, bottom más oscuro, sides intermedio)
   - Support para transparencia (cubos fantasma)

2. CubeVisibilityManager que:
   - Determine qué caras son visibles basándose en cubos adyacentes
   - Genere mesh procedural solo con caras visibles
   - Update automático cuando cambia el grid
   - Sistema de pooling para reutilizar cube renderers

3. MaterialManager que:
   - Mantenga un diccionario de materiales por color
   - Cree materiales dinámicamente si no existen
   - Soporte para cubos bonus blancos con labels "+1" o "+2"
   - Batch rendering de cubos del mismo material

4. Integration con GridManager para update automático
5. Performance optimizado para móviles (minimize draw calls)
```

### 🎯 Prompt 3: Piece Generation System

```
Implementa un sistema de generación de piezas polycube para un Tetris 3D en Unity:

1. Piece class que contenga:
   - List<Vector3Int> cells (posiciones locales relativas)
   - List<Color> colors (color por cada cubo)
   - string bonusType (null, "+1", "+2")
   - PieceType type (Single, Line, LShape)

2. PieceGenerator con métodos:
   - GenerateRandomPiece() que cree piezas de 1-3 cubos
   - Formas disponibles: punto, línea (2-3 cubos), L-shape (3 cubos)
   - Apply random 3D rotation (24 orientaciones posibles del cubo)
   - NormalizePiece() para que el mínimo en cada eje sea 0
   - CreateSingleCube(), CreateLine(), CreateLShape()

3. Rotation3D utility class con:
   - Static array de las 24 matrices de rotación 3D válidas
   - ApplyRotation(piece, rotationIndex) method
   - GetRandomRotation() -> rotationIndex

4. El sistema debe generar piezas donde cada pieza tiene un color único para todos sus cubos
5. 12% probabilidad de generar cubo blanco +1, 3% probabilidad de +2
6. Límite máximo de 4 puntos bonus simultáneos en el juego
```

### 🎯 Prompt 4: Smart AI Heuristic System

```
Crea un sistema de IA heurística para generar piezas inteligentes en un Tetris 3D:

1. BoardAnalyzer class que analice el estado del grid 3x3x3:
   - AnalyzePlanes() -> detectar planos X/Y/Z casi completos
   - CalculateOccupancy() -> porcentaje de ocupación del grid
   - FindCriticalAreas() -> áreas con riesgo de bloqueo
   - GetPlaneCompletionOpportunities() -> planos que pueden completarse

2. HeuristicPieceGenerator con configuración:
   - randomChance: 25%, optimalChance: 65%, neutralChance: 10%
   - Weights: planeCompletion(10.0), advancement(6.0), connectivity(4.0), centerBias(2.0)
   - avoidConsecutiveLine3: true, maxConsecutiveLine3: 2

3. Métodos principales:
   - GenerateSmartPiece(GridManager grid) -> Piece
   - ScorePiece(piece, boardState) -> float score
   - GenerateCandidatePieces(avoidLine3) -> List<Piece>
   - CanCompleteExactly(piece, emptySpaces) -> bool

4. Sistema de historial que evite patrones repetitivos:
   - Últimas 5 piezas generadas
   - Contador de líneas consecutivas
   - Penalty por repetir formas muy seguido

5. El sistema debe balancear challenge vs playability, ayudando cuando el jugador está en problemas pero manteniendo cierta dificultad
```

### 🎯 Prompt 5: Touch Input & Drag System

```
Implementa un sistema completo de input táctil para dispositivos móviles en Unity para el juego Mr. Cubic:

1. TouchInputManager que maneje:
   - Single touch para selección y drag de piezas
   - Two-finger rotation de la cámara 3D
   - Pinch-to-zoom
   - Tap para rotar pieza seleccionada
   - Long press para opciones adicionales

2. PieceDragController con funcionalidades:
   - StartDrag(piece) cuando se toca una pieza
   - UpdateDragPosition() que proyecte el touch a posición 3D del grid
   - ShowGhostPreview() que muestre la pieza translúcida en posición válida
   - SnapToGrid() para colocación precisa
   - CancelDrag() con gesto hacia afuera o botón back

3. CameraController para navegación 3D:
   - OrbitAroundGrid() con limits para evitar ángulos confusos
   - SmoothRotation con damping para movimiento fluido
   - AutoFraming que centre el grid 3x3x3 en pantalla
   - TouchZoom con límites mínimo/máximo

4. GhostRenderer que:
   - Muestre preview de la pieza durante drag
   - Cambie color según si la posición es válida (verde) o inválida (rojo)
   - Highlight de planos que se completarían con esa colocación
   - Smooth transitions entre posiciones válidas

5. Input debe funcionar bien en pantallas de 4" a 10+ pulgadas
```

### 🎯 Prompt 6: Plane Elimination & Score System

```
Desarrolla el sistema de eliminación de planos y puntuación para el Tetris 3D:

1. PlaneDetector class que detecte planos completos:
   - CheckCompletePlanes(GridManager grid) -> List<PlaneInfo>
   - PlaneInfo debe incluir: tipo (X/Y/Z), índice, List<Vector3Int> cubes
   - CheckXPlanes(), CheckYPlanes(), CheckZPlanes()
   - RemoveDuplicateCubes() para overlapping planes

2. ScoreManager con sistema de puntuación:
   - Base: 10 puntos por pieza colocada
   - 50 puntos por cubo eliminado
   - 100 puntos por plano completado
   - Multiplicadores: x2 por 2 planos simultáneos, x3 por 3+ planos
   - Combo bonus por planos consecutivos
   - Bonus especial por cubos blancos (+1/+2 puntos extra)

3. EliminationAnimator para efectos visuales:
   - FadeOutCubes() con partículas
   - PlaneCompletionEffect() con destellos
   - ComboAnimation() para multiplicadores
   - ScorePopup() que muestre puntos ganados flotando

4. BonusCubeManager para cubos blancos:
   - 12% probabilidad de generar +1, 3% de +2
   - Límite de 4 puntos bonus simultáneos en todo el juego
   - Queue de piezas extra cuando se eliminan cubos bonus
   - UI indicator para piezas bonus disponibles

5. HighScoreManager con persistencia:
   - SaveHighScore(), LoadHighScore()
   - ProgressBar hacia récord personal
   - NewRecordAnimation() cuando se supera
```

### 🎯 Prompt 7: Game State Manager

```
Crea un GameStateManager robusto que controle el flujo completo del juego:

1. GameStateManager como Singleton que maneje estados:
   - MainMenu, Playing, Paused, GameOver, Tutorial
   - State transitions con validación
   - SaveGameState() y LoadGameState()
   - Event system para cambios de estado

2. GameOverDetector que determine fin de juego:
   - CheckGameOver(currentPiece, nextPiece) -> bool
   - Verificar si alguna de las piezas actuales puede colocarse
   - Try all possible positions and rotations
   - Cache results para optimizar performance
   - ShowGameOverScreen() con estadísticas

3. PieceQueueManager para manejo de piezas:
   - CurrentPiece, NextPiece, BonusQueue
   - PromoteNextPiece() con animación
   - HandleBonusActivation() cuando se eliminan cubos blancos
   - ManageMultipleChoices() en modo bonus (hasta 5 opciones)

4. RestartManager que:
   - ResetGrid() limpiando todos los cubos
   - ResetScore() manteniendo high score
   - GenerateNewPieces() para empezar fresh
   - ResetHeuristics() limpiando historial de AI

5. Tutorial system integrado:
   - Step-by-step guidance
   - Highlight de elementos UI relevantes
   - Practice mode sin game over
   - Skip option para jugadores experimentados

6. Auto-save cada 30 segundos y en cambios de estado importantes
```

### 🎯 Prompt 8: UI System & Mobile Optimization

```
Diseña un sistema de UI completo optimizado para dispositivos móviles:

1. MainGameUI que incluya:
   - ScoreDisplay con animación de incremento
   - HighScorePanel con progress bar hacia récord
   - CurrentPieceViewer (vista 3D grande)
   - NextPiecePreview (vista small en esquina)
   - BonusOptionsPanel cuando hay múltiples piezas

2. ResponsiveUIManager para diferentes pantallas:
   - DetectScreenSize() y adjust layout accordingly
   - SafeAreaSupport() para notches y barras de navegación
   - OrientationSupport() (portrait preferido, landscape opcional)
   - ScaleUI() para densidades de pixel diferentes

3. AnimatedUIElements:
   - ScoreCounter con rolling numbers
   - ComboPopups que aparezcan y desaparezcan
   - PiecePromotionAnimation del next al current
   - ButtonPulseEffects para feedback táctil
   - ParticleUI para celebraciones (récords, combos grandes)

4. GameOverUI con estadísticas:
   - Final score display
   - High score comparison
   - Play again button
   - Share score functionality
   - Return to main menu

5. SettingsPanel:
   - Audio controls (SFX, Music volume)
   - Graphics quality options
   - Input sensitivity settings
   - Tutorial reset option
   - Credits y version info

6. Performance optimizations:
   - UI pooling para elementos que aparecen/desaparecen frecuentemente
   - Texture atlasing para UI sprites
   - Canvas optimization (separate canvases por update frequency)
```

### 🎯 Prompt 9: Audio Manager & Sound Design

```
Implementa un sistema de audio completo para el juego Mr. Cubic:

1. AudioManager singleton que controle:
   - SFX y Music channels separados
   - Volume controls independientes
   - 3D spatial audio para efectos en el grid
   - Audio pooling para evitar stutters
   - Fade in/out para transiciones suaves

2. SoundEffects necesarios:
   - PiecePlacement (different pitches por tipo de pieza)
   - PlaneCompletion (satisfying "clear" sound)
   - ComboEffects (escalating pitches para combos)
   - BonusCubeActivation (special chime)
   - GameOverSound (dramatic but not harsh)
   - UIClicks y Navigation sounds
   - NewRecordFanfare

3. BackgroundMusicManager:
   - Ambient music que no distraiga del gameplay
   - Adaptive music que acelere con combos altos
   - Smooth loops sin cortes perceptibles
   - Pause/resume functionality
   - Volume ducking durante SFX importantes

4. AudioSettings integration:
   - Master volume, SFX volume, Music volume sliders
   - Mute option que respete system mute switch
   - Save/load audio preferences
   - Accessibility support (visual indicators cuando audio muted)

5. 3D Audio features:
   - Piece placement sounds positioned en el grid
   - Elimination effects que "travel" desde cubos eliminados
   - Stereo panning basado en cámara position
   - Doppler effect sutil para moving pieces

Usa AudioSource pooling y evita garbage collection durante gameplay.
```

### 🎯 Prompt 10: Performance Optimization & Build

```
Implementa optimizaciones de performance completas para publicación móvil:

1. ObjectPoolingSystem para:
   - CubeRenderers (reutilizar en lugar de Instantiate/Destroy)
   - ParticleEffects para eliminaciones
   - UI elements que aparecen frecuentemente
   - AudioSources para SFX

2. RenderingOptimizations:
   - Batching de cubos con mismo material
   - LOD system: simplificar geometría en zoom out
   - Frustum culling para cubos fuera de vista
   - Occlusion culling para caras interiores
   - Texture compression optimizada por platform

3. MemoryManagement:
   - Garbage collection optimization (minimize allocations en gameplay loop)
   - Asset streaming para texturas grandes
   - Unload unused assets en scene transitions
   - Memory profiling tools integration

4. BatteryOptimization:
   - Adaptive frame rate (30fps cuando no hay input, 60fps durante interacción)
   - Background pause que detenga rendering
   - Power-saving mode que reduzca efectos
   - Thermal throttling detection

5. BuildOptimization:
   - Asset bundling por platform
   - Code stripping settings
   - Compression settings para APK/IPA size
   - Architecture targets (ARM64 primarily)

6. ProfilingTools setup:
   - Unity Profiler integration
   - Custom performance markers
   - Frame rate monitoring in release builds
   - Memory leak detection tools

Incluye build settings específicos para Android (API levels, permissions) e iOS (deployment targets, certificates).
```

---

## 🚀 Plan de Implementación Sugerido

### Semana 1-2: Fundación
- Setup del proyecto Unity
- GridManager y CubeRenderer básicos
- Sistema de coordenadas y proyección

### Semana 3-4: Mecánicas Core
- Generador de piezas básico
- Sistema de drag & drop
- Detección de colisiones y placement

### Semana 5-6: Eliminación y Puntuación
- Detección de planos completos
- Sistema de scoring
- Efectos visuales básicos

### Semana 7-8: AI Heurística
- Análisis de tablero
- Generación inteligente de piezas
- Sistema de dificultad adaptativa

### Semana 9-10: Polish & UI
- UI completa para móviles
- Sistema de audio
- Animaciones y efectos

### Semana 11-12: Optimización
- Performance optimization
- Testing en dispositivos reales
- Bug fixes y polish final

---

## 📱 Consideraciones Específicas Móviles

### Input Táctil
- **Gestos intuitivos**: Tap para seleccionar, drag para mover, tap nuevamente para rotar
- **Feedback háptico**: Vibración sutil en colocaciones exitosas
- **Touch targets**: Mínimo 44px para elementos interactivos

### Performance
- **Target**: 60 FPS en dispositivos de gama media
- **Batería**: Optimizar para sesiones de 30+ minutos sin calentamiento excesivo
- **RAM**: Mantener uso bajo 150MB en dispositivos de 2GB RAM

### UI/UX
- **One-handed play**: Controles accesibles con pulgar
- **Orientación**: Portrait como principal, landscape opcional
- **Safe areas**: Soporte completo para notches y barras

### Monetización (Opcional)
- **Ads opcionales**: Video rewarded para piezas extra
- **In-app purchases**: Themes, efectos visuales premium
- **Sin pay-to-win**: Mantener gameplay justo y skill-based

---

## 🔧 Herramientas y Assets Recomendados

### Assets de Unity
- **DOTween**: Animaciones fluidas
- **Odin Inspector**: Editor tools mejorado
- **Mobile Optimized Shaders**: Para mejor performance
- **Simple UI Effects**: Efectos de UI sin impacto en performance

### Herramientas Externas
- **Blender**: Para modelado de cubos custom si es necesario
- **FMOD/Wwise**: Audio avanzado (opcional, Unity Audio básico puede ser suficiente)
- **Unity Analytics**: Métricas de gameplay
- **Firebase**: Leaderboards y achievements

---

## 📊 Métricas de Éxito

### KPIs Técnicos
- **Frame Rate**: >55 FPS promedio en dispositivos mid-range
- **Load Time**: <3 segundos desde tap del ícono a gameplay
- **Crash Rate**: <1% en las primeras 24 horas
- **Battery Drain**: <10% por 30 minutos de juego

### KPIs de Gameplay
- **Session Length**: 8-15 minutos promedio
- **Retention D1**: >40%
- **High Score Distribution**: Curva progresiva sin picos artificiales
- **Tutorial Completion**: >80%

---

Este documento te proporciona una hoja de ruta completa para convertir tu prototipo HTML de Mr. Cubic en un juego Unity móvil profesional. Cada prompt está diseñado para ser copiado directamente a GitHub Copilot y generar código funcional que puedas integrar paso a paso.

¿Te gustaría que profundice en alguna sección específica o necesitas prompts adicionales para algún aspecto particular del desarrollo?
