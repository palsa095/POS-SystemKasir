import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kasir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.css']
})
export class KasirComponent implements OnInit {

  currentDate: Date = new Date();
  
  categories = [
    'Semen & Pasir', 'Besi & Baja', 'Pipa & Sanitasi', 'Cat & Kimia',
    'Keramik', 'Kayu & Triplek', 'Alat', 'Elektrikal',
    'Atap & Plafon', 'Pintu & Jendela', 'Sanitasi', 'Finishing'
  ];

  selectedCategory: string | null = null;
  searchQuery: string = '';

  allProducts = [
    { code: 'SM001', name: 'Semen Tiga Roda 50kg', category: 'Semen & Pasir', price: 62000, unit: 'sak', stock: 240 },
    { code: 'SM002', name: 'Semen Gresik 50kg', category: 'Semen & Pasir', price: 63500, unit: 'sak', stock: 185 },
    { code: 'SM003', name: 'Semen Holcim 40kg', category: 'Semen & Pasir', price: 52000, unit: 'sak', stock: 120 },
    { code: 'SM004', name: 'Pasir Beton', category: 'Semen & Pasir', price: 195000, unit: 'm³', stock: 50 },
    { code: 'SM005', name: 'Pasir Halus / Cor', category: 'Semen & Pasir', price: 175000, unit: 'm³', stock: 42 },
    { code: 'SM006', name: 'Batu Split 2/3', category: 'Semen & Pasir', price: 210000, unit: 'm³', stock: 30 },
    { code: 'SM007', name: 'Bata Merah Standar', category: 'Semen & Pasir', price: 850, unit: 'pcs', stock: 5000 },
    { code: 'SM008', name: 'Bata Ringan Hebel 10cm', category: 'Semen & Pasir', price: 9500, unit: 'pcs', stock: 800 },
    { code: 'SM009', name: 'Mortar MU-301 40kg', category: 'Semen & Pasir', price: 78000, unit: 'sak', stock: 90 },

    { code: 'BS001', name: 'Besi Beton Ø8mm SNI', category: 'Besi & Baja', price: 52000, unit: 'batang', stock: 320 },
    { code: 'BS002', name: 'Besi Beton Ø10mm SNI', category: 'Besi & Baja', price: 78000, unit: 'batang', stock: 280 },
    { code: 'BS003', name: 'Besi Beton Ø12mm SNI', category: 'Besi & Baja', price: 112000, unit: 'batang', stock: 210 },
    { code: 'BS004', name: 'Besi Beton Ø16mm SNI', category: 'Besi & Baja', price: 195000, unit: 'batang', stock: 150 },
    { code: 'BS005', name: 'Wiremesh M6 2.1×5.4m', category: 'Besi & Baja', price: 385000, unit: 'lembar', stock: 75 },
    { code: 'BS006', name: 'Wiremesh M8 2.1×5.4m', category: 'Besi & Baja', price: 520000, unit: 'lembar', stock: 50 },
    { code: 'BS007', name: 'Hollow 4×4cm Galvanis', category: 'Besi & Baja', price: 47000, unit: 'batang', stock: 150 },
    { code: 'BS008', name: 'Besi Siku 40×40mm', category: 'Besi & Baja', price: 68000, unit: 'batang', stock: 90 },
    { code: 'BS009', name: 'Pipa Besi Medium ½"', category: 'Besi & Baja', price: 38000, unit: 'batang', stock: 110 },

    { code: 'PP001', name: 'Pipa PVC ½" Rucika 4m', category: 'Pipa & Sanitasi', price: 24000, unit: 'batang', stock: 200 },
    { code: 'PP002', name: 'Pipa PVC ¾" Rucika 4m', category: 'Pipa & Sanitasi', price: 36000, unit: 'batang', stock: 175 },
    { code: 'PP003', name: 'Pipa PVC 1" Rucika 4m', category: 'Pipa & Sanitasi', price: 52000, unit: 'batang', stock: 120 },
    { code: 'PP004', name: 'Pipa PVC 2" Rucika 4m', category: 'Pipa & Sanitasi', price: 88000, unit: 'batang', stock: 90 },
    { code: 'PP005', name: 'Elbow PVC 90° ½"', category: 'Pipa & Sanitasi', price: 2500, unit: 'pcs', stock: 500 },
    { code: 'PP006', name: 'Elbow PVC 90° 1"', category: 'Pipa & Sanitasi', price: 5000, unit: 'pcs', stock: 300 },
    { code: 'PP007', name: 'Tee PVC ½"', category: 'Pipa & Sanitasi', price: 3000, unit: 'pcs', stock: 400 },

    { code: 'CT001', name: 'Cat Tembok Dulux 5kg', category: 'Cat & Kimia', price: 185000, unit: 'kaleng', stock: 45 },
    { code: 'CT002', name: 'Cat Tembok Avitex 5kg', category: 'Cat & Kimia', price: 125000, unit: 'kaleng', stock: 62 },
    { code: 'CT003', name: 'Cat Besi Glotex 1kg Abu', category: 'Cat & Kimia', price: 52000, unit: 'kaleng', stock: 38 },
    { code: 'CT004', name: 'Tiner A Khusus 1L', category: 'Cat & Kimia', price: 28000, unit: 'liter', stock: 90 },
    { code: 'CT005', name: 'Waterproof No Drop 1kg', category: 'Cat & Kimia', price: 145000, unit: 'kaleng', stock: 30 },
    { code: 'CT006', name: 'Cat Dulux WeatherShield 5kg', category: 'Cat & Kimia', price: 235000, unit: 'kaleng', stock: 28 },

    { code: 'KR001', name: 'Keramik Roman 40×40 Putih', category: 'Keramik', price: 68000, unit: 'm²', stock: 120 },
    { code: 'KR002', name: 'Keramik Roman 60×60 Putih', category: 'Keramik', price: 125000, unit: 'm²', stock: 80 },
    { code: 'KR003', name: 'Granit 60×60 Glossy Cream', category: 'Keramik', price: 185000, unit: 'm²', stock: 55 },
    { code: 'KR004', name: 'Nat Keramik AM 5kg Putih', category: 'Keramik', price: 28000, unit: 'sak', stock: 200 },

    { code: 'KY001', name: 'Triplek 9mm 122×244cm', category: 'Kayu & Triplek', price: 185000, unit: 'lembar', stock: 65 },
    { code: 'KY002', name: 'Triplek 12mm 122×244cm', category: 'Kayu & Triplek', price: 235000, unit: 'lembar', stock: 50 },
    { code: 'KY003', name: 'Triplek 18mm 122×244cm', category: 'Kayu & Triplek', price: 310000, unit: 'lembar', stock: 40 },
    { code: 'KY004', name: 'Kayu Reng 3×4cm Kamper', category: 'Kayu & Triplek', price: 18000, unit: 'batang', stock: 200 },
    { code: 'KY005', name: 'Kayu Usuk 5×7cm Meranti', category: 'Kayu & Triplek', price: 38000, unit: 'batang', stock: 140 },

    { code: 'AL001', name: 'Paku Beton 3cm (1kg)', category: 'Alat', price: 18000, unit: 'kg', stock: 80 },
    { code: 'AL002', name: 'Paku Usuk 5cm (1kg)', category: 'Alat', price: 17000, unit: 'kg', stock: 95 },
    { code: 'AL003', name: 'Paku Triplek 1" (1kg)', category: 'Alat', price: 22000, unit: 'kg', stock: 70 },
    { code: 'AL004', name: 'Sekrup Gypsum 3.5×25', category: 'Alat', price: 12000, unit: 'kotak', stock: 60 },
    { code: 'AL005', name: 'Amplas Lembar #80', category: 'Alat', price: 3500, unit: 'lembar', stock: 300 },

    { code: 'EL001', name: 'Kabel NYM 2×1.5mm 50m', category: 'Elektrikal', price: 285000, unit: 'roll', stock: 25 },
    { code: 'EL002', name: 'Kabel NYM 3×2.5mm 50m', category: 'Elektrikal', price: 485000, unit: 'roll', stock: 18 },
    { code: 'EL003', name: 'Stop Kontak Panasonic', category: 'Elektrikal', price: 22000, unit: 'pcs', stock: 120 },
    { code: 'EL004', name: 'Saklar Tunggal Panasonic', category: 'Elektrikal', price: 18000, unit: 'pcs', stock: 150 },
    { code: 'EL005', name: 'MCB 1 Phase 6A', category: 'Elektrikal', price: 45000, unit: 'pcs', stock: 40 },
    { code: 'EL006', name: 'MCB 1 Phase 10A', category: 'Elektrikal', price: 48000, unit: 'pcs', stock: 38 },

    { code: 'AT001', name: 'Genteng Beton Monier Flat', category: 'Atap & Plafon', price: 4200, unit: 'pcs', stock: 2000 },
    { code: 'AT002', name: 'Atap Spandek 0.3mm', category: 'Atap & Plafon', price: 48000, unit: 'm', stock: 500 },
    { code: 'AT003', name: 'Gypsum 9mm 120×240cm', category: 'Atap & Plafon', price: 75000, unit: 'lembar', stock: 80 },
    { code: 'AT004', name: 'Rangka Hollow Gypsum 2×4', category: 'Atap & Plafon', price: 32000, unit: 'batang', stock: 150 },
    
    // Additional items for Pipa & Sanitasi
    { code: 'PP008', name: 'Keran Air Drat ½"', category: 'Pipa & Sanitasi', price: 35000, unit: 'pcs', stock: 60 },
    { code: 'PP009', name: 'Kloset Duduk TOTO', category: 'Pipa & Sanitasi', price: 1250000, unit: 'pcs', stock: 8 },

    { code: 'PJ001', name: 'Pintu Panel Kayu Meranti', category: 'Pintu & Jendela', price: 1850000, unit: 'pcs', stock: 12 },
    { code: 'PJ002', name: 'Pintu Panel Kayu Kamper', category: 'Pintu & Jendela', price: 1650000, unit: 'pcs', stock: 10 },
    { code: 'PJ003', name: 'Pintu HDF Motif 80×200', category: 'Pintu & Jendela', price: 875000, unit: 'pcs', stock: 18 },
    { code: 'PJ004', name: 'Pintu PVC Kamar Mandi', category: 'Pintu & Jendela', price: 485000, unit: 'pcs', stock: 20 },
    { code: 'PJ005', name: 'Daun Jendela Kayu 60×120', category: 'Pintu & Jendela', price: 385000, unit: 'pcs', stock: 15 },
    { code: 'PJ006', name: 'Kusen Pintu Kayu Kamper', category: 'Pintu & Jendela', price: 650000, unit: 'set', stock: 14 },
    { code: 'PJ007', name: 'Kusen Aluminium 4" Putih', category: 'Pintu & Jendela', price: 85000, unit: 'm', stock: 200 },
    { code: 'PJ008', name: 'Kaca Polos 5mm per m²', category: 'Pintu & Jendela', price: 125000, unit: 'm²', stock: 80 },
    { code: 'PJ009', name: 'Kaca Rayban 5mm per m²', category: 'Pintu & Jendela', price: 185000, unit: 'm²', stock: 40 },

    { code: 'FN001', name: 'Plamir Tembok Vinilex 5kg', category: 'Finishing', price: 185000, unit: 'ember', stock: 30 },
    { code: 'FN002', name: 'Plamir Kayu Impra 400g', category: 'Finishing', price: 32000, unit: 'kaleng', stock: 55 },
    { code: 'FN003', name: 'Dempul Kayu Rajawali 800g', category: 'Finishing', price: 28000, unit: 'kaleng', stock: 60 },
    { code: 'FN004', name: 'Plamur Gypsum Knauf 20kg', category: 'Finishing', price: 145000, unit: 'sak', stock: 25 },
    { code: 'FN005', name: 'Cat Dasar Alkali Dulux 2.5L', category: 'Finishing', price: 145000, unit: 'kaleng', stock: 22 },
    { code: 'FN006', name: 'Sealer Kayu Impra 1L', category: 'Finishing', price: 68000, unit: 'liter', stock: 38 },
    { code: 'FN007', name: 'Politur Kayu Sanding Sealer', category: 'Finishing', price: 75000, unit: 'liter', stock: 30 },
    { code: 'FN008', name: 'Vernis Kayu Ultran Gloss', category: 'Finishing', price: 58000, unit: 'liter', stock: 42 },
    { code: 'FN009', name: 'Amplas Roll #120 (per meter)', category: 'Finishing', price: 8500, unit: 'm', stock: 200 }
  ];

