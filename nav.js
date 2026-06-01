/* ── GOOGLE ANALYTICS 4 ────────────────────────────────────────────────────
   Measurement ID: G-F7TMYTM75E
   Loaded asynchronously — does not block page render.                       */
(function(){
  var s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=G-F7TMYTM75E';
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config','G-F7TMYTM75E');
})();

(function () {
  'use strict';

  /* ── CALCULATORS ───────────────────────────────────────────────────────────
     Each item:
       n    = name (sidebar + home)
       u    = URL
       d    = short description (sidebar)
       hd   = home description (optional; falls back to d)
       icon = emoji for home card
       badge= true → shows "new"
  ─────────────────────────────────────────────────────────────────────────── */
  var CALCS = [
    { cat: '💪 Health & Fitness', title: 'Health & Fitness', title_es: 'Salud y Ejercicio', title_pt: 'Saúde e Fitness', title_fr: 'Santé & Fitness', slug: 'health', label: 'Health', label_es: 'Salud', label_pt: 'Saúde', label_fr: 'Santé', desc: 'BMI, body fat, calories, sleep, hydration, protein and more.', items: [
      { n: 'BMI Calculator',           n_es: 'Calculadora de IMC',              u: '/bmi/',            icon:'⚖️', d: 'Body Mass Index — WHO ranges',                d_es: 'Índice de Masa Corporal — rangos OMS',          hd:'Calculate your BMI and find out if you\'re at a healthy weight according to WHO guidelines.' },
      { n: 'Daily Calories (BMR)',     n_es: 'Calorías Diarias (TMB)',          u: '/bmr/',            icon:'🔥', d: 'Basal metabolic rate and TDEE',               d_es: 'Tasa metabólica basal y TDEE',                  hd:'How many calories do you need per day? Calculate your BMR and TDEE based on activity level.' },
      { n: 'Body Fat Calculator',      n_es: 'Grasa Corporal',                  u: '/body-fat/',       icon:'📊', badge:true, d: 'US Navy and BMI methods',          d_es: 'Métodos US Navy e IMC',                         hd:'Calculate your body fat percentage using the US Navy formula and the BMI method.' },
      { n: 'Ideal Weight',             n_es: 'Peso Ideal',                      u: '/ideal-weight/',   icon:'🎯', badge:true, d: 'Healthy weight range by height',   d_es: 'Rango de peso saludable por altura',            hd:'Find your ideal weight range based on height using Hamwi, Devine, Robinson and Miller formulas.' },
      { n: 'Calories Burned',          n_es: 'Calorías Quemadas',               u: '/calories-burned/',icon:'🏃', badge:true, d: 'By activity, weight and duration', d_es: 'Por actividad, peso y duración',                hd:'Estimate calories burned during exercise or daily activities based on your weight and duration.' },
      { n: 'Sleep Calculator',         n_es: 'Calculadora de Sueño',            u: '/sleep/',          icon:'😴', badge:true, d: 'Best bedtime and wake-up times',   d_es: 'Mejor horario para dormir y despertar',         hd:'Find the best times to sleep or wake up based on 90-minute sleep cycles to feel refreshed.' },
      { n: 'Heart Rate Zones',         n_es: 'Zonas de Frecuencia Cardíaca',    u: '/heart-rate/',     icon:'❤️', badge:true, d: 'Training zones from max HR',       d_es: 'Zonas de entrenamiento por FC máxima',          hd:'Calculate your heart rate training zones from your age or measured maximum heart rate.' },
      { n: 'Pregnancy Due Date',       n_es: 'Fecha de Parto',                  u: '/pregnancy/',      icon:'🤰', badge:true, d: 'EDD from last period or conception',d_es: 'FPP desde última menstruación o concepción',    hd:'Calculate your estimated due date (EDD) from your last menstrual period or conception date.' },
      { n: '1RM Calculator',           n_es: 'Calculadora 1RM',                 u: '/1rm/',            icon:'🏋️', d: 'One-rep max by formula',                    d_es: 'Máxima repetición por fórmula',                 hd:'Estimate your one-repetition maximum for any exercise using proven formulas.' },
      { n: 'Weight Loss Calculator',   n_es: 'Calculadora de Adelgazamiento',   u: '/weight-loss/',    icon:'📉', badge:true, d: 'Time to reach your goal weight',  d_es: 'Tiempo para llegar a tu peso objetivo',         hd:'How long to lose weight? Calculate time to goal based on your metabolism and activity.' },
      { n: 'Daily Hydration',          n_es: 'Hidratación Diaria',              u: '/hydration/',      icon:'💧', badge:true, d: 'How much water do you need?',      d_es: '¿Cuánta agua necesitás por día?',               hd:'Calculate your daily water intake based on your weight, activity and climate.' },
      { n: 'Daily Protein',            n_es: 'Proteína Diaria',                 u: '/protein/',        icon:'🥩', badge:true, d: 'Grams per day by goal and activity',d_es: 'Gramos por día según objetivo y actividad',     hd:'How much protein do you need per day? Calculate based on your goal and training level.' },
    ]},
    { cat: '💰 Finance & Money', title: 'Finance & Money', title_es: 'Finanzas y Dinero', title_pt: 'Finanças e Dinheiro', title_fr: 'Finances & Argent', slug: 'finance', label: 'Finance', label_es: 'Finanzas', label_pt: 'Finanças', label_fr: 'Finances', desc: 'Mortgage, compound interest, loans, VAT, salary, fuel and more.', items: [
      { n: 'Mortgage Calculator',      n_es: 'Calculadora de Hipoteca',         u: '/mortgage/',       icon:'🏠', badge:true, d: 'Monthly payment and amortization',  d_es: 'Cuota mensual y amortización',                  hd:'Calculate your monthly mortgage payment, total interest and full amortization schedule.' },
      { n: 'Compound Interest',        n_es: 'Interés Compuesto',               u: '/compound-interest/',icon:'📈', d: 'Grow savings and investments',           d_es: 'Crecé tus ahorros e inversiones',               hd:'Project your savings growth with compound interest. See how money multiplies over time.' },
      { n: 'Loan Calculator',          n_es: 'Calculadora de Préstamo',         u: '/loan/',           icon:'🏦', d: 'Monthly payment and total interest',         d_es: 'Cuota mensual e interés total',                 hd:'Calculate your monthly payment, total interest and full cost for any loan.' },
      { n: 'VAT Calculator',           n_es: 'Calculadora de IVA',              u: '/vat/',            icon:'🧾', badge:true, d: 'Add or remove VAT from any price', d_es: 'Agregar o quitar IVA de cualquier precio',      hd:'Add or remove value-added tax (VAT/IVA) from any price. Adjust the rate to your country.' },
      { n: 'Discount Calculator',      n_es: 'Calculadora de Descuentos',       u: '/discount/',       icon:'🏷️', badge:true, d: 'Sale price and savings amount',   d_es: 'Precio de oferta y ahorro',                     hd:'Calculate the discounted price, amount saved and effective discount percentage instantly.' },
      { n: 'Fuel Cost Calculator',     n_es: 'Costo de Combustible',            u: '/fuel/',           icon:'⛽', badge:true, d: 'Trip cost by distance and L/100km', d_es: 'Costo del viaje por distancia y L/100km',       hd:'Calculate the total fuel cost for any trip based on distance, fuel consumption and price.' },
      { n: 'Salary Calculator',        n_es: 'Calculadora de Sueldo',           u: '/salary/',         icon:'💼', badge:true, d: 'Hourly, monthly and annual conversions', d_es: 'Conversión horaria, mensual y anual',      hd:'Convert between hourly, daily, weekly, monthly and annual salary figures instantly.' },
      { n: 'ROI Calculator',           n_es: 'Calculadora de ROI',              u: '/roi/',            icon:'📊', badge:true, d: 'Return on investment and payback', d_es: 'Retorno de inversión y período de recupero',    hd:'Calculate the return on investment (ROI) and payback period for any project or investment.' },
      { n: 'Inflation Calculator',     n_es: 'Calculadora de Inflación',        u: '/inflation/',      icon:'💸', badge:true, d: 'Purchasing power over time',        d_es: 'Poder adquisitivo a lo largo del tiempo',       hd:'See how inflation erodes purchasing power and calculate the real value of money over time.' },
      { n: 'Savings Calculator',       n_es: 'Calculadora de Ahorro',           u: '/savings/',        icon:'💰', badge:true, d: 'When do you reach your goal?',     d_es: '¿Cuándo alcanzás tu meta?',                     hd:'Calculate how long to reach your savings goal with monthly contributions and interest.' },
      { n: 'Profit Margin',            n_es: 'Margen de Ganancia',              u: '/margin/',         icon:'📉', badge:true, d: 'Selling price, margin and markup', d_es: 'Precio de venta, margen y markup',              hd:'Calculate profit margin, markup and selling price for your products.' },
      { n: 'Tip Calculator',           n_es: 'Calculadora de Propina',          u: '/tip/',            icon:'💳', badge:true, d: 'Split bills and calculate tips',    d_es: 'Dividir cuentas y calcular propinas',           hd:'Calculate tips and split restaurant bills between any number of people.' },
      { n: 'Aguinaldo / SAC',          n_es: 'Aguinaldo / SAC',                 u: '/aguinaldo/',      icon:'💵', badge:true, d: 'Argentine 13th salary (SAC)',       d_es: 'SAC argentino: 13.º sueldo',                    hd:'Calculá tu aguinaldo (SAC) en Argentina según tu mejor remuneración del semestre.', countries:['AR'] },
      { n: 'Sueldo Neto (Argentina)',  n_es: 'Sueldo Neto (Argentina)',          u: '/sueldo-neto/',    icon:'📋', badge:true, d: 'Bruto a neto con deducciones AFIP', d_es: 'Bruto a neto con deducciones AFIP',            hd:'Calculá tu sueldo neto en Argentina con aportes y contribuciones actualizados.', countries:['AR'] },
    ]},
    { cat: '🔢 Math & Numbers', title: 'Math & Numbers', title_es: 'Matemáticas', title_pt: 'Matemática', title_fr: 'Mathématiques', slug: 'math', label: 'Math', label_es: 'Mates', label_pt: 'Matemática', label_fr: 'Maths', desc: 'Percentages, fractions, statistics, triangles, base converter and more.', items: [
      { n: 'Percentage Calculator',    n_es: 'Calculadora de Porcentajes',      u: '/percentage/',     icon:'%',  badge:true, d: 'X% of Y, changes, increases, discounts', d_es: 'X% de Y, cambios, aumentos, descuentos',  hd:'X% of Y, what % is X of Y, percentage change, increases and discounts — all in one.' },
      { n: 'Scientific Calculator',    n_es: 'Calculadora Científica',          u: '/scientific/',     icon:'🔬', badge:true, d: 'Trig, logs, powers and constants',  d_es: 'Trig, logaritmos, potencias y constantes',      hd:'Full scientific calculator with trigonometry, logarithms, powers, roots and physical constants.' },
      { n: 'Statistics Calculator',    n_es: 'Calculadora de Estadística',      u: '/statistics/',     icon:'📈', badge:true, d: 'Mean, median, mode, std deviation', d_es: 'Media, mediana, moda, desviación estándar',     hd:'Calculate mean, median, mode, range, standard deviation and variance for any dataset.' },
      { n: 'Fraction Calculator',      n_es: 'Calculadora de Fracciones',       u: '/fractions/',      icon:'½',  badge:true, d: 'Add, subtract, multiply, divide',   d_es: 'Sumar, restar, multiplicar, dividir',           hd:'Add, subtract, multiply and divide fractions with step-by-step solutions and simplification.' },
      { n: 'Triangle Calculator',      n_es: 'Calculadora de Triángulos',       u: '/triangle/',       icon:'📐', badge:true, d: 'Sides, angles and area',            d_es: 'Lados, ángulos y área',                         hd:'Solve any triangle from sides, angles or area using the law of sines, cosines and Heron\'s formula.' },
      { n: 'Number Base Converter',    n_es: 'Conversor de Bases',              u: '/base-converter/', icon:'🔢', badge:true, d: 'Binary, octal, decimal, hex',       d_es: 'Binario, octal, decimal, hexadecimal',          hd:'Convert numbers between binary (base 2), octal (base 8), decimal and hexadecimal (base 16).' },
      { n: 'Rule of Three',            n_es: 'Regla de Tres',                   u: '/rule-of-three/',  icon:'✖️', badge:true, d: 'Direct and inverse proportion',     d_es: 'Proporción directa e inversa',                  hd:'Direct and inverse proportion. Enter three values and the fourth appears instantly.' },
      { n: 'Unit Converter',           n_es: 'Conversor de Unidades',           u: '/unit-converter/', icon:'🔄', badge:true, d: 'Length, weight, temperature, speed and more', d_es: 'Longitud, peso, temperatura, velocidad y más', hd:'Convert length, weight, temperature, speed, area, volume, time and digital units.' },
      { n: 'Geometry Calculator',      n_es: 'Calculadora de Geometría',        u: '/geometry/',       icon:'📐', badge:true, d: 'Area, perimeter, volume — all shapes', d_es: 'Área, perímetro, volumen — todas las figuras',  hd:'Smart geometry solver: enter any known property of a shape and the rest are calculated automatically. Square, circle, rectangle, triangle, cube, sphere, pyramid and cylinder.' },
      { n: 'LCM & GCD Calculator',     n_es: 'MCM y MCD',                       u: '/lcm/',            icon:'🔢', badge:true, d: 'Least common multiple and greatest common divisor', d_es: 'Mínimo común múltiplo y máximo común divisor', hd:'Calculate the Least Common Multiple (LCM) and Greatest Common Divisor (GCD) for any set of whole numbers, with prime factorization.' },
      { n: 'Word Counter',             n_es: 'Contador de Palabras',            u: '/word-counter/',   icon:'📝', badge:true, d: 'Words, characters, sentences, reading time', d_es: 'Palabras, caracteres, oraciones, tiempo de lectura', hd:'Real-time word and character counter. Count words, characters, sentences, paragraphs and get an estimated reading time for any text.' },
      { n: 'Weighted Average',         n_es: 'Promedio Ponderado',              u: '/weighted-average/',icon:'⚖️', badge:true, d: 'GPA and weighted grade calculator',  d_es: 'Promedio ponderado de notas y calificaciones',  hd:'Calculate your weighted average or GPA. Add subjects with their grade and weight. Supports 0–10, 0–100 and 0–20 grade scales.' },
    ]},
    { cat: '📅 Dates & Time', title: 'Dates & Time', title_es: 'Fechas y Tiempo', title_pt: 'Datas e Tempo', title_fr: 'Dates & Temps', slug: 'dates', label: 'Dates', label_es: 'Fechas', label_pt: 'Datas', label_fr: 'Dates', desc: 'Age, days, countdown, timer, working hours, clock and more.', items: [
      { n: 'Age Calculator',           n_es: 'Calculadora de Edad',             u: '/age/',            icon:'🎂', d: 'Exact age in years, months and days',      d_es: 'Edad exacta en años, meses y días',             hd:'Calculate exact age in years, months and days from any birth date.' },
      { n: 'Days Between Dates',       n_es: 'Días Entre Fechas',               u: '/days/',           icon:'🗓️', d: 'Calendar or working days between dates',  d_es: 'Días calendarios o hábiles entre fechas',       hd:'How many days between two dates? Also calculates working days.' },
      { n: 'Timer / Stopwatch',        n_es: 'Temporizador / Cronómetro',       u: '/timer/',          icon:'⏱️', badge:true, d: 'Countdown and stopwatch modes', d_es: 'Modos cuenta regresiva y cronómetro',           hd:'Online countdown timer and stopwatch. Set any time and count down, or measure elapsed time.' },
      { n: 'Countdown to Date',        n_es: 'Cuenta Regresiva',                u: '/countdown/',      icon:'⏳', badge:true, d: 'Days, hours, minutes to any event', d_es: 'Días, horas, minutos para cualquier evento',    hd:'Count down the exact time remaining to any future date — event, birthday, holiday, deadline.' },
      { n: 'Working Hours Calculator', n_es: 'Horas Trabajadas',                u: '/work-hours/',     icon:'📋', badge:true, d: 'Hours worked and overtime',      d_es: 'Horas trabajadas y horas extra',                hd:'Calculate total hours worked in a day or week, including overtime and break deductions.' },
      { n: 'Day of the Week',          n_es: 'Día de la Semana',                u: '/day-of-week/',    icon:'📆', d: 'What day was any date?',                   d_es: '¿Qué día fue cualquier fecha?',                 hd:'Enter any date and find out what day of the week it was or will be.' },
      { n: 'Clock',                    n_es: 'Reloj',                           u: '/clock/',          icon:'🕐', d: 'Real-time clock, full-screen mode',        d_es: 'Reloj en tiempo real, pantalla completa',       hd:'Digital real-time clock with date, timezone and full-screen mode.' },
      { n: 'Life in Numbers',          n_es: 'La Vida en Números',              u: '/life/',           icon:'🤯', badge:true, d: 'Heartbeats, steps, blinks — live', d_es: 'Latidos, pasos, parpadeos — en vivo',          hd:'Heartbeats, blinks, steps and more — live counters of your life since birth.' },
    ]},
    { cat: '🎮 Games & Tests', title: 'Games & Tests', title_es: 'Juegos y Tests', title_pt: 'Jogos e Testes', title_fr: 'Jeux & Tests', slug: 'games', label: 'Games', label_es: 'Juegos', label_pt: 'Jogos', label_fr: 'Jeux', desc: 'Reaction time, typing speed, CPS test, memory, keyboard and more.', items: [
      { n: 'Reaction Time Test',       n_es: 'Test de Tiempo de Reacción',      u: '/reaction-time/',  icon:'⚡', badge:true, d: 'How fast are your reflexes?',     d_es: '¿Qué tan rápidos son tus reflejos?',            hd:'Measure your reaction time in milliseconds. Do you have cat reflexes?' },
      { n: 'Typing Speed Test',        n_es: 'Velocidad de Escritura',          u: '/typing/',         icon:'⌨️', badge:true, d: 'Words per minute and accuracy',   d_es: 'Palabras por minuto y precisión',               hd:'Test your typing speed in words per minute (WPM) and measure your accuracy.' },
      { n: 'CPS Test',                 n_es: 'Test de CPS',                     u: '/cps/',            icon:'🖱️', badge:true, d: 'Clicks per second — 5, 10 or 30s',d_es: 'Clics por segundo — 5, 10 o 30s',               hd:'How many clicks per second can you do? Choose the time and find out.' },
      { n: 'Memory Test',              n_es: 'Test de Memoria',                 u: '/memory/',         icon:'🧠', badge:true, d: 'Test your short-term memory span', d_es: 'Ponete a prueba con secuencias de números',     hd:'Test your short-term memory by remembering sequences of numbers or patterns.' },
      { n: 'Keyboard Tester',          n_es: 'Tester de Teclado',               u: '/keyboard/',       icon:'💻', badge:true, d: 'Check that every key works',      d_es: 'Comprobá que todas las teclas funcionen',       hd:'Press each key and check that your keyboard responds correctly.' },
      { n: 'Random Generator',         n_es: 'Generador Aleatorio',             u: '/random/',         icon:'🎰', badge:true, d: 'Numbers, letters or custom lists', d_es: 'Números, letras o listas personalizadas',       hd:'Generate random numbers, letters or items from your own list. With or without repetition.' },
      { n: 'Zodiac Sign',              n_es: 'Signo del Zodiaco',               u: '/zodiac/',         icon:'♈', d: 'Your full zodiac sign',                      d_es: 'Tu signo zodiacal completo',                    hd:'Enter your birth date and discover your zodiac sign with a complete description.' },
    ]},
    { cat: '⚽ World Cup 2026', title: 'World Cup 2026', title_es: 'Copa del Mundo 2026', title_pt: 'Copa do Mundo 2026', title_fr: 'Coupe du Monde 2026', slug: 'world-cup', label: 'World Cup', label_es: 'Copa 2026', label_pt: 'Copa 2026', label_fr: 'Coupe 2026', desc: 'Everything about the 2026 FIFA World Cup.', items: [
      { n: 'World Cup 2026 Countdown', n_es: 'Cuenta Regresiva al Mundial 2026', u: '/world-cup/',     icon:'🏆', badge:true, d: 'Live countdown to June 11, 2026', d_es: 'Cuenta regresiva en vivo al 11 de junio de 2026', hd:'Real-time countdown to the opening match of the 2026 FIFA World Cup in Mexico City.' },
    ]},
    { cat: '🪙 Crypto', title: 'Crypto', title_es: 'Cripto', title_pt: 'Cripto', title_fr: 'Crypto', slug: 'crypto', label: 'Crypto', label_es: 'Cripto', label_pt: 'Cripto', label_fr: 'Crypto', desc: 'DCA, P&L, portfolio and more crypto calculators.', items: [
      { n: 'Crypto DCA Calculator',    n_es: 'Calculadora DCA Cripto',          u: '/crypto-dca/',     icon:'📉', badge:true, d: 'Dollar-cost average price',        d_es: 'Precio promedio de compra',                     hd:'Calculate your average purchase price when dollar-cost averaging into any cryptocurrency.', countries:['AR','global'] },
      { n: 'Crypto P&L Calculator',    n_es: 'P&G Cripto',                      u: '/crypto-pl/',      icon:'💹', badge:true, d: 'Profit and loss on trades',        d_es: 'Ganancia y pérdida en operaciones',              hd:'Calculate your profit or loss on any crypto trade including fees and taxes.', countries:['AR','global'] },
    ]},
    { cat: '🛍️ eCommerce', title: 'eCommerce', title_es: 'eCommerce', title_pt: 'eCommerce', title_fr: 'eCommerce', slug: 'ecommerce', label: 'eCommerce', label_es: 'eCommerce', label_pt: 'eCommerce', label_fr: 'eCommerce', desc: 'Margin, ROAS, projections and more for online sellers.', items: [
      { n: 'eCommerce Margin',         n_es: 'Margen eCommerce',                u: '/ecommerce/margen/', icon:'📦', badge:true, d: 'ML, Tienda Nube, Shopify margin', d_es: 'Margen en ML, Tienda Nube, Shopify',           hd:'Calculate your net margin on Mercado Libre, Tienda Nube, Shopify and other platforms.', countries:['AR','MX','CL','CO','BR'] },
      { n: 'eCommerce KPIs',           n_es: 'KPIs eCommerce',                  u: '/ecommerce/kpis/',   icon:'📊', badge:true, d: 'ROAS, CAC, LTV, conversion rate', d_es: 'ROAS, CAC, LTV, tasa de conversión',         hd:'Calculate key eCommerce metrics: ROAS, CAC, LTV, conversion rate and more.', countries:['AR','global'] },
      { n: 'Business Projection',      n_es: 'Proyección de Negocio',           u: '/ecommerce/proyeccion/', icon:'🚀', badge:true, d: 'Revenue and profit forecast',  d_es: 'Proyección de ingresos y ganancias',          hd:'Project your eCommerce revenue, costs and profit over 12 months.', countries:['AR','global'] },
      { n: 'China Shipping Cost',      n_es: 'Envío desde China',               u: '/ecommerce/envio-china/', icon:'🚢', badge:true, d: 'Air and sea freight from China', d_es: 'Flete aéreo y marítimo desde China',        hd:'Estimate the cost of importing products from China by air or sea freight.', countries:['AR','global'] },
    ]},
    { cat: '🚗 Cars & Fuel', title: 'Cars & Fuel', title_es: 'Autos y Combustible', title_pt: 'Carros e Combustível', title_fr: 'Voitures & Carburant', slug: 'autos', label: 'Cars', label_es: 'Autos', label_pt: 'Carros', label_fr: 'Voitures', desc: 'Fuel cost, vehicle tax, service and more.', items: [
      { n: 'Fuel Cost Calculator',     n_es: 'Costo de Combustible',            u: '/fuel/',           icon:'⛽', badge:true, d: 'Trip cost by distance and consumption', d_es: 'Costo del viaje por distancia y consumo',   hd:'Calculate the total fuel cost for any trip based on distance, consumption and fuel price.' },
      { n: 'Nafta Calculator (AR)',    n_es: 'Calculadora de Nafta (AR)',        u: '/nafta/',          icon:'🚗', badge:true, d: 'Argentine fuel cost with car models',   d_es: 'Costo de combustible en Argentina por modelo', hd:'Calculá el costo de tu viaje en Argentina con precios actualizados y tu modelo de auto.', countries:['AR'] },
      { n: 'Vehicle Tax (AR)',         n_es: 'Patente (Argentina)',              u: '/patente/',        icon:'📋', badge:true, d: 'Argentine annual vehicle tax',          d_es: 'Impuesto anual al vehículo en Argentina',   hd:'Calculá el valor de la patente de tu auto en Argentina según provincia y año.', countries:['AR'] },
      { n: 'Car Service (AR)',         n_es: 'Service del Auto (AR)',            u: '/service/',        icon:'🔧', badge:true, d: 'Oil, filters and service estimate',      d_es: 'Aceite, filtros y costo de service',        hd:'Estimá el costo del service de tu auto en Argentina con precios de mano de obra y repuestos.', countries:['AR'] },
    ]},
    { cat: '🏠 Home & Property', title: 'Home & Property', title_es: 'Hogar y Propiedad', title_pt: 'Casa e Imóveis', title_fr: 'Maison & Immobilier', slug: 'hogar', label: 'Home', label_es: 'Hogar', label_pt: 'Casa', label_fr: 'Maison', desc: 'Rent, expenses, home improvements and more.', items: [
      { n: 'Home Renovation (AR)',     n_es: 'Reforma del Hogar (AR)',           u: '/reforma/',        icon:'🏗️', badge:true, d: 'Materials and labor estimate',          d_es: 'Presupuesto de materiales y mano de obra',  hd:'Estimá el costo de una reforma del hogar en Argentina con precios actuales de mano de obra y materiales.', countries:['AR'] },
      { n: 'HOA Fees (AR)',            n_es: 'Expensas (Argentina)',              u: '/expensas/',       icon:'🏢', badge:true, d: 'Monthly building expenses',             d_es: 'Expensas del edificio o consorcio',         hd:'Calculá las expensas de tu edificio o consorcio en Argentina.', countries:['AR'] },
    ]},
    { cat: '⚖️ Legal & Labor', title: 'Legal & Labor', title_es: 'Legal y Laboral', title_pt: 'Legal e Trabalhista', title_fr: 'Droit & Travail', slug: 'legal', label: 'Legal', label_es: 'Legal', label_pt: 'Legal', label_fr: 'Droit', desc: 'Severance, payroll, taxes and more labor calculators.', items: [
      { n: 'Severance Pay (AR)',       n_es: 'Indemnización (Argentina)',         u: '/indemnizacion/',  icon:'⚖️', badge:true, d: 'Argentine labor law severance',         d_es: 'Despido sin causa — Ley de Contrato de Trabajo', hd:'Calculá la indemnización por despido sin causa en Argentina según la Ley de Contrato de Trabajo.', countries:['AR'] },
      { n: 'Monotributo (AR)',         n_es: 'Monotributo (Argentina)',           u: '/monotributo/',    icon:'🧾', badge:true, d: 'Category and monthly fee',              d_es: 'Categoría y cuota mensual',                 hd:'Calculá tu categoría de Monotributo y cuota mensual según la facturación anual en Argentina.', countries:['AR'] },
      { n: 'Payroll Settlement (AR)',  n_es: 'Liquidación de Haberes (AR)',       u: '/liquidacion/',    icon:'📋', badge:true, d: 'Full payroll liquidation',              d_es: 'Liquidación completa de haberes',           hd:'Calculá la liquidación de haberes completa en Argentina incluyendo SAC y vacaciones.', countries:['AR'] },
      { n: 'AFIP Withholdings (AR)',   n_es: 'Retenciones AFIP (AR)',             u: '/retenciones/',    icon:'🏦', badge:true, d: 'AFIP/ARCA retention calculator',        d_es: 'Retenciones de AFIP/ARCA sobre pagos',      hd:'Calculá las retenciones de AFIP/ARCA sobre pagos y facturas en Argentina.', countries:['AR'] },
      { n: 'Card Installments (AR)',   n_es: 'Cuotas con Tarjeta (AR)',           u: '/cuotas/',         icon:'💳', badge:true, d: 'Cost of paying in installments',        d_es: 'Costo real de pagar en cuotas',             hd:'Calculá el costo real de pagar en cuotas con tarjeta de crédito en Argentina.', countries:['AR'] },
    ]},
    { cat: '💱 Finance (AR)', title: 'Finance (Argentina)', title_es: 'Finanzas (Argentina)', title_pt: 'Finanças (Argentina)', title_fr: 'Finances (Argentine)', slug: 'finanzas', label: 'Finanzas AR', label_es: 'Finanzas AR', label_pt: 'Finanças AR', label_fr: 'Finances AR', desc: 'Argentine-specific financial calculators.', items: [
      { n: 'Fixed-Term Deposit (AR)',  n_es: 'Plazo Fijo (Argentina)',           u: '/plazo-fijo/',     icon:'💰', badge:true, d: 'Savings return with Argentine rates',   d_es: 'Rendimiento con tasas argentinas',           hd:'Simulá el rendimiento de un plazo fijo en Argentina con tasas actualizadas de los principales bancos.', countries:['AR'] },
      { n: 'Currency Converter (AR)',  n_es: 'Divisas (Argentina)',              u: '/divisas/',        icon:'💵', badge:true, d: 'Blue dollar, MEP and official rates',   d_es: 'Dólar blue, MEP y tipo de cambio oficial',  hd:'Convertí entre pesos y dólares con el tipo de cambio oficial, blue, MEP y CCL actualizados.', countries:['AR'] },
      { n: 'Purchasing Power (AR)',    n_es: 'Poder Adquisitivo (AR)',           u: '/poder-adquisitivo/', icon:'📉', badge:true, d: 'How inflation erodes your savings', d_es: 'Cómo la inflación erosiona tus ahorros',  hd:'Calculá cómo la inflación argentina erosionó el poder adquisitivo de tu dinero.', countries:['AR'] },
      { n: 'Mercado Pago (AR)',        n_es: 'Mercado Pago (Argentina)',         u: '/mercado-pago/',   icon:'💙', badge:true, d: 'MP fees and returns',                   d_es: 'Comisiones y rendimiento en Mercado Pago',  hd:'Calculá las comisiones de Mercado Pago y el rendimiento de tu dinero en la plataforma.', countries:['AR'] },
    ]},
  ];

  /* ── FAQs ─────────────────────────────────────────────────────────────────
     Frequently asked questions per calculator page.
     Key is the pathname without trailing slash (same as item.u).
  ─────────────────────────────────────────────────────────────────────────── */
  var FAQS = {
    '/bmi': [
      { q: 'What is BMI and how is it calculated?', a: 'BMI (Body Mass Index) is a measure that relates weight to height. It is calculated by dividing your weight in kilograms by your height in meters squared: BMI = kg / m².' },
      { q: 'What are the healthy BMI ranges according to WHO?', a: 'Underweight: below 18.5 — Normal weight: 18.5 to 24.9 — Overweight: 25 to 29.9 — Obese: 30 or more. These ranges apply to adults.' },
      { q: 'Is BMI enough to know if I\'m healthy?', a: 'Not completely. BMI does not distinguish between muscle and fat, nor does it consider the distribution of body fat. It is a useful population-level indicator but should be complemented with clinical analysis.' },
      { q: 'Does BMI apply to children?', a: 'Not in the same way. Children and teenagers use percentile charts by age and sex. This calculator is designed for adults over 18.' },
      { q: 'What is the ideal BMI?', a: 'According to WHO, the healthy range is between 18.5 and 24.9. However, ideal weight also depends on body frame, muscle mass and other individual factors.' },
    ],
    '/bmr': [
      { q: 'What is BMR?', a: 'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing, blood circulation and temperature regulation.' },
      { q: 'What is TDEE?', a: 'TDEE (Total Daily Energy Expenditure) is the total calories you burn per day including your physical activity. It is calculated by multiplying your BMR by an activity factor.' },
      { q: 'Which BMR formula is more accurate?', a: 'The Mifflin-St Jeor formula is considered the most accurate for most people. The Harris-Benedict formula is older and tends to slightly overestimate for sedentary individuals.' },
      { q: 'How do I use TDEE to lose or gain weight?', a: 'To lose weight, eat fewer calories than your TDEE (deficit). To gain weight, eat more (surplus). A deficit or surplus of 500 kcal/day produces approximately 0.5 kg of change per week.' },
      { q: 'Does BMR change with age?', a: 'Yes. BMR typically decreases with age as muscle mass naturally declines. Exercise, especially strength training, helps preserve muscle and maintain a higher BMR.' },
    ],
    '/1rm': [
      { q: 'What is 1RM?', a: '1RM (One Repetition Maximum) is the maximum weight you can lift for a single repetition with correct form. It is the standard measure of strength in exercises like squat, bench press and deadlift.' },
      { q: 'Which 1RM formula is most accurate?', a: 'The Epley and Brzycki formulas are the most widely used and validated. They are accurate for sets between 2 and 10 reps; for higher reps, accuracy decreases.' },
      { q: 'Should I test my 1RM directly?', a: 'Direct testing carries injury risk, especially for beginners. Using a submaximal test (e.g., how many reps with 80% of your max) and a formula is safer and practical for most people.' },
      { q: 'How often should I test 1RM?', a: 'Most athletes re-test every 4-8 weeks after a training cycle. This helps track progress and adjust training loads accordingly.' },
    ],
    '/weight-loss': [
      { q: 'How much weight can I safely lose per week?', a: 'The general medical recommendation is to lose between 0.5 and 1 kg (1-2 lb) per week. Faster losses usually involve muscle and water loss, are hard to maintain and can cause nutritional deficiencies.' },
      { q: 'What is a caloric deficit?', a: 'A caloric deficit is the difference between the calories you consume and those you burn. If you burn 2,000 kcal and eat 1,500 kcal, you have a 500 kcal deficit. Roughly 7,700 kcal of accumulated deficit equals 1 kg of fat lost.' },
      { q: 'What is TDEE?', a: 'TDEE (Total Daily Energy Expenditure) is the total calories you burn per day including physical activity. It is calculated by multiplying your BMR by an activity factor.' },
      { q: 'Can I lose weight without exercising?', a: 'Yes. Weight loss primarily depends on caloric balance (calories in vs. calories out). However, exercise helps preserve muscle mass, improves metabolic health and makes it easier to maintain a caloric deficit.' },
    ],
    '/hydration': [
      { q: 'How much water do I need per day?', a: 'The general recommendation is about 35 ml per kg of body weight. A 70 kg person needs approximately 2.45 liters per day as a baseline, increasing with physical activity and heat.' },
      { q: 'Does coffee or tea count toward my water intake?', a: 'Yes, in part. Despite being mild diuretics, caffeinated beverages still contribute net fluids. Most nutritionists count them at about 70-80% of their volume toward daily intake.' },
      { q: 'What are signs of dehydration?', a: 'Mild dehydration (1-2% body weight): thirst, darker urine, fatigue, headache. Moderate: dizziness, reduced performance. Severe: confusion, rapid heartbeat. Drink water before feeling thirsty.' },
      { q: 'Does climate affect how much water I need?', a: 'Significantly. In hot or humid climates, sweat losses increase dramatically. Athletes training in heat may need 2-3x their baseline water intake.' },
    ],
    '/protein': [
      { q: 'How much protein do I need per day?', a: 'For sedentary adults: 0.8 g/kg body weight. For active people: 1.2-1.6 g/kg. For muscle building: 1.6-2.2 g/kg. For weight loss while preserving muscle: up to 2.4 g/kg.' },
      { q: 'What are the best protein sources?', a: 'Animal sources (complete proteins): chicken, turkey, fish, eggs, dairy, beef. Plant sources: legumes, tofu, tempeh, quinoa, edamame. Combining plant sources ensures all essential amino acids.' },
      { q: 'Can eating too much protein be harmful?', a: 'For healthy people with normal kidney function, high protein intakes (up to 3 g/kg) appear safe. People with kidney disease should limit protein; consult a doctor.' },
      { q: 'Does protein intake matter for weight loss?', a: 'Yes. High protein diets help preserve muscle mass during caloric deficits, increase satiety (making it easier to eat less) and have a higher thermic effect, burning slightly more calories during digestion.' },
    ],
    '/compound-interest': [
      { q: 'What is compound interest?', a: 'Compound interest is calculated on the initial capital plus the interest already earned in previous periods. This creates a "snowball" effect that accelerates investment growth over time.' },
      { q: 'What is the difference between simple and compound interest?', a: 'With simple interest, interest is always calculated on the original capital. With compound interest, earned interest is added to the capital and generates more interest. Over time, the difference is enormous.' },
      { q: 'How is compound interest calculated?', a: 'The formula is: Final Capital = Initial Capital × (1 + rate)^n, where n is the number of compounding periods. Our calculator does this automatically.' },
      { q: 'What does monthly vs. annual compounding mean?', a: 'Monthly compounding adds interest to the capital every month; annual compounding, once a year. The more frequent the compounding, the greater the total return.' },
      { q: 'How long does it take to double my capital?', a: 'You can estimate it with the Rule of 72: divide 72 by the annual interest rate. At 12% annually, your capital doubles in about 6 years (72 ÷ 12 = 6).' },
    ],
    '/loan': [
      { q: 'How is a loan payment calculated?', a: 'The monthly payment in the French system (most common) is: payment = principal × [rate / (1 − (1 + rate)^−n)], where rate is the monthly rate and n is the number of payments.' },
      { q: 'What is APR?', a: 'APR (Annual Percentage Rate) is the yearly cost of a loan including interest plus fees and charges. It is the most complete indicator for comparing different loans.' },
      { q: 'Is it better to repay a loan early?', a: 'Usually yes, because you reduce the outstanding principal and pay less interest. However, some contracts include early repayment penalties — check the terms before paying.' },
      { q: 'What is an amortization schedule?', a: 'An amortization schedule shows each payment broken down into principal and interest. At the beginning you pay more interest and less principal; toward the end, more principal and less interest.' },
      { q: 'How much can I borrow?', a: 'Most lenders limit the monthly payment to 25-35% of your net monthly income. If you earn $4,000/month net, the payment typically should not exceed $1,000-$1,400.' },
    ],
    '/savings': [
      { q: 'How do I calculate how long to reach my savings goal?', a: 'You need: the target amount, how much you have saved today, how much you can contribute monthly, and your expected return rate. With those inputs the calculator estimates the months needed.' },
      { q: 'What interest rate should I use?', a: 'It depends on where you invest. A regular savings account may yield 1-3%. High-yield savings accounts or CDs can yield 4-5%+. If you keep cash with no return, use 0.' },
      { q: 'Does saving a small amount monthly really make a difference?', a: 'Absolutely. The compound interest effect means even small consistent contributions generate large differences over time. A constant small monthly deposit always beats sporadic larger savings.' },
      { q: 'What happens if I increase my monthly contribution?', a: 'The time to reach your goal decreases significantly. For example, doubling your monthly contribution can cut the time nearly in half, depending on the interest rate.' },
    ],
    '/margin': [
      { q: 'What is the difference between profit margin and markup?', a: 'Margin is calculated on the selling price: (price − cost) ÷ price × 100. Markup is calculated on the cost: (price − cost) ÷ cost × 100. Markup is always higher than margin for the same product.' },
      { q: 'What is a good profit margin?', a: 'It depends on the industry. Retail typically sees 20-40% margins. Services can be 50%+. Grocery stores or tech products can be under 10%. What matters is covering fixed costs, taxes and leaving net profit.' },
      { q: 'How do I calculate selling price for a 30% margin?', a: 'Formula: price = cost ÷ (1 − 0.30). If you buy at $100 and want 30% margin, selling price = $100 ÷ 0.70 = $142.86. Our calculator does this automatically in "Cost + Margin" mode.' },
    ],
    '/tip': [
      { q: 'How do I calculate a tip?', a: 'Multiply the bill amount by the tip percentage. For a $50 bill with a 20% tip: $50 × 0.20 = $10 tip, total = $60. Our calculator does this instantly for any percentage.' },
      { q: 'How much should I tip at a restaurant?', a: 'In the US, 15-20% is standard for good service, 20-25% for excellent service. In other countries, tipping customs vary — always check local norms.' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Either is acceptable. Tipping on the pre-tax amount is technically more correct, but most people tip on the total for convenience. The difference is small.' },
      { q: 'How do I split a bill evenly?', a: 'Divide the total (including tip) by the number of people. Our calculator shows the tip amount, total and per-person share all at once.' },
    ],
    '/percentage': [
      { q: 'How do I calculate a percentage of a number?', a: 'Multiply the number by the percentage divided by 100. For example, 15% of 200 = 200 × 0.15 = 30.' },
      { q: 'How do I calculate percentage change?', a: 'Percentage change = (new value − old value) ÷ old value × 100. If a price goes from $50 to $65, the change is (65−50) ÷ 50 × 100 = +30%.' },
      { q: 'What is the difference between a percentage increase and markup?', a: 'A percentage increase adds a percentage to the original value. Markup is used in business to set prices above cost. Both use the same formula but apply to different contexts.' },
      { q: 'How do I reverse a percentage (find the original value)?', a: 'Divide the final value by (1 + percentage/100). If a price increased 25% to reach $125, the original was $125 ÷ 1.25 = $100.' },
      { q: 'What does "percentage points" mean?', a: 'Percentage points (pp) measure the arithmetic difference between two percentages. If interest rates go from 3% to 5%, that\'s an increase of 2 percentage points — not 2%.' },
    ],
    '/rule-of-three': [
      { q: 'What is the rule of three?', a: 'The rule of three is a method to find a fourth value when three are known and they are proportional. If A is to B as C is to D, then D = B × C ÷ A.' },
      { q: 'What is the difference between direct and inverse proportion?', a: 'In direct proportion, when one value increases the other increases too. In inverse proportion, when one increases the other decreases. Example: speed and travel time are inversely proportional.' },
      { q: 'When do I use inverse proportion?', a: 'Use inverse proportion when two quantities have opposite behavior: more workers → fewer days to finish; faster speed → less time to travel; larger pipe → less time to fill a tank.' },
    ],
    '/unit-converter': [
      { q: 'Which unit systems does the converter support?', a: 'It covers the metric system (SI) and the imperial/US customary system across length, weight, temperature, speed, area, volume, time and digital storage.' },
      { q: 'How do I convert Celsius to Fahrenheit?', a: 'Formula: F = C × 9/5 + 32. For example, 20°C = 20 × 9/5 + 32 = 68°F.' },
      { q: 'How many pounds in a kilogram?', a: '1 kilogram = 2.20462 pounds. Conversely, 1 pound = 0.453592 kilograms.' },
      { q: 'How many miles in a kilometer?', a: '1 kilometer = 0.621371 miles. 1 mile = 1.60934 kilometers.' },
    ],
    '/age': [
      { q: 'How is exact age calculated?', a: 'Exact age counts the full years, months and days from the birth date to today. It accounts for leap years and months of different lengths to give a precise result.' },
      { q: 'What is the age of majority?', a: 'The age of majority varies by country. In the US, UK, Canada and most of the EU it is 18. In Japan it was recently lowered from 20 to 18 (2022). In some countries it is 21.' },
      { q: 'How do I calculate age in months?', a: 'Multiply the number of complete years by 12 and add the remaining months. Our calculator shows this automatically in the "Exact age" section.' },
    ],
    '/days': [
      { q: 'How are working days calculated?', a: 'Working days exclude Saturdays, Sundays and public holidays. This calculator counts Monday to Friday by default; you can enable the working days mode to exclude weekends.' },
      { q: 'How many days are in a year?', a: 'A regular year has 365 days. A leap year has 366 days. Leap years occur every 4 years, except for century years not divisible by 400 (e.g., 1900 was not a leap year, but 2000 was).' },
      { q: 'How do I calculate days until an event?', a: 'Enter today\'s date as the start date and the event date as the end date. The calculator shows the exact number of days remaining.' },
    ],
    '/day-of-week': [
      { q: 'What day of the week will a future date fall on?', a: 'Enter any future or past date in the calculator and it will instantly show the day of the week using the Zeller or Tomohiko Sakamoto algorithm.' },
      { q: 'What day of the week was a famous historical date?', a: 'Try entering dates like July 20, 1969 (Moon landing — Sunday) or July 4, 1776 (US Independence Day — Thursday). The calculator works for any date from the Gregorian calendar.' },
    ],
    '/clock': [
      { q: 'What is the clock useful for?', a: 'A full-screen digital clock is useful for presentations, virtual classes, meetings where you need to see the time clearly, or simply as a desktop clock for your monitor.' },
      { q: 'Is the clock accurate?', a: 'Yes. The clock uses your device\'s system time. If your device is synchronized with an NTP server (which happens automatically on most modern operating systems), accuracy is within fractions of a second.' },
      { q: 'What time zone does the clock show?', a: 'The clock shows the time zone configured on your device. If your computer is set to Eastern Time (UTC-5), you will see Eastern Time.' },
    ],
    '/life': [
      { q: 'How are the life statistics calculated?', a: 'Each counter is estimated using physiological averages: heartbeats at ~70 bpm, blinks at ~15/min, steps at ~8,000/day. They count from your birth date and update every second in real time.' },
      { q: 'Are these numbers exact?', a: 'No, they are estimates based on population averages. Your personal rates vary based on fitness, lifestyle, age and genetics. The fun is in the scale of the numbers!' },
    ],
    '/reaction-time': [
      { q: 'What is an average human reaction time?', a: 'The average human reaction time to a visual stimulus is 200-300 milliseconds. Trained athletes can reach 150-200 ms. Anything below 150 ms is generally a false start.' },
      { q: 'Does caffeine improve reaction time?', a: 'Studies show caffeine can reduce reaction time by 10-20 ms at typical doses (100-200 mg). The effect peaks 30-60 minutes after consumption.' },
      { q: 'What affects reaction time?', a: 'Key factors: age (fastest in your 20s), sleep deprivation (dramatically slows reactions), alcohol and drugs, training and practice, stress, and the type of stimulus (audio is ~50 ms faster than visual).' },
    ],
    '/cps': [
      { q: 'What is a good CPS score?', a: 'Average users click 5-8 times per second. Gamers typically reach 8-12 CPS. The world record exceeds 20 CPS. Above 10 CPS is considered very fast.' },
      { q: 'Does mouse type affect CPS?', a: 'Yes. Gaming mice with low debounce times and light buttons allow faster clicking. Mechanical mice with heavier switches produce lower CPS.' },
    ],
    '/keyboard': [
      { q: 'Why would a keyboard key stop working?', a: 'Common causes: dust/debris under the key, a damaged switch (especially on mechanical keyboards), a driver issue, or physical damage from liquid. The tester helps confirm if it\'s a hardware or software problem.' },
      { q: 'Does the keyboard tester work with all layouts?', a: 'The tester detects keys by their hardware code, so it works regardless of the language layout configured in your OS (QWERTY, AZERTY, QWERTZ, Dvorak, etc.).' },
    ],
    '/random': [
      { q: 'Is the random number generator truly random?', a: 'It uses JavaScript\'s Math.random(), which is a pseudo-random number generator (PRNG). It is unpredictable for practical purposes but not cryptographically secure.' },
      { q: 'What is the difference between with and without repetition?', a: 'With repetition: the same number or item can appear multiple times. Without repetition: each item can only be selected once (like drawing cards from a deck without replacement).' },
    ],
    '/zodiac': [
      { q: 'How are zodiac signs determined?', a: 'Western zodiac signs are determined by the position of the Sun at the time of your birth. The year is divided into 12 periods of approximately 30 days, each associated with a constellation.' },
      { q: 'What is the difference between Western and Chinese zodiac?', a: 'Western zodiac is based on your birth month. Chinese zodiac is based on your birth year, with a 12-year cycle represented by animals (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig).' },
      { q: 'Do zodiac signs have scientific support?', a: 'No. Astrology has no scientific basis; controlled studies have found no correlation between zodiac signs and personality or life events. It is a cultural tradition, not a science.' },
    ],
    '/world-cup': [
      { q: 'When does the 2026 World Cup start?', a: 'The opening match of the 2026 FIFA World Cup is on June 11, 2026 at Estadio Azteca in Mexico City — the same stadium where the 1986 final was played.' },
      { q: 'Where is the 2026 World Cup being played?', a: 'The tournament is co-hosted by three countries: Mexico (Mexico City, Guadalajara, Monterrey), the United States (11 cities including New York, Los Angeles and Miami) and Canada (Toronto and Vancouver).' },
      { q: 'How many teams are in the 2026 World Cup?', a: 'For the first time in history, 48 national teams participate, up from 32 at Qatar 2022. This generates 104 matches in total — nearly double previous editions.' },
      { q: 'Where is the 2026 World Cup final?', a: 'The final is scheduled for July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey (New York metro area), with a capacity of over 82,000.' },
    ],
    '/tip': [
      { q: 'How do I calculate a tip?', a: 'Multiply the bill amount by the tip percentage. For a $50 bill with a 20% tip: $50 × 0.20 = $10 tip, so you pay $60 total. Our calculator does this instantly.' },
      { q: 'How much should I tip?', a: 'In the US: 15% for adequate service, 20% for good service, 25%+ for exceptional service. Tipping customs vary by country — in Japan tipping is considered rude; in the UK 10-15% is typical.' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Either is acceptable. Tipping on the pre-tax amount is technically correct; most people tip on the total for convenience. The difference is small.' },
    ],
    '/body-fat': [
      { q: 'What is body fat percentage?', a: 'Body fat percentage is the proportion of your total body weight that is fat tissue. A healthy range for men is 10-20%; for women, 18-28%. Athletes typically have lower values.' },
      { q: 'What is the US Navy method?', a: 'The US Navy formula estimates body fat from neck, waist (and hip for women) circumferences, plus height. It is validated for military fitness testing and is more accurate than BMI-based estimates.' },
      { q: 'What is a healthy body fat percentage?', a: 'For men: essential fat 2-5%, athletes 6-13%, fitness 14-17%, acceptable 18-24%, obese 25%+. For women: essential 10-13%, athletes 14-20%, fitness 21-24%, acceptable 25-31%, obese 32%+.' },
      { q: 'How can I reduce body fat?', a: 'A combination of caloric deficit, strength training (to preserve muscle), and cardiovascular exercise is the most effective approach. Aim for a moderate deficit of 300-500 kcal/day.' },
    ],
    '/ideal-weight': [
      { q: 'How is ideal weight calculated?', a: 'Several formulas exist: Hamwi (1964), Devine (1974), Robinson (1983), and Miller (1983). They use height as the primary input. Our calculator shows all four and their average.' },
      { q: 'Are ideal weight formulas accurate?', a: 'These formulas were developed for medical dosing, not as aesthetic targets. They give a useful reference range but don\'t account for body composition, muscle mass, or frame size.' },
      { q: 'What is a healthy weight range?', a: 'A healthy weight is generally one that corresponds to a BMI between 18.5 and 24.9. Our calculator shows this BMI-based range alongside the formula results.' },
    ],
    '/sleep': [
      { q: 'Why does the calculator recommend multiples of 90 minutes?', a: 'A full sleep cycle lasts approximately 90 minutes, progressing through light sleep, deep sleep, and REM sleep. Waking in the middle of a cycle causes grogginess (sleep inertia); waking at the end feels natural.' },
      { q: 'How many sleep cycles do I need?', a: 'Most adults need 5-6 complete sleep cycles per night (7.5-9 hours). Less than 4 cycles (6 hours) consistently leads to cognitive impairment and health risks.' },
      { q: 'How long does it take to fall asleep?', a: 'On average, healthy adults fall asleep in 10-20 minutes. Our calculator adds 15 minutes to your target sleep time to account for this. If you fall asleep in under 5 minutes, you may be chronically sleep-deprived.' },
      { q: 'Does napping count toward sleep cycles?', a: 'Short naps (20-30 min) avoid deep sleep stages and don\'t interfere with nighttime sleep. A 90-minute nap completes one full cycle and can significantly reduce sleep debt.' },
    ],
    '/calories-burned': [
      { q: 'How are calories burned calculated?', a: 'This calculator uses MET (Metabolic Equivalent of Task) values for each activity. Calories burned = MET × weight (kg) × time (hours). MET values come from the Compendium of Physical Activities.' },
      { q: 'What is a MET value?', a: 'MET (Metabolic Equivalent of Task) measures exercise intensity relative to rest. Sitting = 1.0 MET, walking = 3.5 MET, running at 8 km/h ≈ 8.5 MET. The higher the MET, the more calories burned per minute.' },
      { q: 'Does body weight affect calories burned?', a: 'Yes, significantly. A heavier person burns more calories doing the same activity for the same duration, because more energy is needed to move a larger mass.' },
    ],
    '/heart-rate': [
      { q: 'How is maximum heart rate estimated?', a: 'The most common formula is 220 − age (Fox & Haskell). Other formulas like Tanaka (208 − 0.7 × age) are more accurate for older adults. Measured max HR (from a stress test) is always more precise.' },
      { q: 'What are the 5 heart rate training zones?', a: 'Zone 1 (50-60% max HR): very light, recovery. Zone 2 (60-70%): fat burning, base fitness. Zone 3 (70-80%): aerobic, cardio fitness. Zone 4 (80-90%): threshold, performance. Zone 5 (90-100%): max effort, sprint training.' },
      { q: 'Which zone is best for fat loss?', a: 'Zone 2 (60-70% max HR) burns the highest proportion of fat as fuel. However, higher-intensity zones burn more total calories in less time. The best zone depends on your fitness level and goals.' },
    ],
    '/pregnancy': [
      { q: 'How is the due date calculated?', a: 'The standard method (Naegele\'s rule) adds 280 days (40 weeks) to the first day of your last menstrual period (LMP). This assumes a regular 28-day cycle with ovulation on day 14.' },
      { q: 'How accurate is the estimated due date?', a: 'Only about 4% of babies are born exactly on their due date. The normal delivery window is 38-42 weeks (2 weeks before or after EDD). Early ultrasound (6-12 weeks) provides the most accurate estimate.' },
      { q: 'What if my cycles are irregular?', a: 'Irregular cycles shift ovulation and conception timing. If you know your conception date, the calculator can use that instead. Your OB/GYN or midwife will use early ultrasound measurements to refine the date.' },
      { q: 'What do the trimesters mean?', a: 'First trimester: weeks 1-12 (organ formation). Second trimester: weeks 13-27 (growth, fetal movement). Third trimester: weeks 28-40 (rapid weight gain, lung maturation, birth preparation).' },
    ],
    '/mortgage': [
      { q: 'How is a mortgage payment calculated?', a: 'The monthly payment formula is: P × [r(1+r)^n] / [(1+r)^n − 1], where P = loan amount, r = monthly interest rate, n = number of payments. This is the standard French amortization method.' },
      { q: 'What is amortization?', a: 'Amortization is the process of paying off a loan through regular installments. Each payment covers interest first, then reduces principal. Early payments are mostly interest; later payments are mostly principal.' },
      { q: 'What is the difference between interest rate and APR?', a: 'The interest rate is the base rate charged on the loan. APR (Annual Percentage Rate) includes the interest rate plus fees, providing a more complete picture of the loan cost for comparison purposes.' },
      { q: 'Should I choose a shorter or longer loan term?', a: 'A shorter term (15 years) means higher monthly payments but much less total interest. A longer term (30 years) lowers monthly payments but costs significantly more in interest over the life of the loan.' },
      { q: 'What is a down payment?', a: 'The down payment is the upfront cash you pay. The mortgage covers the rest. Larger down payments reduce your loan amount, monthly payment, and total interest — and may help you avoid private mortgage insurance (PMI).' },
    ],
    '/vat': [
      { q: 'What is VAT?', a: 'VAT (Value Added Tax) is a consumption tax added to goods and services at each stage of production and sale. The final consumer pays the full VAT amount. It is called IVA in Spanish and Portuguese-speaking countries.' },
      { q: 'How do I calculate the price with VAT included?', a: 'Price with VAT = net price × (1 + rate/100). For example, $100 + 21% VAT = $100 × 1.21 = $121.' },
      { q: 'How do I remove VAT from a price?', a: 'Net price = price including VAT ÷ (1 + rate/100). For example, $121 with 21% VAT → $121 ÷ 1.21 = $100 net.' },
      { q: 'What are common VAT rates by country?', a: 'Argentina: 21% (standard), 10.5% (reduced). Spain: 21%/10%/4%. Mexico: 16% (IVA). France: 20%/10%/5.5%/2.1%. UK: 20%/5%/0%. Germany: 19%/7%. Brazil: varies by state (ICMS 7-25% plus other taxes).' },
    ],
    '/discount': [
      { q: 'How do I calculate a discounted price?', a: 'Discounted price = original price × (1 − discount% / 100). For a $200 item with 30% off: $200 × 0.70 = $140. The saving is $60.' },
      { q: 'How do I find what percentage off a price is?', a: 'Discount % = (original price − sale price) ÷ original price × 100. If something went from $80 to $60, the discount is (80−60) ÷ 80 × 100 = 25%.' },
      { q: 'What is the difference between discount and markdown?', a: 'A discount is a price reduction given to a buyer (e.g., promotional discount). A markdown is a permanent price reduction (e.g., clearance). Both use the same calculation.' },
    ],
    '/fuel': [
      { q: 'How is fuel cost calculated?', a: 'Fuel cost = (distance ÷ fuel efficiency) × price per liter. For a 400 km trip in a car that uses 8 L/100km at $1.50/L: (400 ÷ 100) × 8 × 1.50 = $48.' },
      { q: 'What is fuel efficiency (consumption)?', a: 'Fuel efficiency is the amount of fuel needed to travel a given distance. Common units: L/100km (lower = more efficient), km/L, or MPG (miles per gallon, used in the US and UK).' },
      { q: 'How can I improve my fuel efficiency?', a: 'Maintain steady speeds, avoid hard acceleration and braking, keep tires properly inflated, remove excess weight, use cruise control on highways, and keep the engine well-maintained.' },
    ],
    '/salary': [
      { q: 'How do I convert hourly wage to annual salary?', a: 'Annual salary = hourly rate × hours per week × weeks per year. For $25/hour, 40 hours/week, 52 weeks: $25 × 40 × 52 = $52,000/year.' },
      { q: 'What is a gross vs. net salary?', a: 'Gross salary is your total pay before deductions. Net salary (take-home pay) is what remains after income tax, social security, health insurance, and other deductions are withheld.' },
      { q: 'How many working days are in a year?', a: 'A standard work year has 52 weeks × 5 working days = 260 days. Subtracting 10-12 public holidays gives approximately 248-250 working days in most countries.' },
    ],
    '/roi': [
      { q: 'What is ROI?', a: 'ROI (Return on Investment) measures the profitability of an investment relative to its cost. Formula: ROI = (Net Profit ÷ Investment Cost) × 100. A 20% ROI means you earned $20 for every $100 invested.' },
      { q: 'What is a good ROI?', a: 'It depends on the context. Stock market historically returns ~7-10% annually (inflation-adjusted). Real estate: 8-12%. Business investments: 15-30%. Risk-free savings: 2-5%. Higher potential returns always come with higher risk.' },
      { q: 'What is the difference between ROI and ROE?', a: 'ROI measures return on total investment (any type). ROE (Return on Equity) specifically measures return on shareholders\' equity, excluding debt. Both are useful but measure different aspects of profitability.' },
    ],
    '/inflation': [
      { q: 'How does inflation affect purchasing power?', a: 'Inflation erodes purchasing power over time. If inflation is 5% annually, $1,000 today will only buy what $952 buys in one year. Over 10 years at 5%, you need $1,629 to match today\'s $1,000.' },
      { q: 'How is inflation calculated?', a: 'Inflation is typically measured by the Consumer Price Index (CPI), which tracks the price of a basket of goods and services over time. The inflation rate = (CPI this year − CPI last year) ÷ CPI last year × 100.' },
      { q: 'What is real vs. nominal value?', a: 'Nominal value is the face value of money without adjusting for inflation. Real value adjusts for inflation, reflecting actual purchasing power. When comparing values across years, always use real values.' },
    ],
    '/scientific': [
      { q: 'What trigonometric functions are supported?', a: 'The calculator supports sin, cos, tan, and their inverses (arcsin, arccos, arctan), in both degrees and radians. Hyperbolic functions (sinh, cosh, tanh) are also available.' },
      { q: 'What is the order of operations?', a: 'The calculator follows standard mathematical order of operations (PEMDAS/BODMAS): Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right).' },
      { q: 'What constants are available?', a: 'Available constants include: π (3.14159…), e (2.71828…), speed of light (c), gravitational constant (G), Planck constant (h), and Avogadro\'s number (Nₐ).' },
    ],
    '/statistics': [
      { q: 'What is the difference between mean, median and mode?', a: 'Mean: the arithmetic average (sum ÷ count). Median: the middle value when sorted. Mode: the most frequent value. For skewed data, the median is more representative than the mean.' },
      { q: 'What is standard deviation?', a: 'Standard deviation measures how spread out values are from the mean. A small SD means values cluster near the mean; a large SD means they are widely spread. It is the square root of variance.' },
      { q: 'What is the difference between population and sample statistics?', a: 'Population statistics use all data (divides by n). Sample statistics estimate the population from a subset (divides by n−1, called Bessel\'s correction). Use sample statistics when your data is a sample from a larger group.' },
    ],
    '/fractions': [
      { q: 'How do you add fractions?', a: 'To add fractions, find a common denominator, convert each fraction, then add the numerators. Example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.' },
      { q: 'How do you multiply fractions?', a: 'Multiply numerators together and denominators together. Example: 2/3 × 3/5 = 6/15 = 2/5 (simplified). No common denominator is needed.' },
      { q: 'How do you divide fractions?', a: 'Multiply by the reciprocal of the divisor. Example: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6.' },
      { q: 'How do you simplify a fraction?', a: 'Divide both numerator and denominator by their Greatest Common Divisor (GCD). Example: 12/18 → GCD(12,18)=6 → 2/3.' },
    ],
    '/triangle': [
      { q: 'What is the law of sines?', a: 'The law of sines states: a/sin(A) = b/sin(B) = c/sin(C), where a, b, c are sides and A, B, C are opposite angles. It is used when you know two angles and one side, or two sides and a non-included angle.' },
      { q: 'What is the law of cosines?', a: 'c² = a² + b² − 2ab·cos(C). Used when you know three sides (SSS) or two sides and the included angle (SAS). It is a generalization of the Pythagorean theorem.' },
      { q: 'What is Heron\'s formula?', a: 'Heron\'s formula calculates the area of a triangle from its three sides: Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2 (the semi-perimeter).' },
    ],
    '/base-converter': [
      { q: 'What is a binary number?', a: 'Binary (base 2) uses only 0 and 1. It is the native language of computers. Each digit (bit) represents a power of 2. For example, binary 1010 = 1×8 + 0×4 + 1×2 + 0×1 = 10 in decimal.' },
      { q: 'What is hexadecimal used for?', a: 'Hexadecimal (base 16) uses digits 0-9 and letters A-F. It is widely used in computing for memory addresses, color codes (e.g., #FF5733) and byte values because each hex digit represents exactly 4 bits.' },
      { q: 'How do you convert decimal to binary?', a: 'Divide the decimal number by 2 repeatedly and record the remainders from bottom to top. Example: 13 → 13÷2=6 r1, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → binary 1101.' },
    ],
    '/timer': [
      { q: 'What is the difference between a timer and a stopwatch?', a: 'A timer counts DOWN from a set duration to zero (useful for cooking, workouts, presentations). A stopwatch counts UP from zero, measuring elapsed time (useful for races, tasks, experiments).' },
      { q: 'Can I use the timer in the background?', a: 'Yes. The timer continues running even if you switch browser tabs. An audio alert sounds when the countdown reaches zero.' },
      { q: 'Can I set custom times?', a: 'Yes. Enter any combination of hours, minutes and seconds. Common presets (1 min, 5 min, 10 min, 25 min Pomodoro) are also available for quick access.' },
    ],
    '/countdown': [
      { q: 'How precise is the countdown?', a: 'The countdown updates every second, showing days, hours, minutes and seconds remaining. For very precise timing (milliseconds), use the Stopwatch tool instead.' },
      { q: 'What happens when the countdown reaches zero?', a: 'The display shows "Time\'s up!" and an alert sound plays. The elapsed time continues to show after zero.' },
      { q: 'Can I count down to a specific time of day?', a: 'Yes. Enter the target date and time. If the event is daily (like a work shift), you can reload and re-enter the next day\'s time.' },
    ],
    '/work-hours': [
      { q: 'How are overtime hours calculated?', a: 'Standard full-time work is 8 hours per day or 40 hours per week (in most countries). Any hours beyond this threshold qualify as overtime, typically paid at 1.5× or 2× the regular rate.' },
      { q: 'How are break times handled?', a: 'You can enter your break duration to subtract from total hours. A 30-minute lunch break means an 8:30–17:30 shift is 8.5 hours gross, 8 hours net.' },
      { q: 'Can I calculate hours for multiple days?', a: 'Yes. Add entries for each work day and the calculator sums the total. This is useful for weekly timesheets, freelance billing, or payroll verification.' },
    ],
    '/typing': [
      { q: 'What is an average typing speed?', a: 'The average typist reaches 40-50 WPM (words per minute). Touch typists who learned proper technique average 60-80 WPM. Professional typists can exceed 100 WPM. The current world record is over 200 WPM.' },
      { q: 'How is WPM calculated?', a: 'WPM = (total characters typed ÷ 5) ÷ time in minutes. The "÷5" converts characters to standard "words" (average word length is 5 characters including the space). Errors reduce your accuracy score but some tests also reduce WPM.' },
      { q: 'How can I improve my typing speed?', a: 'Use proper touch typing technique (home row position: ASDF JKL;), practice consistently for 15-20 minutes daily, focus on accuracy before speed, and minimize looking at the keyboard. Progress is fastest in the first few weeks.' },
    ],
    '/memory': [
      { q: 'What does a memory test measure?', a: 'A digit span or sequence memory test measures your short-term (working) memory capacity. The average adult can hold 7 ± 2 items in working memory (Miller\'s Law). Training can improve this.' },
      { q: 'How can I improve my memory?', a: 'Regular practice, adequate sleep (critical for memory consolidation), physical exercise, and techniques like chunking (grouping items) and the method of loci significantly improve memory performance.' },
    ],
    '/aguinaldo': [
      { q: '¿Qué es el aguinaldo o SAC?', a: 'El Sueldo Anual Complementario (SAC) es un beneficio que equivale a la mitad del mayor salario bruto percibido durante el semestre. Se paga dos veces al año: el 30 de junio y el 31 de diciembre.' },
      { q: '¿Cómo se calcula el aguinaldo?', a: 'SAC = Mejor remuneración bruta del semestre ÷ 2. Si tu mejor sueldo bruto fue $500.000, tu aguinaldo es $250.000. También se pagan cargas sociales sobre ese monto.' },
      { q: '¿El aguinaldo tributa Ganancias?', a: 'Sí, si estás alcanzado por el impuesto a las ganancias (4ª categoría). El SAC suma a tu ingreso anual y puede incrementar la retención. La AFIP ajusta los topes periódicamente.' },
      { q: '¿Qué pasa si me desvinculan antes de cobrar el aguinaldo?', a: 'Si la relación laboral termina antes del cierre del semestre, tenés derecho a cobrar el SAC proporcional a los días trabajados en ese semestre.' },
    ],
    '/sueldo-neto': [
      { q: '¿Qué se descuenta del sueldo bruto en Argentina?', a: 'Los aportes del empleado en relación de dependencia son: Jubilación 11%, Obra Social 3%, OSECAC/ANSSAL 0.5%, Ley 19.032 (PAMI) 3%. Total: 17% (sin considerar Ganancias).' },
      { q: '¿Quién paga las contribuciones patronales?', a: 'Las contribuciones son a cargo del empleador y no se descuentan del sueldo del empleado. Incluyen Jubilación 12.71%, Obra Social 6%, Asignaciones Familiares 4.44%, entre otras.' },
      { q: '¿Cuándo se retiene Ganancias?', a: 'Se retiene Ganancias 4ª categoría cuando el salario bruto supera el mínimo no imponible fijado por la AFIP. Los valores se actualizan periódicamente. El empleador actúa como agente de retención.' },
      { q: '¿Es lo mismo sueldo bruto que remuneración?', a: 'En general sí: el sueldo bruto es la remuneración total antes de descuentos. Incluye sueldo básico, adicionales, horas extras, antigüedad y cualquier otro rubro remunerativo.' },
    ],

    /* ── GEOMETRY ── */
    '/geometry': [
      { q: 'How does the bidirectional solver work?', a: 'Fill in any known property (side, area, volume, etc.) and the calculator automatically computes all other properties. You can start from any value — the calculator figures out which formulas to apply.' },
      { q: 'What shapes does this calculator support?', a: 'Square, Circle, Equilateral Triangle, Rectangle, Cube, Sphere, Square Pyramid and Cylinder. Each shape lets you calculate area, perimeter, volume, diagonals and more from any single known measurement.' },
      { q: 'What units does it use?', a: 'The calculator works with any consistent unit. If you enter dimensions in centimeters, results are in cm, cm² and cm³. If you use meters, results are in m, m² and m³ — just be consistent.' },
      { q: 'Why are some fields highlighted in blue?', a: 'Blue fields are auto-calculated. Fields with a white background are where you enter your known values. When you change any input, the blue fields update automatically.' },
    ],
    '/es/geometry': [
      { q: '¿Cómo funciona el solver bidireccional?', a: 'Completá cualquier propiedad conocida (lado, área, volumen, etc.) y la calculadora calcula automáticamente todas las demás. Podés empezar desde cualquier valor — la calculadora determina qué fórmulas aplicar.' },
      { q: '¿Qué figuras incluye esta calculadora?', a: 'Cuadrado, Círculo, Triángulo Equilátero, Rectángulo, Cubo, Esfera, Pirámide cuadrangular y Cilindro. Cada figura permite calcular área, perímetro, volumen, diagonales y más desde cualquier medida conocida.' },
      { q: '¿Qué unidades usa?', a: 'La calculadora funciona con cualquier unidad consistente. Si ingresás en centímetros, los resultados son en cm, cm² y cm³. Si usás metros, serán en m, m² y m³ — solo mantené la consistencia.' },
      { q: '¿Por qué algunos campos se resaltan en azul?', a: 'Los campos azules son calculados automáticamente. Los campos con fondo blanco son donde ingresás tus valores conocidos. Al cambiar cualquier input, los campos azules se actualizan al instante.' },
    ],
    '/pt/geometry': [
      { q: 'Como funciona o solver bidirecional?', a: 'Preencha qualquer propriedade conhecida (lado, área, volume, etc.) e a calculadora calcula automaticamente todas as demais. Você pode começar por qualquer valor — a calculadora determina quais fórmulas aplicar.' },
      { q: 'Quais figuras esta calculadora suporta?', a: 'Quadrado, Círculo, Triângulo Equilátero, Retângulo, Cubo, Esfera, Pirâmide de base quadrada e Cilindro. Cada figura permite calcular área, perímetro, volume, diagonais e mais a partir de qualquer medida conhecida.' },
      { q: 'Que unidades ela usa?', a: 'A calculadora funciona com qualquer unidade consistente. Se você inserir em centímetros, os resultados serão em cm, cm² e cm³. Se usar metros, serão em m, m² e m³ — apenas mantenha a consistência.' },
      { q: 'Por que alguns campos ficam destacados em azul?', a: 'Campos azuis são calculados automaticamente. Campos com fundo branco são onde você insere os valores conhecidos. Ao alterar qualquer entrada, os campos azuis se atualizam instantaneamente.' },
    ],
    '/fr/geometry': [
      { q: 'Comment fonctionne le solveur bidirectionnel ?', a: 'Remplissez n\'importe quelle propriété connue (côté, aire, volume, etc.) et la calculatrice calcule automatiquement toutes les autres. Vous pouvez commencer par n\'importe quelle valeur — la calculatrice détermine les formules à appliquer.' },
      { q: 'Quelles figures cette calculatrice supporte-t-elle ?', a: 'Carré, Cercle, Triangle Équilatéral, Rectangle, Cube, Sphère, Pyramide à base carrée et Cylindre. Chaque figure permet de calculer l\'aire, le périmètre, le volume, les diagonales et plus à partir de n\'importe quelle mesure connue.' },
      { q: 'Quelles unités utilise-t-elle ?', a: 'La calculatrice fonctionne avec n\'importe quelle unité cohérente. Si vous entrez en centimètres, les résultats sont en cm, cm² et cm³. Si vous utilisez des mètres, ce sera en m, m² et m³ — restez simplement cohérent.' },
      { q: 'Pourquoi certains champs sont-ils surlignés en bleu ?', a: 'Les champs bleus sont calculés automatiquement. Les champs à fond blanc sont ceux où vous saisissez vos valeurs connues. Lorsque vous modifiez une entrée, les champs bleus se mettent à jour instantanément.' },
    ],

    /* ── LCM & GCD ── */
    '/lcm': [
      { q: 'What is the Least Common Multiple (LCM)?', a: 'The LCM of two or more integers is the smallest positive integer that is divisible by all of them. For example, LCM(4, 6) = 12, because 12 is the smallest number divisible by both 4 and 6.' },
      { q: 'What is the Greatest Common Divisor (GCD)?', a: 'The GCD (also called GCF or HCF) is the largest positive integer that divides each of the given numbers without a remainder. For example, GCD(12, 18) = 6.' },
      { q: 'What is prime factorization?', a: 'Prime factorization breaks a number into a product of prime numbers. For example, 12 = 2² × 3 and 18 = 2 × 3². The GCD uses the minimum exponent of shared primes, and the LCM uses the maximum.' },
      { q: 'Where are LCM and GCD used in practice?', a: 'LCM is used to find a common denominator when adding fractions. GCD is used to simplify fractions to their lowest terms. Both are fundamental in number theory and cryptography.' },
    ],
    '/es/lcm': [
      { q: '¿Qué es el Mínimo Común Múltiplo (MCM)?', a: 'El MCM de dos o más enteros es el número entero positivo más pequeño que es divisible por todos ellos. Por ejemplo, MCM(4, 6) = 12, porque 12 es el número más pequeño divisible por 4 y 6.' },
      { q: '¿Qué es el Máximo Común Divisor (MCD)?', a: 'El MCD es el número entero positivo más grande que divide a cada uno de los números dados sin dejar resto. Por ejemplo, MCD(12, 18) = 6.' },
      { q: '¿Qué es la factorización en primos?', a: 'La factorización prima descompone un número en producto de números primos. Por ejemplo, 12 = 2² × 3 y 18 = 2 × 3². El MCD usa el menor exponente de los primos comunes, y el MCM usa el mayor.' },
      { q: '¿Para qué se usan en la práctica?', a: 'El MCM se usa para encontrar el denominador común al sumar fracciones. El MCD se usa para simplificar fracciones a su mínima expresión. Ambos son fundamentales en teoría de números y criptografía.' },
    ],
    '/pt/lcm': [
      { q: 'O que é o Mínimo Múltiplo Comum (MMC)?', a: 'O MMC de dois ou mais inteiros é o menor inteiro positivo divisível por todos eles. Por exemplo, MMC(4, 6) = 12, pois 12 é o menor número divisível por 4 e 6.' },
      { q: 'O que é o Máximo Divisor Comum (MDC)?', a: 'O MDC é o maior inteiro positivo que divide cada um dos números dados sem deixar resto. Por exemplo, MDC(12, 18) = 6.' },
      { q: 'O que é a fatoração em números primos?', a: 'A fatoração prima decompõe um número em produto de números primos. Por exemplo, 12 = 2² × 3 e 18 = 2 × 3². O MDC usa o menor expoente dos primos comuns, e o MMC usa o maior.' },
      { q: 'Onde MMC e MDC são usados na prática?', a: 'O MMC é usado para encontrar o denominador comum ao somar frações. O MDC é usado para simplificar frações à mínima expressão. Ambos são fundamentais em teoria dos números e criptografia.' },
    ],
    '/fr/lcm': [
      { q: 'Qu\'est-ce que le Plus Petit Commun Multiple (PPCM) ?', a: 'Le PPCM de deux entiers ou plus est le plus petit entier positif divisible par chacun d\'eux. Par exemple, PPCM(4, 6) = 12, car 12 est le plus petit nombre divisible par 4 et 6.' },
      { q: 'Qu\'est-ce que le Plus Grand Commun Diviseur (PGCD) ?', a: 'Le PGCD est le plus grand entier positif qui divise chacun des nombres donnés sans reste. Par exemple, PGCD(12, 18) = 6.' },
      { q: 'Qu\'est-ce que la décomposition en facteurs premiers ?', a: 'La décomposition en facteurs premiers exprime un nombre comme produit de nombres premiers. Par exemple, 12 = 2² × 3 et 18 = 2 × 3². Le PGCD utilise l\'exposant minimum des primes communs, le PPCM utilise le maximum.' },
      { q: 'Où PPCM et PGCD sont-ils utilisés en pratique ?', a: 'Le PPCM sert à trouver le dénominateur commun pour additionner des fractions. Le PGCD sert à simplifier des fractions à leur expression irréductible. Tous deux sont fondamentaux en théorie des nombres et en cryptographie.' },
    ],

    /* ── WORD COUNTER ── */
    '/word-counter': [
      { q: 'How does the word count work?', a: 'Words are counted by splitting the text on whitespace (spaces, tabs, newlines) and filtering empty chunks. Punctuation attached to words (like "hello," or "end.") counts as part of that word.' },
      { q: 'How is reading time estimated?', a: 'Reading time is calculated at 200 words per minute — the average silent reading speed for adults. A 1,000-word article would take approximately 5 minutes to read.' },
      { q: 'Does it count sentences and paragraphs?', a: 'Yes. Sentences are split by periods, exclamation marks, and question marks. Paragraphs are split by blank lines (double line breaks). Single line breaks are not counted as paragraph separators.' },
      { q: 'What is the character count used for?', a: 'Character counts are essential for social media (Twitter/X has a 280-character limit), SMS messaging, SEO meta descriptions (155–160 characters recommended), and academic submissions with character limits.' },
    ],
    '/es/word-counter': [
      { q: '¿Cómo funciona el contador de palabras?', a: 'Las palabras se cuentan dividiendo el texto por espacios en blanco y filtrando fragmentos vacíos. La puntuación unida a palabras ("hola," o "fin.") cuenta como parte de esa palabra.' },
      { q: '¿Cómo se estima el tiempo de lectura?', a: 'El tiempo de lectura se calcula a 200 palabras por minuto — la velocidad promedio de lectura silenciosa para adultos. Un artículo de 1.000 palabras tarda aproximadamente 5 minutos en leerse.' },
      { q: '¿Cuenta oraciones y párrafos?', a: 'Sí. Las oraciones se dividen por puntos, signos de exclamación e interrogación. Los párrafos se separan por líneas en blanco (doble salto de línea). Un salto de línea simple no cuenta como separador de párrafo.' },
      { q: '¿Para qué sirve el conteo de caracteres?', a: 'El conteo de caracteres es esencial para redes sociales (Twitter/X tiene límite de 280 caracteres), mensajes SMS, meta descripciones SEO (se recomiendan 155–160 caracteres) y trabajos académicos con límite de caracteres.' },
    ],
    '/pt/word-counter': [
      { q: 'Como funciona a contagem de palavras?', a: 'As palavras são contadas dividindo o texto por espaços em branco e filtrando fragmentos vazios. A pontuação anexada às palavras ("olá," ou "fim.") conta como parte dessa palavra.' },
      { q: 'Como o tempo de leitura é estimado?', a: 'O tempo de leitura é calculado a 200 palavras por minuto — a velocidade média de leitura silenciosa para adultos. Um artigo de 1.000 palavras leva aproximadamente 5 minutos para ser lido.' },
      { q: 'Ele conta frases e parágrafos?', a: 'Sim. As frases são divididas por pontos, exclamações e interrogações. Os parágrafos são separados por linhas em branco (dupla quebra de linha). Uma quebra de linha simples não conta como separador de parágrafo.' },
      { q: 'Para que serve a contagem de caracteres?', a: 'A contagem de caracteres é essencial para redes sociais (Twitter/X tem limite de 280 caracteres), SMS, meta descrições de SEO (recomenda-se 155–160 caracteres) e trabalhos acadêmicos com limite de caracteres.' },
    ],
    '/fr/word-counter': [
      { q: 'Comment fonctionne le compteur de mots ?', a: 'Les mots sont comptés en divisant le texte par les espaces blancs et en filtrant les fragments vides. La ponctuation attachée aux mots ("bonjour," ou "fin.") compte comme faisant partie de ce mot.' },
      { q: 'Comment le temps de lecture est-il estimé ?', a: 'Le temps de lecture est calculé à 200 mots par minute — la vitesse moyenne de lecture silencieuse pour les adultes. Un article de 1 000 mots prend environ 5 minutes à lire.' },
      { q: 'Compte-t-il les phrases et les paragraphes ?', a: 'Oui. Les phrases sont divisées par les points, les points d\'exclamation et d\'interrogation. Les paragraphes sont séparés par des lignes vides (double saut de ligne). Un simple saut de ligne ne compte pas comme séparateur de paragraphe.' },
      { q: 'À quoi sert le comptage de caractères ?', a: 'Le comptage de caractères est essentiel pour les réseaux sociaux (Twitter/X a une limite de 280 caractères), les SMS, les méta-descriptions SEO (155–160 caractères recommandés) et les soumissions académiques avec limite de caractères.' },
    ],

    /* ── WEIGHTED AVERAGE ── */
    '/weighted-average': [
      { q: 'What is a weighted average?', a: 'A weighted average assigns a different importance (weight) to each value before averaging. For example, if a final exam counts 60% and assignments count 40%, the final exam has more influence on the overall grade.' },
      { q: 'How is a weighted average calculated?', a: 'Multiply each grade by its weight, sum those products, then divide by the total weight. Formula: Σ(grade × weight) ÷ Σ(weights). This calculator does it automatically as you type.' },
      { q: 'What grade scale should I use?', a: 'Choose 0–10 for European/LATAM systems, 0–100 for US/percent systems, or 0–20 for France. The scale only affects what grades you enter — the weighted average formula is identical in all cases.' },
      { q: 'What is the difference between weighted and simple average?', a: 'A simple average treats all subjects equally. A weighted average accounts for different credit hours or importance. If all weights are equal, the weighted average equals the simple average.' },
    ],
    '/es/weighted-average': [
      { q: '¿Qué es el promedio ponderado?', a: 'El promedio ponderado asigna una importancia diferente (peso) a cada valor antes de promediar. Por ejemplo, si el examen final vale 60% y las tareas 40%, el examen influye más en la nota final.' },
      { q: '¿Cómo se calcula el promedio ponderado?', a: 'Se multiplica cada nota por su peso, se suman esos productos y se divide por el peso total. Fórmula: Σ(nota × peso) ÷ Σ(pesos). Esta calculadora lo hace automáticamente mientras escribís.' },
      { q: '¿Qué escala de notas debo usar?', a: 'Elegí 0–10 para sistemas europeos/LATAM, 0–100 para sistemas de porcentaje, o 0–20 para Francia. La escala solo afecta qué notas ingresás — la fórmula del promedio ponderado es idéntica en todos los casos.' },
      { q: '¿Cuál es la diferencia entre promedio ponderado y simple?', a: 'El promedio simple trata todas las materias por igual. El ponderado considera diferentes créditos o importancia. Si todos los pesos son iguales, el promedio ponderado coincide con el simple.' },
    ],
    '/pt/weighted-average': [
      { q: 'O que é média ponderada?', a: 'A média ponderada atribui uma importância diferente (peso) a cada valor antes de calcular a média. Por exemplo, se a prova final vale 60% e as tarefas 40%, a prova influencia mais na nota final.' },
      { q: 'Como se calcula a média ponderada?', a: 'Multiplica-se cada nota pelo seu peso, soma-se esses produtos e divide-se pelo peso total. Fórmula: Σ(nota × peso) ÷ Σ(pesos). Esta calculadora faz isso automaticamente enquanto você digita.' },
      { q: 'Qual escala de notas devo usar?', a: 'Escolha 0–10 para sistemas europeus/LATAM, 0–100 para sistemas de porcentagem, ou 0–20 para a França. A escala só afeta quais notas você insere — a fórmula da média ponderada é idêntica em todos os casos.' },
      { q: 'Qual a diferença entre média ponderada e média simples?', a: 'A média simples trata todas as disciplinas igualmente. A ponderada considera diferentes créditos ou importâncias. Se todos os pesos forem iguais, a média ponderada coincide com a média simples.' },
    ],
    '/fr/weighted-average': [
      { q: 'Qu\'est-ce qu\'une moyenne pondérée ?', a: 'Une moyenne pondérée attribue une importance différente (coefficient) à chaque valeur avant de calculer la moyenne. Par exemple, si l\'examen final compte pour 60% et les devoirs pour 40%, l\'examen a plus d\'influence sur la note finale.' },
      { q: 'Comment calcule-t-on une moyenne pondérée ?', a: 'On multiplie chaque note par son coefficient, on additionne ces produits, puis on divise par la somme des coefficients. Formule : Σ(note × coeff) ÷ Σ(coefficients). Cette calculatrice le fait automatiquement au fil de la saisie.' },
      { q: 'Quelle échelle de notes utiliser ?', a: 'Choisissez 0–20 pour le système français, 0–10 pour les systèmes européens/latino-américains, ou 0–100 pour les systèmes en pourcentage. L\'échelle n\'affecte que les notes saisies — la formule est identique dans tous les cas.' },
      { q: 'Quelle est la différence entre moyenne pondérée et moyenne simple ?', a: 'La moyenne simple traite toutes les matières de façon égale. La moyenne pondérée tient compte des différents coefficients. Si tous les coefficients sont égaux, la moyenne pondérée est identique à la moyenne simple.' },
    ],
  };

  /* ── LANGUAGE DETECTION (from URL path) ────────────────────────────────── */
  var CW_LANG = (function(){
    var p = window.location.pathname.split('/');
    if (p[1] === 'es') return 'es';
    if (p[1] === 'pt') return 'pt';
    if (p[1] === 'fr') return 'fr';
    return 'en';
  })();
  if (!window.__LANG) window.__LANG = CW_LANG;

  /* Helper: switch language while preserving the rest of the path */
  function cwLangUrl(target) {
    var path = window.location.pathname;
    path = path.replace(/^\/(es|pt|fr)(\/|$)/, '$2') || '/';
    if (!path.startsWith('/')) path = '/' + path;
    return target === 'en' ? (path || '/') : '/' + target + (path === '/' ? '/' : path);
  }

  /* ── COUNTRY LIST ────────────────────────────────────────────────────────── */
  var CW_COUNTRY_LIST = [
    {code:'global',flag:'🌍',name:'Global'},
    {code:'US',flag:'🇺🇸',name:'USA'},          {code:'GB',flag:'🇬🇧',name:'UK'},
    {code:'CA',flag:'🇨🇦',name:'Canada'},       {code:'AU',flag:'🇦🇺',name:'Australia'},
    {code:'IE',flag:'🇮🇪',name:'Ireland'},      {code:'NZ',flag:'🇳🇿',name:'New Zealand'},
    {code:'SG',flag:'🇸🇬',name:'Singapore'},    {code:'AE',flag:'🇦🇪',name:'UAE'},
    {code:'AR',flag:'🇦🇷',name:'Argentina'},    {code:'MX',flag:'🇲🇽',name:'México'},
    {code:'CL',flag:'🇨🇱',name:'Chile'},        {code:'CO',flag:'🇨🇴',name:'Colombia'},
    {code:'PE',flag:'🇵🇪',name:'Perú'},         {code:'UY',flag:'🇺🇾',name:'Uruguay'},
    {code:'VE',flag:'🇻🇪',name:'Venezuela'},    {code:'EC',flag:'🇪🇨',name:'Ecuador'},
    {code:'BO',flag:'🇧🇴',name:'Bolivia'},      {code:'PY',flag:'🇵🇾',name:'Paraguay'},
    {code:'CR',flag:'🇨🇷',name:'Costa Rica'},   {code:'PA',flag:'🇵🇦',name:'Panamá'},
    {code:'DO',flag:'🇩🇴',name:'Rep. Dominicana'},{code:'PR',flag:'🇵🇷',name:'Puerto Rico'},
    {code:'GT',flag:'🇬🇹',name:'Guatemala'},    {code:'SV',flag:'🇸🇻',name:'El Salvador'},
    {code:'HN',flag:'🇭🇳',name:'Honduras'},     {code:'NI',flag:'🇳🇮',name:'Nicaragua'},
    {code:'CU',flag:'🇨🇺',name:'Cuba'},         {code:'ES',flag:'🇪🇸',name:'España'},
    {code:'BR',flag:'🇧🇷',name:'Brasil'},       {code:'PT',flag:'🇵🇹',name:'Portugal'},
    {code:'FR',flag:'🇫🇷',name:'France'},       {code:'BE',flag:'🇧🇪',name:'Belgique'},
    {code:'CH',flag:'🇨🇭',name:'Schweiz'},      {code:'DE',flag:'🇩🇪',name:'Deutschland'},
    {code:'AT',flag:'🇦🇹',name:'Österreich'},   {code:'SE',flag:'🇸🇪',name:'Sverige'},
    {code:'NO',flag:'🇳🇴',name:'Norge'},        {code:'DK',flag:'🇩🇰',name:'Danmark'},
    {code:'FI',flag:'🇫🇮',name:'Finland'},      {code:'NL',flag:'🇳🇱',name:'Nederland'},
    {code:'IT',flag:'🇮🇹',name:'Italia'},       {code:'GR',flag:'🇬🇷',name:'Ελλάδα'},
  ];
  var CW_FLAG_MAP = {};
  CW_COUNTRY_LIST.forEach(function(c){ CW_FLAG_MAP[c.code] = c.flag; });

  function cwGetCountry() {
    try { return localStorage.getItem('cw-country') || null; } catch(e){ return null; }
  }
  function cwSetCountry(code) {
    try { localStorage.setItem('cw-country', code); } catch(e){}
  }

  /* ── COUNTRY → PRIMARY LANGUAGE ─────────────────────────────────────────── */
  var COUNTRY_LANG = {
    /* English */
    'US':'en','GB':'en','CA':'en','AU':'en','IE':'en','NZ':'en','SG':'en','AE':'en',
    /* Spanish */
    'AR':'es','MX':'es','CL':'es','CO':'es','PE':'es','UY':'es','VE':'es',
    'EC':'es','BO':'es','PY':'es','CR':'es','PA':'es','DO':'es','PR':'es',
    'GT':'es','SV':'es','HN':'es','NI':'es','CU':'es','ES':'es',
    /* Portuguese */
    'BR':'pt','PT':'pt',
    /* French */
    'FR':'fr','BE':'fr',
    /* All others → English (closest available) */
  };

  function cwGetLangForCountry(code) {
    return COUNTRY_LANG[code] || 'en';
  }

  /* ── TIMEZONE → COUNTRY (for auto-detection) ─────────────────────────────── */
  var TZ_COUNTRY = {
    /* USA */
    'America/New_York':'US','America/Chicago':'US','America/Denver':'US',
    'America/Los_Angeles':'US','America/Anchorage':'US','Pacific/Honolulu':'US',
    'America/Phoenix':'US','America/Detroit':'US','America/Indiana/Indianapolis':'US',
    'America/Kentucky/Louisville':'US','America/Boise':'US',
    /* UK */
    'Europe/London':'GB',
    /* Canada */
    'America/Toronto':'CA','America/Vancouver':'CA','America/Edmonton':'CA',
    'America/Winnipeg':'CA','America/Halifax':'CA','America/St_Johns':'CA',
    'America/Regina':'CA','America/Whitehorse':'CA',
    /* Australia */
    'Australia/Sydney':'AU','Australia/Melbourne':'AU','Australia/Brisbane':'AU',
    'Australia/Perth':'AU','Australia/Adelaide':'AU','Australia/Darwin':'AU',
    'Australia/Hobart':'AU',
    /* Ireland */
    'Europe/Dublin':'IE',
    /* New Zealand */
    'Pacific/Auckland':'NZ','Pacific/Chatham':'NZ',
    /* Singapore */
    'Asia/Singapore':'SG',
    /* UAE */
    'Asia/Dubai':'AE',
    /* Argentina */
    'America/Argentina/Buenos_Aires':'AR','America/Argentina/Cordoba':'AR',
    'America/Argentina/Mendoza':'AR','America/Argentina/Tucuman':'AR',
    'America/Argentina/Salta':'AR','America/Argentina/Jujuy':'AR',
    'America/Argentina/San_Luis':'AR','America/Argentina/La_Rioja':'AR',
    'America/Argentina/Catamarca':'AR','America/Argentina/Rio_Gallegos':'AR',
    'America/Argentina/Ushuaia':'AR',
    /* Mexico */
    'America/Mexico_City':'MX','America/Monterrey':'MX','America/Tijuana':'MX',
    'America/Cancun':'MX','America/Merida':'MX','America/Chihuahua':'MX',
    'America/Hermosillo':'MX','America/Mazatlan':'MX',
    /* Chile */
    'America/Santiago':'CL','Pacific/Easter':'CL',
    /* Colombia */
    'America/Bogota':'CO',
    /* Peru */
    'America/Lima':'PE',
    /* Uruguay */
    'America/Montevideo':'UY',
    /* Venezuela */
    'America/Caracas':'VE',
    /* Ecuador */
    'America/Guayaquil':'EC','Pacific/Galapagos':'EC',
    /* Bolivia */
    'America/La_Paz':'BO',
    /* Paraguay */
    'America/Asuncion':'PY',
    /* Costa Rica */
    'America/Costa_Rica':'CR',
    /* Panama */
    'America/Panama':'PA',
    /* Dominican Republic */
    'America/Santo_Domingo':'DO',
    /* Puerto Rico */
    'America/Puerto_Rico':'PR',
    /* Guatemala */
    'America/Guatemala':'GT',
    /* El Salvador */
    'America/El_Salvador':'SV',
    /* Honduras */
    'America/Tegucigalpa':'HN',
    /* Nicaragua */
    'America/Managua':'NI',
    /* Cuba */
    'America/Havana':'CU',
    /* Spain */
    'Europe/Madrid':'ES','Africa/Ceuta':'ES','Atlantic/Canary':'ES',
    /* Brazil */
    'America/Sao_Paulo':'BR','America/Manaus':'BR','America/Belem':'BR',
    'America/Fortaleza':'BR','America/Recife':'BR','America/Maceio':'BR',
    'America/Bahia':'BR','America/Cuiaba':'BR','America/Porto_Velho':'BR',
    'America/Rio_Branco':'BR','America/Noronha':'BR','America/Santarem':'BR',
    'America/Boa_Vista':'BR','America/Araguaina':'BR',
    /* Portugal */
    'Europe/Lisbon':'PT','Atlantic/Madeira':'PT','Atlantic/Azores':'PT',
    /* France */
    'Europe/Paris':'FR',
    /* Belgium */
    'Europe/Brussels':'BE',
    /* Switzerland */
    'Europe/Zurich':'CH',
    /* Germany */
    'Europe/Berlin':'DE',
    /* Austria */
    'Europe/Vienna':'AT',
    /* Sweden */
    'Europe/Stockholm':'SE',
    /* Norway */
    'Europe/Oslo':'NO',
    /* Denmark */
    'Europe/Copenhagen':'DK',
    /* Finland */
    'Europe/Helsinki':'FI',
    /* Netherlands */
    'Europe/Amsterdam':'NL',
    /* Italy */
    'Europe/Rome':'IT',
    /* Greece */
    'Europe/Athens':'GR',
  };

  function cwDetectCountryFromTZ() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return TZ_COUNTRY[tz] || null;
    } catch(e) { return null; }
  }

  /* ── STYLES ───────────────────────────────────────────────────────────────── */
  var css = [
    /* Hamburger button */
    '#nav-toggle{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4.5px;',
    'width:36px;height:36px;padding:0;background:none;border:none;cursor:pointer;',
    'border-radius:8px;flex-shrink:0;transition:background .15s;}',
    '#nav-toggle:hover{background:rgba(0,0,0,.06);}',
    '#nav-toggle .nb{display:block;width:18px;height:2px;background:#080A12;border-radius:1px;transition:.2s;}',
    'html[data-theme="dark"] #nav-toggle .nb{background:#E2E4F0 !important;}',
    'html[data-theme="dark"] #nav-toggle:hover{background:rgba(255,255,255,.08) !important;}',

    /* Backdrop */
    '#nav-bd{display:none;position:fixed;inset:0;background:rgba(0,0,0,.38);z-index:9998;',
    'backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);}',
    '#nav-bd.nv-open{display:block;}',

    /* Panel */
    '#nav-panel{position:fixed;top:0;left:0;bottom:0;width:min(300px,86vw);',
    'background:#0A0E1A;z-index:9999;display:flex;flex-direction:column;',
    'transform:translateX(-100%);transition:transform .28s cubic-bezier(.32,0,.15,1);',
    'box-shadow:4px 0 40px rgba(0,0,0,.18);}',
    '#nav-panel.nv-open{transform:translateX(0);}',

    /* Panel header */
    '#nav-ph{display:flex;align-items:center;justify-content:space-between;',
    'padding:0 14px 0 18px;height:58px;border-bottom:1px solid #1F2438;flex-shrink:0;}',
    '.nv-logo{font-family:"Inter",sans-serif;font-size:15px;font-weight:700;',
    'color:#fff;letter-spacing:-.03em;text-decoration:none;}',
    '.nv-logo span{color:#4F6BFF;}',
    '#nav-x{width:30px;height:30px;border:none;background:none;cursor:pointer;font-size:16px;',
    'color:rgba(255,255,255,.5);border-radius:6px;display:flex;align-items:center;justify-content:center;',
    'transition:background .12s;}#nav-x:hover{background:rgba(255,255,255,.08);color:#fff;}',

    /* Search */
    '#nav-sw{padding:10px 14px;border-bottom:1px solid #1F2438;flex-shrink:0;',
    'display:flex;align-items:center;gap:8px;background:#141929;}',
    '#nav-sw svg{flex-shrink:0;color:rgba(255,255,255,.3);}',
    '#nav-si{flex:1;border:none;background:transparent;font-family:"Inter",sans-serif;',
    'font-size:14px;color:#fff;outline:none;}',
    '#nav-si::placeholder{color:rgba(255,255,255,.3);}',

    /* List */
    '#nav-list{flex:1;overflow-y:auto;padding:8px 0 28px;}',
    '.nvc-title-link{display:block;font-size:10px;font-weight:700;letter-spacing:.1em;',
    'text-transform:uppercase;color:rgba(255,255,255,.35);padding:14px 18px 5px;',
    'text-decoration:none;transition:color .12s;}',
    '.nvc-title-link:hover,.nvc-title-link.nv-cat-active{color:#4F6BFF;}',
    '.nv-item{display:flex;flex-direction:column;gap:1px;padding:9px 18px;',
    'text-decoration:none;color:rgba(255,255,255,.75);transition:background .12s;',
    'border-left:2.5px solid transparent;}',
    '.nv-item:hover,.nv-item.nv-active{background:rgba(79,107,255,.12);border-left-color:#4F6BFF;}',
    '.nv-item-n{font-size:13px;font-weight:600;line-height:1.25;color:rgba(255,255,255,.9);}',
    '.nv-item-d{font-size:11px;color:rgba(255,255,255,.4);line-height:1.3;}',
    '#nav-empty{padding:20px 18px;font-size:13px;color:rgba(255,255,255,.3);display:none;}',
    '.nv-hr{height:1px;background:#1F2438;margin:8px 0;}',

    /* Formatted number inputs */
    'input.nv-num-fmt{transition:border-color .15s;}',
    'input.nv-num-fmt:focus{border-color:#1A5FE8 !important;outline:none;}',

    /* ── RESPONSIVE GLOBAL ───────────────────────────────────────────────── */
    '.result-main{font-size:clamp(22px,8vw,52px)}',
    '.stat-val{min-width:0;overflow-wrap:break-word}',
    '.cat-name{overflow-wrap:break-word;word-break:break-word}',
    '@media(max-width:480px){.cats-grid{grid-template-columns:1fr}}',
    '@media(max-width:400px){.result-rows,.stats-grid{grid-template-columns:1fr}}',
    '@media(max-width:480px){',
    '.ref-row{flex-direction:column;align-items:stretch;gap:10px}',
    '.ref-sep{display:none}',
    '.ref-anios-wrap{flex-direction:row;align-items:center}',
    '.ref-anios-wrap input{width:90px}',
    '}',
    '@media(max-width:480px){',
    '.card>[style]{grid-template-columns:1fr !important}',
    '}',

    /* ── FAQ ──────────────────────────────────────────────────────────────── */
    '.faq-section{max-width:520px;margin:0 auto;padding:0 20px 48px}',
    '.faq-heading{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;',
    'color:var(--ink-faint);margin-bottom:12px;display:flex;align-items:center;gap:8px}',
    '.faq-heading::after{content:"";flex:1;height:1px;background:var(--border)}',
    '.faq-item{background:var(--surface);border:1px solid var(--border);',
    'border-radius:var(--radius-sm);margin-bottom:8px;overflow:hidden}',
    '.faq-item summary{padding:14px 16px;font-size:14px;font-weight:600;cursor:pointer;',
    'list-style:none;display:flex;justify-content:space-between;align-items:center;',
    'gap:12px;transition:color .15s}',
    '.faq-item summary::-webkit-details-marker{display:none}',
    '.faq-item summary::after{content:"+";font-size:20px;font-weight:300;',
    'color:var(--ink-faint);flex-shrink:0;transition:transform .2s;line-height:1}',
    '.faq-item[open]>summary{color:var(--hi)}',
    '.faq-item[open]>summary::after{transform:rotate(45deg)}',
    '.faq-a{padding:0 16px 14px;font-size:13px;color:var(--ink-light);line-height:1.65}',

    /* ── RELATED CALCULATORS ───────────────────────────────────────────────── */
    '.related-section{max-width:520px;margin:0 auto;padding:0 20px 32px}',
    '.related-heading{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;',
    'color:var(--ink-faint);margin-bottom:12px;display:flex;align-items:center;gap:8px}',
    '.related-heading::after{content:"";flex:1;height:1px;background:var(--border)}',
    '.related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}',
    '.related-card{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;',
    'background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius-sm);',
    'text-decoration:none;color:var(--ink);transition:border-color .15s,transform .15s;text-align:center}',
    '.related-card:hover{border-color:var(--hi);transform:translateY(-2px)}',
    '.related-icon{font-size:24px;line-height:1}',
    '.related-name{font-size:12px;font-weight:600;line-height:1.3;color:var(--ink)}',

    /* ── SHARE PANEL ─────────────────────────────────────────────────────── */
    '.share-wrap{max-width:520px;margin:0 auto;padding:0 20px 24px}',
    '.share-row{display:flex;flex-wrap:wrap;gap:8px;}',
    /* Share panel buttons — pill style */
    '.sp-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;',
    'padding:9px 15px;background:var(--surface);border:1.5px solid var(--border);',
    'border-radius:99px;font-family:inherit;font-size:13px;',
    'font-weight:600;color:var(--ink-light);cursor:pointer;transition:all .15s;white-space:nowrap;}',
    '.sp-btn:hover{border-color:var(--hi);color:var(--hi);background:var(--hi-soft)}',
    '.sp-btn.sp-copied{border-color:#16a34a !important;color:#16a34a !important;background:rgba(22,163,74,.06) !important}',
    /* Legacy .share-btn alias (keep for any pages that hardcode it) */
    '.share-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;',
    'padding:9px 15px;background:var(--surface);border:1.5px solid var(--border);',
    'border-radius:99px;font-family:inherit;font-size:13px;',
    'font-weight:600;color:var(--ink-light);cursor:pointer;transition:all .15s;}',
    '.share-btn:hover{border-color:var(--hi);color:var(--hi);background:var(--hi-soft)}',
    '.share-btn.nv-copied{border-color:#16a34a !important;color:#16a34a !important}',
    /* Embed modal */
    '.embed-ov{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;',
    'display:flex;align-items:center;justify-content:center;padding:20px;}',
    '.embed-modal{background:#0C1528;border-radius:16px;padding:28px;',
    'max-width:500px;width:100%;position:relative;box-shadow:0 24px 60px rgba(0,0,0,.5);}',
    '.embed-modal-ttl{font-size:17px;font-weight:700;color:#fff;margin-bottom:6px;}',
    '.embed-modal-sub{font-size:13px;color:rgba(255,255,255,.45);margin-bottom:18px;}',
    '.embed-code{background:#060d1a;border:1px solid rgba(255,255,255,.1);border-radius:10px;',
    'padding:14px 16px;font-family:"JetBrains Mono",monospace;font-size:12px;color:#86EFAC;',
    'line-height:1.7;word-break:break-all;margin-bottom:14px;user-select:all;cursor:text;}',
    '.embed-copy-btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;',
    'border-radius:10px;border:1.5px solid rgba(255,255,255,.2);background:transparent;',
    'color:rgba(255,255,255,.7);font-weight:600;font-size:13px;cursor:pointer;',
    'font-family:inherit;transition:all .15s;}',
    '.embed-copy-btn:hover{border-color:rgba(255,255,255,.5);color:#fff;}',
    '.embed-close{position:absolute;top:14px;right:14px;background:none;border:none;',
    'color:rgba(255,255,255,.4);font-size:22px;cursor:pointer;padding:4px 8px;',
    'border-radius:6px;line-height:1;}',
    '.embed-close:hover{color:#fff;background:rgba(255,255,255,.1);}',

    /* ── FAVORITES CSS ────────────────────────────────────────────────────── */
    /* Card star (visible on hover or when active) */
    '.fav-btn{position:absolute;top:8px;right:8px;background:none;border:none;',
    'cursor:pointer;font-size:15px;line-height:1;padding:4px 5px;',
    'color:rgba(120,120,140,.35);transition:color .15s,transform .12s;',
    'z-index:2;opacity:0;pointer-events:none;border-radius:6px;}',
    '.card:hover .fav-btn,.fav-btn.active{opacity:1;pointer-events:auto;}',
    '.fav-btn:hover,.fav-btn.active{color:#FBBF24;}',
    '.fav-btn:hover{transform:scale(1.2);}',
    /* Inline save button (share-wrap) */
    '.fav-save-btn{flex-shrink:0;display:flex;align-items:center;gap:6px;',
    'padding:11px 14px;background:var(--surface,#fff);border:1.5px solid var(--border,#D4D8E6);',
    'border-radius:var(--radius-sm,10px);font-family:inherit;font-size:13px;font-weight:600;',
    'color:var(--ink-light,#60647A);cursor:pointer;transition:all .15s;white-space:nowrap;}',
    '.fav-save-btn:hover{border-color:#FBBF24;color:#D97706;}',
    '.fav-save-btn.active{border-color:#FBBF24;color:#D97706;background:rgba(251,191,36,.06);}',
    /* Header favorites button */
    '.fav-hdr-btn{display:flex;align-items:center;gap:4px;background:none;border:none;',
    'cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;letter-spacing:.03em;',
    'padding:5px 8px;border-radius:7px;transition:all .15s;flex-shrink:0;line-height:1;}',
    'html[data-theme="dark"] .fav-hdr-btn{color:rgba(255,255,255,.45);}',
    'html:not([data-theme="dark"]) .fav-hdr-btn{color:rgba(10,14,26,.38);}',
    'html[data-theme="dark"] .fav-hdr-btn:hover{background:rgba(255,255,255,.08);color:rgba(255,255,255,.8);}',
    'html:not([data-theme="dark"]) .fav-hdr-btn:hover{background:rgba(10,14,26,.06);color:rgba(10,14,26,.7);}',
    'html[data-theme="dark"] .fav-hdr-btn.has-favs .fav-hdr-star{color:#FBBF24;}',
    'html:not([data-theme="dark"]) .fav-hdr-btn.has-favs .fav-hdr-star{color:#D97706;}',
    '.fav-badge{display:none;align-items:center;justify-content:center;',
    'min-width:15px;height:15px;background:#FBBF24;color:#000;',
    'font-size:10px;font-weight:800;border-radius:99px;padding:0 4px;line-height:1;',
    'margin-left:1px;}',

    /* ── DESKTOP RESPONSIVE (≥768px) ──────────────────────────────────────── */
    /* Expand calculator content from mobile 520px to desktop 720px.           */
    /* .page is the main calculator container used on most pages.              */
    /* nav.js sections (FAQ, related, share) expand to match.                 */
    '@media(min-width:768px){',
    '.page{max-width:720px!important;}',
    '.faq-section{max-width:720px!important;}',
    '.related-section{max-width:720px!important;}',
    '.share-wrap{max-width:720px!important;padding-left:0!important;padding-right:0!important;}',
    '}',

    /* ── THEME TOGGLE ─────────────────────────────────────────────────────── */
    '#theme-toggle{width:34px;height:34px;border:none;background:none;cursor:pointer;',
    'border-radius:8px;display:flex;align-items:center;justify-content:center;',
    'flex-shrink:0;margin-left:8px;transition:background .15s;padding:0;color:#080A12;}',
    '#theme-toggle:hover{background:rgba(0,0,0,.06);}',
    'html[data-theme="dark"] #theme-toggle.on-dark{color:rgba(255,255,255,.75);}',
    'html[data-theme="dark"] #theme-toggle.on-dark:hover{background:rgba(255,255,255,.1);}',

    /* ── LIGHT MODE: HERO SECTIONS ───────────────────────────────────────── */
    'html:not([data-theme="dark"]) .hero,',
    'html:not([data-theme="dark"]) .hero-wrap,',
    'html:not([data-theme="dark"]) .cat-hero,',
    'html:not([data-theme="dark"]) .page-hero{',
    'background:transparent !important;',
    'color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .page-hero::before{display:none !important;}',
    'html:not([data-theme="dark"]) .page-hero h1{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .page-hero p{color:#5A607A !important;}',
    'html:not([data-theme="dark"]) .page-hero .breadcrumb,',
    'html:not([data-theme="dark"]) .page-hero .breadcrumb a,',
    'html:not([data-theme="dark"]) .page-hero .breadcrumb .curr,',
    'html:not([data-theme="dark"]) .page-hero .bc,',
    'html:not([data-theme="dark"]) .page-hero .bc a{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .calc-result{',
    'background:linear-gradient(135deg,#EEF1FF 0%,#F7F8FA 100%) !important;',
    'color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .hero h1,',
    'html:not([data-theme="dark"]) .hero-wrap h1,',
    'html:not([data-theme="dark"]) .cat-hero h1{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .hero .hero-sub,',
    'html:not([data-theme="dark"]) .hero-wrap .hero-sub,',
    'html:not([data-theme="dark"]) .cat-hero .hero-sub{color:#5A607A !important;}',
    'html:not([data-theme="dark"]) .hero .breadcrumb,',
    'html:not([data-theme="dark"]) .hero-wrap .breadcrumb,',
    'html:not([data-theme="dark"]) .cat-hero .breadcrumb{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .hero .breadcrumb a,',
    'html:not([data-theme="dark"]) .hero-wrap .breadcrumb a,',
    'html:not([data-theme="dark"]) .cat-hero .breadcrumb a{color:rgba(10,14,26,.45) !important;}',
    /* .bc and .sub are the breadcrumb/subtitle classes used across all older-template pages */
    'html:not([data-theme="dark"]) .hero .bc,html:not([data-theme="dark"]) .hero .bc a,html:not([data-theme="dark"]) .hero .bc span{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .hero .sub{color:#363B4F !important;}',
    /* .hero p covers pages that use a plain <p> for the subtitle (no .sub class) */
    'html:not([data-theme="dark"]) .hero p,html:not([data-theme="dark"]) .hero-inner p{color:#363B4F !important;}',

    'html:not([data-theme="dark"]) body{background:#F7F8FA !important;}',

    /* Result cards */
    'html:not([data-theme="dark"]) .result-card{background:linear-gradient(135deg,#F0F4FF 0%,#E8EEFF 100%) !important;border-color:rgba(79,107,255,.2) !important;}',
    'html:not([data-theme="dark"]) .result-card *{color:var(--ink,#0A0E1A) !important;}',
    'html:not([data-theme="dark"]) .result-card .stat-val{color:var(--accent,#4F6BFF) !important;}',
    'html:not([data-theme="dark"]) .result-card .result-eyebrow{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .result-card .result-date{color:rgba(10,14,26,.5) !important;}',
    'html:not([data-theme="dark"]) .result-card .stat-lbl{color:rgba(10,14,26,.55) !important;}',
    'html:not([data-theme="dark"]) .result-card .empty-state{color:rgba(10,14,26,.3) !important;}',
    'html:not([data-theme="dark"]) .result-card .time-chip.active{color:#fff !important;}',
    'html:not([data-theme="dark"]) .result-card .day-cell.active{color:#fff !important;}',
    'html:not([data-theme="dark"]) .result-row-lbl{color:rgba(10,14,26,.5) !important;}',
    'html:not([data-theme="dark"]) .result-row-val{color:#0A0E1A !important;}',
    '.cat-scroll{flex-wrap:wrap !important;overflow:visible !important;}',

    /* Homepage hero elements */
    'html:not([data-theme="dark"]) .hero h1 .acc{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .hero h1 .muted{background:linear-gradient(135deg,rgba(10,14,26,.7) 0%,rgba(79,107,255,.5) 100%) !important;-webkit-background-clip:text !important;background-clip:text !important;color:transparent !important;}',
    'html:not([data-theme="dark"]) .hero-lead{color:#363B4F !important;}',
    'html:not([data-theme="dark"]) .hero-eyebrow{background:rgba(79,107,255,.08) !important;border-color:rgba(79,107,255,.2) !important;color:#363B4F !important;}',
    'html:not([data-theme="dark"]) .btn-ghost{color:#363B4F !important;}',
    'html:not([data-theme="dark"]) .btn-ghost:hover{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .hero-card{background:rgba(255,255,255,.7) !important;border-color:rgba(79,107,255,.15) !important;}',
    'html:not([data-theme="dark"]) .hc-lbl{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .cat-chip{background:rgba(79,107,255,.06) !important;border-color:rgba(79,107,255,.15) !important;}',
    'html:not([data-theme="dark"]) .cat-chip:hover{background:rgba(79,107,255,.12) !important;border-color:rgba(79,107,255,.35) !important;}',
    'html:not([data-theme="dark"]) .cat-chip-name{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .cat-chip-n{color:rgba(10,14,26,.45) !important;}',

    /* Calc preview homepage */
    'html:not([data-theme="dark"]) .res-lbl{color:rgba(10,14,26,.45) !important;}',
    'html:not([data-theme="dark"]) .res-eyebrow{color:rgba(10,14,26,.5) !important;}',
    'html:not([data-theme="dark"]) .res-big{background:linear-gradient(135deg,#4F6BFF 20%,#7C5CFF 100%) !important;-webkit-background-clip:text !important;background-clip:text !important;color:transparent !important;}',
    'html:not([data-theme="dark"]) .res-detail{color:rgba(10,14,26,.55) !important;}',
    'html:not([data-theme="dark"]) .res-detail strong{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .res-breakdown{border-top-color:rgba(79,107,255,.15) !important;}',
    'html:not([data-theme="dark"]) .br-row{color:rgba(10,14,26,.6) !important;border-top-color:rgba(79,107,255,.12) !important;}',
    'html:not([data-theme="dark"]) .br-row b{color:#0A0E1A !important;}',

    /* ── DARK MODE ────────────────────────────────────────────────────────── */
    'body,header,input,select,textarea,.card,.config-card,.periods-card,',
    '.summary-card,.cal-wrap,.section,.cat-block,.result-card,footer{',
    'transition:background-color .2s,border-color .2s,color .2s;}',

    'html[data-theme="dark"]{',
    '--bg:#0E1525;--surface:#141929;--surface-2:#1A2038;',
    '--ink:#E2E4F0;--ink-2:#9BA0B8;--ink-light:#8A8FA8;--ink-3:#606580;--ink-faint:#404565;',
    '--line:#1F2438;--line-2:#1A2035;--border:#1F2438;',
    '--accent-soft:rgba(79,107,255,.15);--hi-soft:rgba(79,107,255,.12);',
    '--hi:#4F6BFF;',
    '}',

    'html[data-theme="dark"] body{background:#0E1525;color:#E2E4F0;}',

    /* ── DEFINITIVE HEADER ────────────────────────────────────────────────── */
    /* nav.js fully controls the <header>. Left group: hamburger + logo.      */
    /* Right group: language selector + country picker + theme toggle.        */
    /* Horizontal padding: 24px on each side (like Apple / MercadoLibre).    */
    'header:not(.nf-hero),#site-header{',
    'display:flex !important;align-items:center !important;',
    'justify-content:space-between !important;',
    /* 32px horizontal padding — enough to feel breathable at any width       */
    'padding:0 32px !important;height:64px !important;',
    'position:sticky !important;top:0 !important;z-index:100 !important;',
    'box-sizing:border-box !important;',
    '}',
    /* On narrower screens keep a minimum safe margin */
    '@media(max-width:520px){header:not(.nf-hero),#site-header{padding:0 16px !important;}}',
    /* Left group: hamburger + logo */
    '.hdr-left{display:flex;align-items:center;gap:14px;flex-shrink:0;}',
    /* Right group: lang pills + country + theme */
    '.hdr-right{display:flex;align-items:center;gap:8px;flex-shrink:0;}',
    /* Logo */
    '.logo{font-size:16px !important;font-weight:700 !important;letter-spacing:-0.03em !important;',
    'flex-shrink:0 !important;text-decoration:none !important;white-space:nowrap !important;',
    'display:flex !important;align-items:center !important;}',

    /* Light mode header */
    'html:not([data-theme="dark"]) header{background:#FFFFFF !important;border-bottom:1px solid #E4E7EE !important;}',
    'html:not([data-theme="dark"]) #site-header{background:#FFFFFF !important;border-bottom:1px solid #E4E7EE !important;}',
    'html:not([data-theme="dark"]) #nav-toggle .nb{background:rgba(10,14,26,.65) !important;}',
    'html:not([data-theme="dark"]) #nav-toggle:hover{background:rgba(10,14,26,.06) !important;}',
    'html:not([data-theme="dark"]) #theme-toggle{color:rgba(10,14,26,.55) !important;}',
    'html:not([data-theme="dark"]) #theme-toggle:hover{background:rgba(10,14,26,.06) !important;}',

    'html:not([data-theme="dark"]) .logo{color:#0A0E1A !important;}',
    'html:not([data-theme="dark"]) .logo span{color:#4F6BFF !important;}',
    'html:not([data-theme="dark"]) header a{color:#0A0E1A !important;}',

    'html[data-theme="dark"] header{background:#0A0E1A !important;border-bottom-color:#1F2438 !important;}',
    'html[data-theme="dark"] #site-header{background:#0A0E1A !important;border-bottom-color:#1F2438 !important;}',
    'html[data-theme="dark"] .logo{color:#E2E4F0 !important;}',
    'html[data-theme="dark"] .logo span{color:#4F6BFF !important;}',
    'html[data-theme="dark"] header a{color:#E2E4F0 !important;}',
    'html[data-theme="dark"] header a span{color:#4F6BFF !important;}',
    'html[data-theme="dark"] .logo .name{color:#fff !important;}',
    'html[data-theme="dark"] .logo .dot{color:#4F6BFF !important;}',
    'html[data-theme="dark"] #theme-toggle{color:rgba(255,255,255,.75);}',
    'html[data-theme="dark"] #theme-toggle:hover{background:rgba(255,255,255,.1);}',

    'html[data-theme="dark"] input,',
    'html[data-theme="dark"] select,',
    'html[data-theme="dark"] textarea{background:#141929 !important;color:#E2E4F0 !important;border-color:#1F2438 !important;}',

    'html[data-theme="dark"] .card,',
    'html[data-theme="dark"] .config-card,',
    'html[data-theme="dark"] .summary-card,',
    'html[data-theme="dark"] .section,',
    'html[data-theme="dark"] .stat,',
    'html[data-theme="dark"] .faq-item,',
    'html[data-theme="dark"] .related-card{',
    'background:#141929 !important;border-color:#1F2438 !important;}',

    'html[data-theme="dark"] main{background:transparent;}',
    'html[data-theme="dark"] .cat-block{background:#141929 !important;}',
    'html[data-theme="dark"] .cat-title{color:#E2E4F0 !important;}',
    'html[data-theme="dark"] .cards .card{background:#1A2038 !important;border-color:#1F2438 !important;}',
    'html[data-theme="dark"] .cards .card:hover{background:#202840 !important;}',
    'html[data-theme="dark"] .card-title{color:#E2E4F0 !important;}',
    'html[data-theme="dark"] .card-desc{color:#9BA0B8 !important;}',

    'html[data-theme="dark"] .calc-preview{background:#141929 !important;border-color:#1F2438 !important;}',
    'html[data-theme="dark"] .calc-inputs{border-color:#1F2438 !important;}',
    'html[data-theme="dark"] .calc-head{border-color:#1F2438 !important;}',
    'html[data-theme="dark"] .calc-h2{color:#E2E4F0 !important;}',
    'html[data-theme="dark"] .calc-sub{color:#9BA0B8 !important;}',
    'html[data-theme="dark"] .mode-tab{background:#0E1525 !important;border-color:#1F2438 !important;color:#9BA0B8 !important;}',
    'html[data-theme="dark"] .field input:not([type="range"]){background:#0E1525 !important;color:#E2E4F0 !important;}',

    /* Active/selected buttons in dark mode */
    'html[data-theme="dark"] .seg-btn.active,',
    'html[data-theme="dark"] .unit-btn.active{',
    'background:rgba(79,107,255,.18) !important;border-color:#4F6BFF !important;color:#4F6BFF !important;}',
    'html[data-theme="dark"] .act-btn.active{',
    'background:rgba(79,107,255,.12) !important;border-color:#4F6BFF !important;color:#E2E4F0 !important;}',

    /* Site footer */
    '.site-footer{border-top:1px solid var(--line,#E4E7EE);padding:28px 32px;font-size:12px;font-family:"JetBrains Mono",monospace;color:var(--ink-3,#858AA0);}',
    '.sf-inner{max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}',
    '.sf-logo{font-size:14px;font-weight:700;letter-spacing:-0.02em;color:var(--ink,#0A0E1A);text-decoration:none;}',
    '.sf-live{color:#4F6BFF;}',
    '.sf-links{display:flex;gap:16px;flex-wrap:wrap;}',
    '.sf-links a{color:inherit;text-decoration:none;transition:color .15s;}',
    '.sf-links a:hover{color:var(--ink,#0A0E1A);}',
    '.sf-sep{opacity:.4;}',
    '.sf-copy{opacity:.55;white-space:nowrap;}',
    '@media(max-width:640px){.sf-inner{flex-direction:column;align-items:center;text-align:center;gap:12px;}}',
    'html[data-theme="dark"] .site-footer{border-top-color:#1F2438;color:#404565;}',
    'html[data-theme="dark"] .sf-logo{color:#E2E4F0;}',
    'html[data-theme="dark"] .sf-links a:hover{color:#E2E4F0;}',

    /* ── CATEGORY PAGE GRID ─────────────────────────────────────────── */
    '.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:0}',
    '.calc-card{background:var(--surface,#fff);border:1.5px solid var(--line,#E4E7EE);border-radius:14px;',
    'padding:22px;display:flex;align-items:flex-start;gap:14px;text-decoration:none;',
    'color:var(--ink,#0A0E1A);transition:all .18s;cursor:pointer;}',
    '.calc-card:hover{border-color:#4F6BFF;transform:translateY(-2px);box-shadow:0 8px 28px rgba(79,107,255,.1);}',
    'html[data-theme="dark"] .calc-card{background:#141929 !important;border-color:#1F2438 !important;}',
    'html[data-theme="dark"] .calc-card:hover{border-color:#4F6BFF !important;}',
    '.calc-icon{font-size:26px;flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;',
    'justify-content:center;background:rgba(79,107,255,.08);border-radius:10px;border:1px solid rgba(79,107,255,.12);}',
    '.calc-info{flex:1;min-width:0;}',
    '.calc-name{font-size:15px;font-weight:700;margin-bottom:5px;letter-spacing:-.012em;',
    'color:var(--ink,#0A0E1A);display:flex;align-items:center;gap:7px;flex-wrap:wrap;}',
    'html[data-theme="dark"] .calc-name{color:#E2E4F0 !important;}',
    '.calc-desc{font-size:13px;color:var(--ink-3,#858AA0);line-height:1.5;}',
    '.badge-new{font-size:9px;font-weight:700;padding:2px 6px;',
    'background:rgba(34,197,94,.12);color:#16a34a;border-radius:4px;',
    'text-transform:uppercase;letter-spacing:.05em;font-family:"JetBrains Mono",monospace;white-space:nowrap;}',
    '@media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}',
    '@media(max-width:520px){.grid{grid-template-columns:1fr}.calc-card{padding:16px;}}',

    /* ── LANGUAGE SELECTOR (pills — desktop) ────────────────────────── */
    '.lang-seg{display:flex;align-items:center;background:rgba(255,255,255,.07);',
    'border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:3px;gap:1px;}',
    'html:not([data-theme="dark"]) .lang-seg{background:rgba(10,14,26,.04);border-color:rgba(10,14,26,.1);}',
    '.lang-btn{background:transparent;border:none;padding:5px 10px;border-radius:7px;',
    'font-size:12px;font-weight:700;letter-spacing:.04em;color:rgba(255,255,255,.5);',
    'cursor:pointer;font-family:inherit;transition:all .15s;line-height:1;}',
    'html:not([data-theme="dark"]) .lang-btn{color:rgba(10,14,26,.4);}',
    '.lang-btn:hover{color:rgba(255,255,255,.9);background:rgba(255,255,255,.1);}',
    'html:not([data-theme="dark"]) .lang-btn:hover{color:rgba(10,14,26,.75);background:rgba(10,14,26,.06);}',
    '.lang-btn.active{background:rgba(255,255,255,.16);color:#fff;font-weight:800;}',
    'html:not([data-theme="dark"]) .lang-btn.active{background:#4F6BFF;color:#fff;}',
    /* Mobile language select (replaces pills on small screens) */
    '.lang-sel-mob{display:none;border:1.5px solid rgba(255,255,255,.18);border-radius:8px;',
    'background:rgba(255,255,255,.07);font-family:inherit;font-size:12px;font-weight:700;',
    'letter-spacing:.04em;color:rgba(255,255,255,.85);cursor:pointer;outline:none;',
    'padding:5px 28px 5px 10px;-webkit-appearance:none;appearance:none;',
    'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'rgba(255,255,255,.5)\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");',
    'background-repeat:no-repeat;background-position:right 8px center;flex-shrink:0;}',
    'html:not([data-theme="dark"]) .lang-sel-mob{border-color:rgba(10,14,26,.15);background:rgba(10,14,26,.04);color:rgba(10,14,26,.7);',
    'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'rgba(10,14,26,.4)\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");',
    'background-repeat:no-repeat;background-position:right 8px center;}',
    '.lang-sel-mob option{background:#0A0E1A;color:#fff;}',
    /* Show pills on desktop, dropdown on mobile */
    '@media(max-width:519px){.lang-seg{display:none!important;}.lang-sel-mob{display:block!important;}}',

    /* ── COUNTRY BUTTON + PICKER MODAL ───────────────────────────────── */
    '.cw-country-btn{background:none;border:1.5px solid rgba(255,255,255,.15);border-radius:8px;',
    'width:32px;height:32px;display:flex;align-items:center;justify-content:center;',
    'cursor:pointer;font-size:16px;line-height:1;transition:all .15s;flex-shrink:0;margin-left:4px;}',
    'html:not([data-theme="dark"]) .cw-country-btn{border-color:rgba(10,14,26,.15);}',
    '.cw-country-btn:hover{border-color:rgba(79,107,255,.5);transform:scale(1.08);}',
    '.cw-cpicker-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10001;',
    'display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(2px);}',
    '.cw-cpicker-modal{background:#0E1525;border:1px solid #1F2438;border-radius:20px;',
    'width:100%;max-width:460px;max-height:80vh;display:flex;flex-direction:column;overflow:hidden;',
    'box-shadow:0 24px 64px rgba(0,0,0,.5);}',
    'html:not([data-theme="dark"]) .cw-cpicker-modal{background:#fff;border-color:#E4E7EE;box-shadow:0 12px 40px rgba(10,14,26,.15);}',
    '.cw-cpicker-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 10px;}',
    '.cw-cpicker-title{font-size:16px;font-weight:700;color:#E2E4F0;letter-spacing:-.02em;}',
    'html:not([data-theme="dark"]) .cw-cpicker-title{color:#0A0E1A;}',
    '.cw-cpicker-close{background:none;border:none;cursor:pointer;font-size:18px;color:rgba(255,255,255,.4);',
    'padding:4px;border-radius:6px;transition:color .15s;line-height:1;}',
    '.cw-cpicker-close:hover{color:#fff;}',
    'html:not([data-theme="dark"]) .cw-cpicker-close{color:rgba(10,14,26,.35);}',
    'html:not([data-theme="dark"]) .cw-cpicker-close:hover{color:#0A0E1A;}',
    '.cw-cpicker-search{margin:0 12px 10px;padding:10px 14px;background:#141929;',
    'border:1px solid #1F2438;border-radius:10px;font-family:inherit;font-size:14px;',
    'color:#E2E4F0;outline:none;transition:border-color .15s;width:calc(100% - 24px);box-sizing:border-box;}',
    '.cw-cpicker-search:focus{border-color:#4F6BFF;}',
    'html:not([data-theme="dark"]) .cw-cpicker-search{background:#F0F2F7;border-color:#D4D8E6;color:#0A0E1A;}',
    '.cw-cpicker-grid{overflow-y:auto;padding:4px 12px 16px;',
    'display:grid;grid-template-columns:1fr 1fr;gap:4px;}',
    '.cw-cpicker-item{display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;',
    'border:1.5px solid transparent;background:transparent;font-family:inherit;font-size:13px;',
    'font-weight:500;color:rgba(255,255,255,.7);cursor:pointer;transition:all .15s;text-align:left;width:100%;}',
    'html:not([data-theme="dark"]) .cw-cpicker-item{color:#363B4F;}',
    '.cw-cpicker-item:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);}',
    'html:not([data-theme="dark"]) .cw-cpicker-item:hover{background:#F0F2F7;border-color:#D4D8E6;}',
    '.cw-cpicker-item.selected{border-color:#4F6BFF !important;background:rgba(79,107,255,.12) !important;',
    'color:#4F6BFF !important;font-weight:700;}',
    '.cw-cpicker-flag{font-size:20px;flex-shrink:0;}',

    /* ── GLOBAL INPUT NORMALIZATION ───────────────────────────────────────────
       Ensures all calculator inputs use the site design system regardless of
       whether the page uses the old (DM Sans / --hi) or new (Inter / --accent)
       CSS variables. color-scheme:light prevents macOS/browser dark-mode from
       injecting dark backgrounds into native form elements.                   */
    'body{color-scheme:light;}',
    'input[type=number],input[type=text],input[type=email],input[type=date],',
    'input[type=time],input[type=search],input[type=url],select,textarea{',
    'font-family:"Inter",sans-serif!important;',
    'font-size:15px!important;',
    'border-radius:10px!important;',
    'border:1.5px solid #E4E7EE!important;',
    'background:#F7F8FA!important;',
    'color:#0A0E1A!important;',
    'padding:12px 14px!important;',
    'outline:none!important;',
    '-moz-appearance:textfield!important;',
    'transition:border-color .15s!important;',
    '}',
    'input[type=number]::-webkit-outer-spin-button,',
    'input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important;}',
    'input:focus,select:focus,textarea:focus{border-color:#4F6BFF!important;background:#fff!important;}',
    'input::placeholder,textarea::placeholder{color:#858AA0!important;}',
    /* Segment / toggle buttons normalisation (old .seg-btn, .unit-btn, .act-btn) */
    '.seg-btn,.unit-btn,.act-btn{font-family:"Inter",sans-serif!important;border-radius:10px!important;}',
    '.seg-btn.active,.unit-btn.active,.act-btn.active{background:#EEF1FF!important;border-color:#4F6BFF!important;color:#4F6BFF!important;}',
    /* select arrow fix after background override */
    'select{appearance:none!important;-webkit-appearance:none!important;',
    'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23858AA0\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")!important;',
    'background-repeat:no-repeat!important;background-position:right 14px center!important;',
    'padding-right:36px!important;cursor:pointer!important;}',
    /* Currency / unit prefix inputs — restore left padding so the $, €, % symbol
       does not overlap the typed value. Classes used across pages:
       .with-prefix (loan), .has-prefix (compound-interest, savings, tip, AR pages) */
    'input.with-prefix,input.has-prefix,input.input-field.has-prefix{padding-left:30px!important;}',

  ].join('');

  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  /* ── OG:IMAGE FALLBACK ──────────────────────────────────── */
  if (!document.querySelector('meta[property="og:image"]')) {
    var ogImg = document.createElement('meta');
    ogImg.setAttribute('property', 'og:image');
    ogImg.setAttribute('content', 'https://calculate.website/og-image.png');
    document.head.appendChild(ogImg);
    var ogW = document.createElement('meta');
    ogW.setAttribute('property', 'og:image:width');
    ogW.setAttribute('content', '1200');
    document.head.appendChild(ogW);
    var ogH = document.createElement('meta');
    ogH.setAttribute('property', 'og:image:height');
    ogH.setAttribute('content', '630');
    document.head.appendChild(ogH);
  }
  if (!document.querySelector('meta[property="og:locale"]')) {
    var ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'en_US');
    document.head.appendChild(ogLocale);
  }

  /* ── THEME TOGGLE ───────────────────────────────────────── */
  var MOON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var SUN_SVG  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  var themeBtn = document.createElement('button');
  themeBtn.id = 'theme-toggle';
  themeBtn.setAttribute('aria-label', 'Toggle theme');

  function applyTheme(theme, save) {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    if (save) localStorage.setItem('cw-theme', theme);
  }

  themeBtn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  });

  var saved = localStorage.getItem('cw-theme');
  var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (sysDark ? 'dark' : 'light'), false);

  /* ── LANGUAGE SELECTOR (pills — desktop) ───────────────── */
  var langSeg = document.createElement('div');
  langSeg.className = 'lang-seg';
  langSeg.setAttribute('role', 'group');
  langSeg.setAttribute('aria-label', 'Language');
  ['en', 'es', 'pt', 'fr'].forEach(function(l) {
    var lb = document.createElement('button');
    lb.className = 'lang-btn' + (l === CW_LANG ? ' active' : '');
    lb.textContent = l.toUpperCase();
    lb.addEventListener('click', function() { window.location.href = cwLangUrl(l); });
    langSeg.appendChild(lb);
  });

  /* ── LANGUAGE SELECTOR (dropdown — mobile) ──────────────── */
  var langSelMob = document.createElement('select');
  langSelMob.className = 'lang-sel-mob';
  langSelMob.setAttribute('aria-label', 'Language');
  ['en', 'es', 'pt', 'fr'].forEach(function(l) {
    var opt = document.createElement('option');
    opt.value = l;
    opt.textContent = l.toUpperCase();
    if (l === CW_LANG) opt.selected = true;
    langSelMob.appendChild(opt);
  });
  langSelMob.addEventListener('change', function() {
    window.location.href = cwLangUrl(this.value);
  });

  /* ── COUNTRY PICKER BUTTON ──────────────────────────────── */
  var cwCountryBtn = document.createElement('button');
  cwCountryBtn.className = 'cw-country-btn';
  cwCountryBtn.id = 'cw-country-btn';
  cwCountryBtn.setAttribute('aria-label', 'Select country');
  cwCountryBtn.title = 'Select country';
  cwCountryBtn.textContent = CW_FLAG_MAP[cwGetCountry()] || '🌍';

  /* ── HAMBURGER BUTTON ───────────────────────────────────── */
  var btn = document.createElement('button');
  btn.id = 'nav-toggle';
  btn.setAttribute('aria-label', 'Open menu');
  btn.innerHTML = '<span class="nb"></span><span class="nb"></span><span class="nb"></span>';

  /* ── BUILD DEFINITIVE HEADER ────────────────────────────── */
  /* nav.js completely rebuilds the <header>:                  */
  /*   LEFT:  [hamburger] [logo]                               */
  /*   RIGHT: [lang-pills] [country] [theme]                   */
  var hdr = document.querySelector('#site-header') || document.querySelector('header');
  if (hdr) {
    /* Determine logo href from current language */
    var logoHref = CW_LANG === 'es' ? '/es/' : CW_LANG === 'pt' ? '/pt/' : CW_LANG === 'fr' ? '/fr/' : '/';

    /* Logo element */
    var logoEl = document.createElement('a');
    logoEl.className = 'logo';
    logoEl.href = logoHref;
    logoEl.innerHTML = 'calculate<span>.website</span>';

    /* Left group: hamburger + logo */
    var hdrLeft = document.createElement('div');
    hdrLeft.className = 'hdr-left';
    hdrLeft.appendChild(btn);
    hdrLeft.appendChild(logoEl);

    /* Right group: lang-sel-mob (mobile) + lang-seg (desktop) + country + fav + theme */
    var hdrRight = document.createElement('div');
    hdrRight.className = 'hdr-right';
    hdrRight.appendChild(langSelMob);
    hdrRight.appendChild(langSeg);
    hdrRight.appendChild(cwCountryBtn);

    /* Favorites header button */
    var _favLangCode2 = (document.documentElement.lang||'en').substring(0,2);
    var _favLabelMap = {es:'Favoritos',pt:'Favoritos',fr:'Favoris',en:'Favorites'};
    var _favPagePrefix = (['es','pt','fr'].indexOf(_favLangCode2)>=0) ? '/'+_favLangCode2 : '';
    var favHdrBtn = document.createElement('button');
    favHdrBtn.className = 'fav-hdr-btn';
    favHdrBtn.title = _favLabelMap[_favLangCode2]||'Favorites';
    favHdrBtn.innerHTML = '<span class="fav-hdr-star">★</span><span class="fav-badge" style="display:none">0</span>';
    favHdrBtn.onclick = function(){ window.location.href = _favPagePrefix + '/favorites/'; };
    hdrRight.appendChild(favHdrBtn);

    hdrRight.appendChild(themeBtn);

    /* Replace header content entirely */
    hdr.innerHTML = '';
    hdr.appendChild(hdrLeft);
    hdr.appendChild(hdrRight);

    /* Apply definitive header styles inline — inline styles override ANY
       page CSS without needing !important battles.                        */
    hdr.style.cssText = [
      'display:flex',
      'align-items:center',
      'justify-content:space-between',
      'padding:0 32px',
      'height:64px',
      'position:sticky',
      'top:0',
      'z-index:100',
      'box-sizing:border-box',
      'border-bottom:1px solid #E4E7EE',
      'background:#ffffff'
    ].join(';');
    /* Dark mode: override bg/border via data-theme watcher */
    var updateHdrTheme = function() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      hdr.style.background = dark ? '#0A0E1A' : '#ffffff';
      hdr.style.borderBottomColor = dark ? '#1F2438' : '#E4E7EE';
    };
    updateHdrTheme();
    /* Hook into theme toggle */
    var _origApplyTheme = applyTheme;
    applyTheme = function(theme, save) {
      _origApplyTheme(theme, save);
      updateHdrTheme();
    };
    /* Re-apply after initial theme load */
    var savedTheme = localStorage.getItem('cw-theme');
    var sysDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateHdrTheme();
  }

  /* ── AUTO-DETECT COUNTRY ON FIRST VISIT ─────────────────── */
  /* Saves the user's country (for AR-specific calculators).   */
  /* Does NOT auto-redirect language — users navigate manually  */
  /* via the language pills to avoid confusing silent redirects.*/
  (function() {
    if (cwGetCountry() !== null) return; // already set, skip
    var detected = cwDetectCountryFromTZ();
    var code = detected || 'global';
    cwSetCountry(code);
    cwCountryBtn.textContent = CW_FLAG_MAP[code] || '🌍';
    /* No language redirect — let users choose their language   */
  })();

  /* ── COUNTRY PICKER MODAL ───────────────────────────────── */
  function openCountryPicker() {
    var overlay = document.createElement('div');
    overlay.className = 'cw-cpicker-overlay';
    var saved = cwGetCountry();
    overlay.innerHTML =
      '<div class="cw-cpicker-modal">'
      + '<div class="cw-cpicker-head">'
      +   '<div class="cw-cpicker-title">Select your country</div>'
      +   '<button class="cw-cpicker-close" aria-label="Close">✕</button>'
      + '</div>'
      + '<input class="cw-cpicker-search" id="cw-cpicker-q" type="text" placeholder="Search…" autocomplete="off" spellcheck="false">'
      + '<div class="cw-cpicker-grid" id="cw-cpicker-items"></div>'
      + '</div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    var grid = document.getElementById('cw-cpicker-items');

    function renderItems(filter) {
      grid.innerHTML = CW_COUNTRY_LIST.filter(function(c) {
        if (!filter) return true;
        return c.name.toLowerCase().indexOf(filter) >= 0 || c.code.toLowerCase().indexOf(filter) >= 0;
      }).map(function(c) {
        return '<button class="cw-cpicker-item' + (c.code === saved ? ' selected' : '') + '" data-code="' + c.code + '">'
          + '<span class="cw-cpicker-flag">' + c.flag + '</span>' + c.name + '</button>';
      }).join('');
      grid.querySelectorAll('.cw-cpicker-item').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var code = btn.dataset.code;
          cwSetCountry(code);
          cwCountryBtn.textContent = CW_FLAG_MAP[code] || '🌍';
          document.body.removeChild(overlay);
          document.body.style.overflow = '';
          /* Auto-switch language when country implies a different language */
          var targetLang = cwGetLangForCountry(code);
          if (targetLang !== CW_LANG) {
            window.location.href = cwLangUrl(targetLang);
            return;
          }
          cwRebuildGrids();
        });
      });
    }

    renderItems('');
    var searchEl = document.getElementById('cw-cpicker-q');
    if (searchEl) {
      searchEl.addEventListener('input', function() { renderItems(this.value.toLowerCase()); });
      setTimeout(function() { searchEl.focus(); }, 80);
    }
    overlay.querySelector('.cw-cpicker-close').addEventListener('click', function() {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
    });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) { document.body.removeChild(overlay); document.body.style.overflow = ''; }
    });
  }

  cwCountryBtn.addEventListener('click', openCountryPicker);

  /* ── GRID BUILDER (shared by category pages + homepage) ─── */
  function cwBuildGrid(items, country) {
    country = country || 'global'; // null means first visit → show all
    var filtered = items.filter(function(item) {
      if (!item.countries || item.countries.length === 0) return true; // no filter = global
      if (country === 'global') return true;
      return item.countries.indexOf('global') !== -1 || item.countries.indexOf(country) !== -1;
    });
    if (filtered.length === 0) {
      return '<div style="padding:32px;text-align:center;color:var(--ink-3,#858AA0);font-size:14px;">No calculators available for this country yet. <button onclick="cwSetCountry(\'global\');cwRebuildGrids();" style="background:none;border:none;cursor:pointer;color:#4F6BFF;font-size:14px;font-family:inherit;text-decoration:underline;">Show all</button></div>';
    }
    var html = '<div class="grid">';
    filtered.forEach(function(item) {
      var badge = item.badge ? '<span class="badge-new">new</span>' : '';
      var desc = item.hd || item.d;
      html += '<a class="calc-card" href="' + item.u + '">'
            + '<div class="calc-icon">' + (item.icon || '🔢') + '</div>'
            + '<div class="calc-info">'
            + '<div class="calc-name">' + item.n + badge + '</div>'
            + '<div class="calc-desc">' + desc + '</div>'
            + '</div></a>';
    });
    html += '</div>';
    return html;
  }

  function cwRebuildGrids() {
    var country = cwGetCountry();
    /* Category page grids */
    var catRoot = document.getElementById('cat-grid-root');
    if (catRoot && catRoot._cwCat) {
      catRoot.innerHTML = cwBuildGrid(catRoot._cwCat.items, country);
    }
    /* Homepage grids — expose a hook that index.html can call */
    if (typeof window.__cwRebuildHome === 'function') window.__cwRebuildHome(country);
  }

  /* ── PANEL ──────────────────────────────────────────────── */
  var cur = window.location.pathname.replace(/\/$/, '') || '/';

  function buildList() {
    var html = '';
    CALCS.forEach(function (cat) {
      var catPath = '/' + cat.slug + '/';
      var catActive = (cur === '/' + cat.slug || cur === '/' + cat.slug + '/') ? ' nv-cat-active' : '';
      html += '<div class="nvc">';
      html += '<a class="nvc-title-link' + catActive + '" href="' + catPath + '">' + cat.label + '</a>';
      cat.items.forEach(function (item) {
        var slug = item.u.replace(/\/$/, '');
        var active = (cur === slug || cur === item.u) ? ' nv-active' : '';
        var search = (item.n + ' ' + item.d).toLowerCase();
        html += '<a class="nv-item' + active + '" href="' + item.u + '" data-s="' + search + '">'
          + '<span class="nv-item-n">' + item.n + '</span>'
          + '<span class="nv-item-d">' + item.d + '</span>'
          + '</a>';
      });
      html += '</div>';
    });
    html += '<div id="nav-empty">No results found</div>';
    return html;
  }

  var bd = document.createElement('div');
  bd.id = 'nav-bd';

  var panel = document.createElement('div');
  panel.id = 'nav-panel';
  panel.innerHTML =
    '<div id="nav-ph">'
    + '<a class="nv-logo" href="/">calculate<span>.website</span></a>'
    + '<button id="nav-x" aria-label="Close">✕</button>'
    + '</div>'
    + '<div id="nav-sw">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">'
    + '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    + '<input id="nav-si" type="text" placeholder="Search calculators…" autocomplete="off" spellcheck="false">'
    + '</div>'
    + '<div id="nav-list">' + buildList() + '</div>';

  document.body.appendChild(bd);
  document.body.appendChild(panel);

  /* ── OPEN / CLOSE ───────────────────────────────────────── */
  function openPanel() {
    panel.classList.add('nv-open');
    bd.classList.add('nv-open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var si = document.getElementById('nav-si');
      if (si) si.focus();
    }, 220);
  }

  function closePanel() {
    panel.classList.remove('nv-open');
    bd.classList.remove('nv-open');
    document.body.style.overflow = '';
    var si = document.getElementById('nav-si');
    if (si) { si.value = ''; filterNav(''); }
  }

  btn.addEventListener('click', openPanel);
  bd.addEventListener('click', closePanel);
  document.getElementById('nav-x').addEventListener('click', closePanel);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePanel(); });

  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setTimeout(closePanel, 80); });
  });

  /* ── SEARCH ─────────────────────────────────────────────── */
  function filterNav(q) {
    var any = false;
    panel.querySelectorAll('.nvc').forEach(function (cat) {
      var catAny = false;
      cat.querySelectorAll('.nv-item').forEach(function (item) {
        var show = !q || item.dataset.s.includes(q);
        item.style.display = show ? '' : 'none';
        if (show) catAny = true;
      });
      cat.style.display = catAny ? '' : 'none';
      if (catAny) any = true;
    });
    var em = document.getElementById('nav-empty');
    if (em) em.style.display = (!q || any) ? 'none' : 'block';
  }

  document.getElementById('nav-si').addEventListener('input', function () {
    filterNav(this.value.toLowerCase().trim());
  });

  /* ── NUMBER FORMATTING (en-US: commas as thousands, period as decimal) ──── */
  (function () {
    var _proto = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

    /* "100000.5" → "100,000.5" */
    function toDisplay(raw) {
      var parts = String(raw).split('.');
      var intFmt = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.length > 1 ? intFmt + '.' + parts[1] : intFmt;
    }

    /* "100,000.5" → "100000.5" (JS decimal) */
    function toRaw(display) {
      return display.replace(/,/g, '');
    }

    function initFmt(inp) {
      var skip = ['hidden','range','checkbox','radio','file','submit','button','reset','image','color','date','month','week','time','datetime-local'];
      if (inp.dataset.nfDone || skip.indexOf(inp.type) !== -1) return;
      inp.dataset.nfDone = '1';

      inp.type = 'text';
      if (!inp.getAttribute('inputmode')) inp.setAttribute('inputmode', 'decimal');

      Object.defineProperty(inp, 'value', {
        get: function() {
          return toRaw(_proto.get.call(inp));
        },
        set: function(v) {
          var s = (v === null || v === undefined) ? '' : String(v);
          var n = parseFloat(toRaw(s));
          if (s === '' || s === '-') {
            _proto.set.call(inp, s);
          } else if (!isNaN(n)) {
            _proto.set.call(inp, toDisplay(s.replace(/,/g, '')));
          } else {
            _proto.set.call(inp, s);
          }
        },
        configurable: true
      });

      var initRaw = toRaw(_proto.get.call(inp));
      var initN = parseFloat(initRaw);
      if (!isNaN(initN) && initRaw !== '') {
        _proto.set.call(inp, toDisplay(initRaw));
      }

      inp.addEventListener('input', function() {
        var cur = _proto.get.call(inp);
        var pos = inp.selectionStart || 0;

        var digBefore = cur.substring(0, pos).replace(/[^\d]/g, '').length;

        /* Allow commas only after integer part */
        var cleaned = cur.replace(/[^\d.]/g, '');
        var parts   = cleaned.split('.');
        var intPart = parts[0].substring(0, 15);
        var decPart = parts.length > 1 ? '.' + parts[1].substring(0, 6) : '';
        var fmt     = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decPart;

        _proto.set.call(inp, fmt);

        var newPos = fmt.length, dCnt = 0;
        for (var i = 0; i < fmt.length; i++) {
          if (/\d/.test(fmt[i])) {
            dCnt++;
            if (dCnt === digBefore) { newPos = i + 1; break; }
          }
        }
        try { inp.setSelectionRange(newPos, newPos); } catch (e) {}
      });
    }

    document.querySelectorAll('input[type="number"]').forEach(initFmt);
  })();

  /* ── SCHEMA JSON-LD (SEO) ───────────────────────────────── */
  function pageHasSchema(type) {
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    for(var i = 0; i < scripts.length; i++) {
      try {
        var d = JSON.parse(scripts[i].textContent);
        if(d['@type'] === type) return true;
        if(d['@graph']) {
          for(var j = 0; j < d['@graph'].length; j++) {
            if(d['@graph'][j]['@type'] === type) return true;
          }
        }
      } catch(e) {}
    }
    return false;
  }

  (function(){
    var path = window.location.pathname.replace(/\/$/, '') || '/';

    if(path === '/'){
      return; // homepage has its own schema
    }

    var found = null, foundCat = '', foundCatSlug = '', foundCatLabel = '';
    CALCS.forEach(function(cat){
      cat.items.forEach(function(item){
        if(item.u.replace(/\/$/, '') === path) {
          found = item;
          foundCat = cat.cat;
          foundCatSlug = cat.slug;
          foundCatLabel = cat.label;
        }
      });
    });
    if(!found) return;
    if(pageHasSchema('WebApplication')) return;

    var appCat = 'UtilitiesApplication';
    if(foundCat.indexOf('Finance') !== -1)  appCat = 'FinanceApplication';
    if(foundCat.indexOf('Health') !== -1)   appCat = 'HealthApplication';

    var schema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': found.n,
      'url': 'https://calculate.website' + found.u,
      'description': found.hd || found.d,
      'applicationCategory': appCat,
      'operatingSystem': 'All',
      'isAccessibleForFree': true,
      'inLanguage': 'en',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'calculate.website',
        'url': 'https://calculate.website/'
      }
    };

    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify(schema);
    document.head.appendChild(sc);

    var bc = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'calculate.website', 'item': 'https://calculate.website/' },
        { '@type': 'ListItem', 'position': 2, 'name': foundCatLabel, 'item': 'https://calculate.website/' + foundCatSlug + '/' },
        { '@type': 'ListItem', 'position': 3, 'name': found.n, 'item': 'https://calculate.website' + found.u }
      ]
    };
    var bc_sc = document.createElement('script');
    bc_sc.type = 'application/ld+json';
    bc_sc.textContent = JSON.stringify(bc);
    document.head.appendChild(bc_sc);
  })();

  /* ── FOOTER ─────────────────────────────────────────────── */
  (function(){
    var sfLinks = '<div class="sf-links">'
      + '<a href="/all/">All calculators</a>'
      + '<span class="sf-sep">·</span>'
      + '<a href="/about/">About</a>'
      + '<span class="sf-sep">·</span>'
      + '<a href="/privacy/">Privacy</a>'
      + '<span class="sf-sep">·</span>'
      + '<a href="/terms/">Terms</a>'
      + '</div>';
    var sfInner = '<div class="sf-inner">'
      + '<a href="/" class="sf-logo">calculate<span class="sf-live">.website</span></a>'
      + sfLinks
      + '<span class="sf-copy">© 2026 calculate.website</span>'
      + '</div>';
    var footerHTML = '<footer class="site-footer">' + sfInner + '</footer>';
    var existing = document.querySelector('footer');
    if (existing) {
      existing.className = 'site-footer';
      existing.innerHTML = sfInner;
      document.body.appendChild(existing);
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  })();

  /* ── RELATED CALCULATORS ─────────────────────────────────── */
  (function(){
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    /* Strip language prefix so we can match against EN URLs in CALCS */
    var enPath = path.replace(/^\/(es|pt|fr)(\/|$)/, '/').replace(/\/$/, '') || '/';
    var langPrefix = CW_LANG !== 'en' ? '/' + CW_LANG : '';
    var nameKey = CW_LANG !== 'en' ? 'n_' + CW_LANG : 'n';

    var curCat = null;
    CALCS.forEach(function(cat){
      cat.items.forEach(function(item){
        if(item.u.replace(/\/$/, '') === enPath) curCat = cat;
      });
    });
    if(!curCat || curCat.items.length < 2) return;

    var others = curCat.items.filter(function(i){ return i.u.replace(/\/$/, '') !== enPath; });
    others = others.slice().sort(function(){ return Math.random() - 0.5; }).slice(0, 3);

    var headings = {en:'Related calculators', es:'Calculadoras relacionadas', pt:'Calculadoras relacionadas', fr:'Calculateurs associés'};
    var heading = headings[CW_LANG] || headings.en;

    var html = '<div class="related-section"><div class="related-heading">' + heading + '</div>'
             + '<div class="related-grid">';
    others.forEach(function(item){
      var name = item[nameKey] || item.n;
      var url  = langPrefix + item.u;
      html += '<a class="related-card" href="' + url + '">'
            + '<span class="related-icon">' + (item.icon || '🔢') + '</span>'
            + '<span class="related-name">' + name + '</span>'
            + '</a>';
    });
    html += '</div></div>';

    var footerEl = document.querySelector('footer');
    if(footerEl){ footerEl.insertAdjacentHTML('beforebegin', html); }
    else { document.body.insertAdjacentHTML('beforeend', html); }
  })();

  /* ── FAQ INJECTION ───────────────────────────────────────── */
  (function(){
    if(document.querySelector('.faq-section')) return;
    if(pageHasSchema('FAQPage')) return;
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var faqs = FAQS[path];
    if(!faqs || !faqs.length) return;

    var schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(function(f){
        return {
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
        };
      })
    };
    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify(schema);
    document.head.appendChild(sc);

    var html = '<div class="faq-section"><div class="faq-heading">Frequently asked questions</div>';
    faqs.forEach(function(f){
      if(!f.q || !f.a) return;
      html += '<details class="faq-item" open><summary>' + f.q + '</summary>'
            + '<div class="faq-a">' + f.a + '</div></details>';
    });
    html += '</div>';

    var footer = document.querySelector('footer');
    if(footer) {
      footer.insertAdjacentHTML('beforebegin', html);
    } else {
      document.body.insertAdjacentHTML('beforeend', html);
    }
  })();

  /* ── CATEGORY PAGES ──────────────────────────────────────── */
  (function(){
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    /* Strip language prefix so /es/health matches slug 'health' */
    var strippedPath = path.replace(/^\/(es|pt|fr)/, '');
    var catMatch = null;
    CALCS.forEach(function(cat){
      if('/' + cat.slug === strippedPath || '/' + cat.slug === path) catMatch = cat;
    });
    if(!catMatch) return;
    var root = document.getElementById('cat-grid-root');
    if(!root) return;
    root._cwCat = catMatch; /* store ref for country filter rebuild */
    root.innerHTML = cwBuildGrid(catMatch.items, cwGetCountry());
  })();

  /* ── EXPOSE CALCS ────────────────────────────────────────── */
  window.__CALCS = CALCS;

  /* ── DISABLE SCROLL/ARROWS ON NUMBER INPUTS ──────────────── */
  document.addEventListener('wheel', function(e) {
    if (e.target && e.target.type === 'number') {
      e.preventDefault();
    }
  }, { passive: false, capture: true });

  document.addEventListener('keydown', function(e) {
    if (e.target && e.target.type === 'number' &&
        (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
    }
  });

  /* ── FAVORITES ─────────────────────────────────────────────────────────── */
  var FAV_KEY = 'calc_favorites';
  function cwGetFavs(){try{return JSON.parse(localStorage.getItem(FAV_KEY)||'[]');}catch(e){return[];}}
  function cwSetFavs(f){try{localStorage.setItem(FAV_KEY,JSON.stringify(f));}catch(e){}}
  /* Strip /es/, /pt/, /fr/ prefix and leading/trailing slashes → slug */
  function cwNormSlug(u){return(u||'').replace(/^\/(es|pt|fr)\//,'/').replace(/^\//,'').replace(/\/$/,'');}
  function cwIsFav(slug){return cwGetFavs().indexOf(slug)>=0;}
  function cwUpdateFavBadge(){
    var n=cwGetFavs().length;
    document.querySelectorAll('.fav-badge').forEach(function(b){
      b.textContent=n;b.style.display=n>0?'inline-flex':'none';
    });
    document.querySelectorAll('.fav-hdr-btn').forEach(function(b){
      b.classList.toggle('has-favs',n>0);
    });
  }
  function cwToggleFav(slug){
    var f=cwGetFavs(),i=f.indexOf(slug);
    if(i>=0)f.splice(i,1);else f.push(slug);
    cwSetFavs(f);
    var active=i<0;
    cwUpdateFavBadge();
    /* Sync all buttons on the page that share this slug */
    document.querySelectorAll('[data-fav-slug="'+slug+'"]').forEach(function(b){
      b.classList.toggle('active',active);
      var star=b.querySelector('.fav-star');
      if(star)star.textContent=active?'★':'☆';
      else if(b.classList.contains('fav-btn'))b.textContent=active?'★':'☆';
      var txt=b.querySelector('.fav-save-txt');
      if(txt){
        var lang=(document.documentElement.lang||'en').substring(0,2);
        var s={es:['Guardar','Guardado'],pt:['Salvar','Salvo'],fr:['Sauvegarder','Sauvegardé'],en:['Save','Saved']};
        var pair=s[lang]||s.en;
        txt.textContent=active?pair[1]:pair[0];
      }
    });
    return active;
  }
  /* Expose globally for favorites page and individual calc pages */
  window.cwGetFavs=cwGetFavs;
  window.cwSetFavs=cwSetFavs;
  window.cwToggleFav=cwToggleFav;
  window.cwIsFav=cwIsFav;
  window.cwUpdateFavBadge=cwUpdateFavBadge;
  window.cwNormSlug=cwNormSlug;

  /* ── SHARE helpers ─────────────────────────────────────────────────────── */
  window.shareCalc = function() {
    var url = window.location.href.split('?')[0];
    var title = document.title;
    if (navigator.share) {
      navigator.share({ title: title, url: url }).catch(function(){});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function() {
        var btns = document.querySelectorAll('.share-btn');
        btns.forEach(function(btn) {
          var orig = btn.innerHTML;
          btn.classList.add('nv-copied');
          btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
          setTimeout(function() { btn.classList.remove('nv-copied'); btn.innerHTML = orig; }, 2000);
        });
      });
    }
  };
  window.compartir = window.shareCalc;

  /* Embed modal */
  window.showEmbedModal = function() {
    var existing = document.querySelector('.embed-ov');
    if (existing) { existing.remove(); return; }
    var url = window.location.href.split('?')[0];
    var code = '<iframe src="' + url + '" width="380" height="600" frameborder="0" style="border-radius:16px;overflow:hidden" allowtransparency="true"></iframe>';
    var _lang = (document.documentElement.lang||'en').substring(0,2);
    var _ttl  = {es:'Insertar esta calculadora',pt:'Incorporar esta calculadora',fr:'Intégrer cette calculatrice',en:'Embed this calculator'};
    var _sub  = {es:'Pega este código en cualquier sitio web:',pt:'Cole este código em qualquer site:',fr:'Collez ce code sur n\'importe quel site :',en:'Paste this code on any website:'};
    var _cpy  = {es:'Copiar código',pt:'Copiar código',fr:'Copier le code',en:'Copy code'};
    var svgCpyIco = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
    var svgChk = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>';
    var ov = document.createElement('div');
    ov.className = 'embed-ov';
    ov.onclick = function(e){ if(e.target===ov) ov.remove(); };
    var modal = document.createElement('div');
    modal.className = 'embed-modal';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'embed-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function(){ ov.remove(); };
    var ttl = document.createElement('div'); ttl.className='embed-modal-ttl'; ttl.textContent=_ttl[_lang]||_ttl.en;
    var sub = document.createElement('div'); sub.className='embed-modal-sub'; sub.textContent=_sub[_lang]||_sub.en;
    var codeEl = document.createElement('div'); codeEl.className='embed-code'; codeEl.textContent=code;
    var cpyBtn = document.createElement('button'); cpyBtn.className='embed-copy-btn';
    cpyBtn.innerHTML = svgCpyIco + ' ' + (_cpy[_lang]||_cpy.en);
    cpyBtn.onclick = function(){
      if(navigator.clipboard){
        navigator.clipboard.writeText(code).then(function(){
          var orig=cpyBtn.innerHTML;
          cpyBtn.innerHTML=svgChk+' Copied!';
          setTimeout(function(){cpyBtn.innerHTML=orig;},2000);
        });
      }
    };
    modal.appendChild(closeBtn);
    modal.appendChild(ttl);
    modal.appendChild(sub);
    modal.appendChild(codeEl);
    modal.appendChild(cpyBtn);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    function onEsc(e){if(e.key==='Escape'){ov.remove();document.removeEventListener('keydown',onEsc);}}
    document.addEventListener('keydown',onEsc);
  };

  /* ── AUTO-INJECT SHARE PANEL ────────────────────────────────────────────── */
  (function() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var skipPaths = ['/', '/health', '/finance', '/math', '/dates', '/games', '/world-cup',
                     '/about', '/privacy', '/terms', '/favorites', '/all',
                     '/es','/pt','/fr',
                     '/es/health','/es/finance','/es/math','/es/dates','/es/games',
                     '/pt/health','/pt/finance','/pt/math','/pt/dates','/pt/games',
                     '/fr/health','/fr/finance','/fr/math','/fr/dates','/fr/games',
                     '/es/about','/es/privacy','/es/terms','/es/favorites',
                     '/pt/about','/pt/privacy','/pt/terms','/pt/favorites',
                     '/fr/about','/fr/privacy','/fr/terms','/fr/favorites'];
    if (skipPaths.indexOf(path) !== -1) return;

    var _lang = (document.documentElement.lang||'en').substring(0,2);
    var pageSlug = cwNormSlug(path);
    var isKnownCalc = pageSlug && window.__CALCS && window.__CALCS.some(function(cat){
      return cat.items.some(function(it){ return it.u === '/' + pageSlug + '/'; });
    });

    /* SVG icons */
    var iStar  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>';
    var iCopy  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
    var iShare = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
    var iWA    = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.91-2.19-.24-.57-.48-.5-.67-.5-.17 0-.37-.03-.57-.03s-.52.07-.79.38c-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.17 5.04 4.44.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.34z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.11-1.34C8.55 21.54 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.7 0-3.29-.44-4.67-1.21l-.33-.2-3.03.8.81-2.96-.22-.36C3.49 14.96 3 13.54 3 12 3 7.03 7.03 3 12 3s9 4.03 9 9-4.03 9-9 9z"/></svg>';
    var iX     = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.257 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
    var iEmbed = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="flex-shrink:0"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
    var iCheck = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>';

    /* Localised labels */
    var _saveL  = {es:['Guardar','Guardado'],pt:['Salvar','Salvo'],fr:['Sauvegarder','Sauvegardé'],en:['Save','Saved']};
    var _copyL  = {es:'Copiar enlace',pt:'Copiar link',fr:'Copier le lien',en:'Copy link'};
    var _shareL = {es:'Compartir',pt:'Compartilhar',fr:'Partager',en:'Share'};
    var _embedL = {es:'Insertar',pt:'Incorporar',fr:'Intégrer',en:'Embed'};
    var _pair   = _saveL[_lang] || _saveL.en;

    var wrap = document.createElement('div');
    wrap.className = 'share-wrap';
    var row = document.createElement('div');
    row.className = 'share-row';

    /* 1 — Save (favorites) */
    if (isKnownCalc) {
      var isFavNow = cwIsFav(pageSlug);
      var favSaveBtn = document.createElement('button');
      favSaveBtn.className = 'sp-btn fav-save-btn' + (isFavNow ? ' active' : '');
      favSaveBtn.setAttribute('data-fav-slug', pageSlug);
      favSaveBtn.innerHTML = '<span class="fav-star">' + (isFavNow?'★':'☆') + '</span>'
        + '<span class="fav-save-txt">' + (isFavNow?_pair[1]:_pair[0]) + '</span>';
      favSaveBtn.onclick = function(){ cwToggleFav(pageSlug); };
      row.appendChild(favSaveBtn);
    }

    /* 2 — Copy link */
    var copyBtn = document.createElement('button');
    copyBtn.className = 'sp-btn';
    copyBtn.innerHTML = iCopy + ' ' + (_copyL[_lang]||_copyL.en);
    copyBtn.onclick = function(){
      var url = window.location.href.split('?')[0];
      if(navigator.clipboard){
        navigator.clipboard.writeText(url).then(function(){
          var orig=copyBtn.innerHTML;
          copyBtn.classList.add('sp-copied');
          copyBtn.innerHTML=iCheck+' Copied!';
          setTimeout(function(){copyBtn.classList.remove('sp-copied');copyBtn.innerHTML=orig;},2000);
        });
      }
    };
    row.appendChild(copyBtn);

    /* 3 — Share (native) */
    if (navigator.share || true) { /* always show, fallback to copy */
      var shareBtn = document.createElement('button');
      shareBtn.className = 'sp-btn share-btn';
      shareBtn.innerHTML = iShare + ' ' + (_shareL[_lang]||_shareL.en);
      shareBtn.onclick = function(){
        var url=window.location.href.split('?')[0];
        if(navigator.share){
          navigator.share({title:document.title,url:url}).catch(function(){});
        } else if(navigator.clipboard){
          navigator.clipboard.writeText(url).then(function(){
            var orig=shareBtn.innerHTML;
            shareBtn.classList.add('sp-copied');
            shareBtn.innerHTML=iCheck+' Copied!';
            setTimeout(function(){shareBtn.classList.remove('sp-copied');shareBtn.innerHTML=orig;},2000);
          });
        }
      };
      row.appendChild(shareBtn);
    }

    /* 4 — WhatsApp */
    var waBtn = document.createElement('button');
    waBtn.className = 'sp-btn';
    waBtn.innerHTML = iWA + ' WhatsApp';
    waBtn.onclick = function(){
      var url=encodeURIComponent(window.location.href.split('?')[0]);
      var txt=encodeURIComponent(document.title);
      window.open('https://wa.me/?text='+txt+'%20'+url,'_blank','noopener');
    };
    row.appendChild(waBtn);

    /* 5 — X */
    var xBtn = document.createElement('button');
    xBtn.className = 'sp-btn';
    xBtn.innerHTML = iX + ' X';
    xBtn.onclick = function(){
      var url=encodeURIComponent(window.location.href.split('?')[0]);
      var txt=encodeURIComponent(document.title);
      window.open('https://x.com/intent/tweet?url='+url+'&text='+txt,'_blank','noopener');
    };
    row.appendChild(xBtn);

    /* 6 — Embed */
    var embedBtn = document.createElement('button');
    embedBtn.className = 'sp-btn';
    embedBtn.innerHTML = iEmbed + ' ' + (_embedL[_lang]||_embedL.en);
    embedBtn.onclick = function(){ window.showEmbedModal(); };
    row.appendChild(embedBtn);

    wrap.appendChild(row);

    var related = document.querySelector('.related-section');
    var footer = document.querySelector('footer');
    if (related) {
      related.parentNode.insertBefore(wrap, related);
    } else if (footer) {
      footer.parentNode.insertBefore(wrap, footer);
    } else {
      document.body.appendChild(wrap);
    }
  })();

  /* ── FAVORITES: CARD STARS ──────────────────────────────────────────────── */
  /* Inject a ☆ star into every .card[href] on the page (home + category pages).
     Visible on hover; stays visible (★ yellow) when marked as favorite.        */
  (function(){
    function initFavStars(){
      document.querySelectorAll('a.card[href]').forEach(function(card){
        if(card.querySelector('.fav-btn')) return; // already done
        var slug = cwNormSlug(card.getAttribute('href'));
        if(!slug) return;
        // Ensure card has relative positioning for absolute star
        var cs = window.getComputedStyle(card).position;
        if(cs === 'static') card.style.position = 'relative';
        var active = cwIsFav(slug);
        var btn = document.createElement('button');
        btn.className = 'fav-btn' + (active ? ' active' : '');
        btn.textContent = active ? '★' : '☆';
        btn.title = 'Save to favorites';
        btn.setAttribute('data-fav-slug', slug);
        btn.onclick = function(e){
          e.preventDefault();
          e.stopPropagation();
          cwToggleFav(slug);
        };
        card.appendChild(btn);
      });
      cwUpdateFavBadge();
    }
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', initFavStars);
    } else {
      initFavStars();
    }
    /* Re-run after home grid is rebuilt (country / language change) */
    window.addEventListener('cwGridRebuilt', initFavStars);
    /* Wrap __cwRebuildHome if it exists (homepage) */
    var _orig = window.__cwRebuildHome;
    if(typeof _orig === 'function'){
      window.__cwRebuildHome = function(c){ _orig(c); setTimeout(initFavStars, 30); };
    }
  })();

  /* ── FEEDBACK WIDGET ─────────────────────────────────────── */
  (function () {
    var FORMSPREE_ID = 'xjgzrnvp';
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    var skipPaths = [
      '/', '/health', '/finance', '/math', '/dates', '/games', '/world-cup',
      '/about', '/privacy', '/terms', '/all'
    ];
    if (skipPaths.indexOf(path) !== -1) return;
    if (document.querySelector('.fb-section')) return;

    /* ── i18n strings ── */
    var lang = (window.__LANG || 'en').toLowerCase().substring(0, 2);
    var FB_I18N = {
      en: {
        title: 'How can we improve?',
        sub: 'Leave a quick reaction or write a comment — we read every message.',
        placeholder: 'Tell us more (optional)…',
        send: 'Send feedback',
        thanks: 'Thanks for your feedback! 🙏',
        reactions: [
          { e: '✅', l: 'Works great' },
          { e: '🐛', l: 'Found a bug' },
          { e: '💡', l: 'Suggestion' },
          { e: '🌍', l: "My country isn't supported" },
          { e: '🙋', l: 'Missing a calculator' },
        ]
      },
      es: {
        title: '¿Cómo podemos mejorar?',
        sub: 'Dejá una reacción rápida o escribí un comentario — leemos cada mensaje.',
        placeholder: 'Contanos más (opcional)…',
        send: 'Enviar comentario',
        thanks: '¡Gracias por tu feedback! 🙏',
        reactions: [
          { e: '✅', l: 'Funciona bien' },
          { e: '🐛', l: 'Encontré un error' },
          { e: '💡', l: 'Sugerencia' },
          { e: '🌍', l: 'Mi país no está disponible' },
          { e: '🙋', l: 'Falta una calculadora' },
        ]
      },
      pt: {
        title: 'Como podemos melhorar?',
        sub: 'Deixe uma reação rápida ou escreva um comentário — lemos cada mensagem.',
        placeholder: 'Conte-nos mais (opcional)…',
        send: 'Enviar feedback',
        thanks: 'Obrigado pelo seu feedback! 🙏',
        reactions: [
          { e: '✅', l: 'Funciona bem' },
          { e: '🐛', l: 'Encontrei um erro' },
          { e: '💡', l: 'Sugestão' },
          { e: '🌍', l: 'Meu país não está disponível' },
          { e: '🙋', l: 'Falta uma calculadora' },
        ]
      },
      fr: {
        title: 'Comment pouvons-nous améliorer ?',
        sub: 'Laissez une réaction rapide ou écrivez un commentaire — nous lisons chaque message.',
        placeholder: 'Dites-nous en plus (facultatif)…',
        send: 'Envoyer le commentaire',
        thanks: 'Merci pour votre avis ! 🙏',
        reactions: [
          { e: '✅', l: 'Ça fonctionne bien' },
          { e: '🐛', l: "J'ai trouvé un bug" },
          { e: '💡', l: 'Suggestion' },
          { e: '🌍', l: 'Mon pays n\'est pas disponible' },
          { e: '🙋', l: 'Calculatrice manquante' },
        ]
      }
    };
    var t = FB_I18N[lang] || FB_I18N['en'];

    function inject() {
      if (document.querySelector('.fb-section')) return;

      var s = document.createElement('style');
      s.textContent = [
        '.fb-section{font-family:Inter,sans-serif;max-width:860px;margin:0 auto;padding:0 24px 24px;}',
        '.fb-box{background:var(--surface,#fff);border:1.5px solid var(--line,#E4E7EE);border-radius:16px;padding:22px 24px;}',
        'html[data-theme="dark"] .fb-box{background:#141929 !important;border-color:#1F2438 !important;}',
        '.fb-title{font-size:14px;font-weight:700;color:var(--ink,#0A0E1A);margin-bottom:3px;letter-spacing:-0.01em;}',
        'html[data-theme="dark"] .fb-title{color:#E2E4F0;}',
        '.fb-sub{font-size:13px;color:var(--ink-3,#858AA0);margin-bottom:14px;line-height:1.5;}',
        '.fb-reactions{display:flex;gap:8px;flex-wrap:wrap;}',
        '.fb-r{border:1.5px solid var(--line,#E4E7EE);background:transparent;border-radius:99px;',
        'padding:7px 14px;font-size:13px;font-weight:500;cursor:pointer;',
        'color:var(--ink-2,#363B4F);transition:all .15s;font-family:inherit;line-height:1;}',
        'html[data-theme="dark"] .fb-r{border-color:#1F2438;color:#9BA0B8;}',
        '.fb-r:hover{border-color:rgba(79,107,255,.6);color:#4F6BFF;}',
        '.fb-r.fbactive{border-color:#4F6BFF;background:#EEF1FF;color:#4F6BFF;font-weight:600;}',
        'html[data-theme="dark"] .fb-r.fbactive{background:rgba(79,107,255,.15);}',
        '.fb-ta-wrap{margin-top:12px;}',
        '.fb-ta{width:100%;padding:11px 14px;border:1.5px solid var(--line,#E4E7EE);',
        'border-radius:10px;font-family:inherit;font-size:14px;color:var(--ink,#0A0E1A);',
        'background:var(--surface,#fff);resize:vertical;min-height:76px;outline:none;',
        'transition:border-color .15s;box-sizing:border-box;}',
        'html[data-theme="dark"] .fb-ta{background:#141929 !important;border-color:#1F2438 !important;color:#E2E4F0 !important;}',
        '.fb-ta:focus{border-color:#4F6BFF;}',
        '.fb-send{margin-top:10px;padding:9px 20px;background:#4F6BFF;color:#fff;border:none;',
        'border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:background .15s;}',
        '.fb-send:hover{background:#3d5ae8;}',
        '.fb-thanks{font-size:13px;color:#16a34a;font-weight:600;margin-top:10px;display:none;}',
      ].join('');
      document.head.appendChild(s);

      var html = '<div class="fb-section"><div class="fb-box">'
        + '<div class="fb-title">' + t.title + '</div>'
        + '<div class="fb-sub">' + t.sub + '</div>'
        + '<div class="fb-reactions" id="fb-reactions">';
      t.reactions.forEach(function(r, i) {
        html += '<button class="fb-r" data-i="' + i + '" onclick="fbReact(this)">' + r.e + ' ' + r.l + '</button>';
      });
      html += '</div>'
        + '<form id="fb-form" style="display:none" onsubmit="fbSend(event)">'
        + '<div class="fb-ta-wrap"><textarea class="fb-ta" id="fb-ta" placeholder="' + t.placeholder + '"></textarea></div>'
        + '<button type="submit" class="fb-send">' + t.send + '</button>'
        + '</form>'
        + '<div class="fb-thanks" id="fb-thanks">' + t.thanks + '</div>'
        + '</div></div>';

      var footer = document.querySelector('footer');
      if (footer) { footer.insertAdjacentHTML('beforebegin', html); }
      else { document.body.insertAdjacentHTML('beforeend', html); }

      window._fbReactions = t.reactions;
      window._fbSelected = null;

      window.fbReact = function(btn) {
        document.querySelectorAll('.fb-r').forEach(function(b){ b.classList.remove('fbactive'); });
        btn.classList.add('fbactive');
        window._fbSelected = parseInt(btn.dataset.i);
        document.getElementById('fb-form').style.display = 'block';
      };

      window.fbSend = function(e) {
        e.preventDefault();
        var r = window._fbReactions[window._fbSelected];
        var msg = document.getElementById('fb-ta').value.trim();
        var page = window.location.pathname;
        fetch('https://formspree.io/f/' + FORMSPREE_ID, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ reaction: r ? r.e + ' ' + r.l : '?', message: msg || '(none)', page: page, lang: lang })
        }).catch(function(){});
        document.getElementById('fb-form').style.display = 'none';
        document.getElementById('fb-reactions').style.display = 'none';
        document.getElementById('fb-thanks').style.display = 'block';
      };
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', inject);
    } else {
      inject();
    }
  })();

  /* ── FAVORITES: INITIAL BADGE UPDATE ───────────────────────────────────── */
  /* Run after DOM is ready so the header badge reflects localStorage count.  */
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', cwUpdateFavBadge);
  } else {
    cwUpdateFavBadge();
  }

})();