  cartItems: any[] = [];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  selectCategory(category: string) {
    if (this.selectedCategory === category) {
      // Toggle off
      this.selectedCategory = null;
      this.searchQuery = '';
    } else {
      this.selectedCategory = category;
      // Set the search query text to just the first word for aesthetic matching the images
      // (e.g. "Semen & Pasir" -> "Semen", "Besi & Baja" -> "Besi", "Cat & Kimia" -> "Cat")
      this.searchQuery = category.split(' ')[0];
    }
  }

  get filteredProducts() {
    if (this.selectedCategory) {
      return this.allProducts.filter(p => p.category.includes(this.selectedCategory as string));
    }
    // Default to a small list if no category selected
    return this.allProducts.slice(0, 8);
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.code === product.code);
    if (existing) {
      existing.qty++;
    } else {
      this.cartItems.push({ ...product, qty: 1, discount: 0 });
    }
  }

  updateQuantity(index: number, change: number) {
    const item = this.cartItems[index];
    item.qty += change;
    if (item.qty <= 0) {
      this.removeItem(index);
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }

  get totalItems() {
    return this.cartItems.reduce((sum, item) => sum + item.qty, 0);
  }

  get totalTypes() {
    return this.cartItems.length;
  }

  get totalPrice() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  // --- Payment Modal Logic ---
  showPaymentModal = false;
  showReceiptModal = false;
  receiptDate: Date = new Date();
  
  customerName = '';
  paymentMethod = 'Tunai';
  cashReceivedStr = '0';
  
  openPaymentModal() {
    if (this.cartItems.length > 0) {
      this.showPaymentModal = true;
      this.cashReceivedStr = '0';
      this.customerName = '';
      this.paymentMethod = 'Tunai';
    }
  }

  closePaymentModal() {
    this.showPaymentModal = false;
  }

  processPayment() {
    if (this.isPaymentValid) {
      this.receiptDate = new Date();
      this.showPaymentModal = false;
      this.showReceiptModal = true;
    }
  }

  newTransaction() {
    this.showReceiptModal = false;
    this.clearCart();
    this.customerName = '';
    this.cashReceivedStr = '0';
    this.paymentMethod = 'Tunai';
  }

  appendCash(val: string) {
    if (this.cashReceivedStr === '0' && val !== '000') {
      this.cashReceivedStr = val;
    } else if (this.cashReceivedStr !== '0' || val !== '000') {
      this.cashReceivedStr += val;
    }
  }

  backspaceCash() {
    if (this.cashReceivedStr.length > 1) {
      this.cashReceivedStr = this.cashReceivedStr.slice(0, -1);
    } else {
      this.cashReceivedStr = '0';
    }
  }

  setExactCash(amount: number) {
    this.cashReceivedStr = amount.toString();
  }

  get cashReceivedNumber() {
    return parseInt(this.cashReceivedStr, 10) || 0;
  }

  get change() {
    return Math.max(0, this.cashReceivedNumber - this.totalPrice);
  }

  get shortfall() {
    return Math.max(0, this.totalPrice - this.cashReceivedNumber);
  }

  get isPaymentValid() {
    if (this.paymentMethod === 'Tunai') {
      return this.cashReceivedNumber >= this.totalPrice;
    }
    return true; // For Transfer or Bon/Kredit, assume valid immediately or handle differently
  }

  get quickCashOptions() {
    const total = this.totalPrice;
    if (total === 0) return [];
    
    const options = new Set<number>();
    
    let next10k = Math.ceil(total / 10000) * 10000;
    if (next10k === total) next10k += 10000;
    options.add(next10k);
    
    let next50k = Math.ceil(total / 50000) * 50000;
    if (next50k === total) next50k += 50000;
    options.add(next50k);
    
    let next100k = Math.ceil(total / 100000) * 100000;
    if (next100k === total) next100k += 100000;
    options.add(next100k);
    
    let next200k = Math.ceil(total / 200000) * 200000;
    if (options.size < 3) options.add(next200k);
    
    return Array.from(options).sort((a, b) => a - b).slice(0, 3);
  }

}
