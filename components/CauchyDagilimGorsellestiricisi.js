// ... önceki importlar aynı ...

const CauchyDagilimGorsellestiricisi = () => {
  // ... önceki state ve hesaplamalar aynı ...

  return (
    <div className="container mx-auto p-4">
      {/* ... başlık kısmı aynı ... */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* ... slider kartları aynı ... */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Olasılık Yoğunluk Fonksiyonu (PDF)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={pdfVerileri}>
                {/* ... grafik bileşenleri aynı ... */}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kümülatif Dağılım Fonksiyonu (CDF)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cdfVerileri}>
                {/* ... grafik bileşenleri aynı ... */}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Cauchy Dağılımı Hakkında</h3>
        <p className="mb-4">
          Cauchy dağılımı, sürekli olasılık dağılımlarından biridir ve Lorentz dağılımı olarak da bilinir. 
          19. yüzyılda Fransız matematikçi Augustin Louis Cauchy tarafından tanıtılmıştır.
        </p>
        
        <h4 className="text-lg font-semibold mb-2">Matematiksel Özellikler</h4>
        <ul className="list-disc pl-5 mb-4">
          <li>PDF fonksiyonu: f(x) = 1 / (π γ [1 + ((x-x₀)/γ)²])</li>
          <li>CDF fonksiyonu: F(x) = (1/π) arctan((x-x₀)/γ) + 1/2</li>
          <li>x₀: Konum parametresi (medyan)</li>
          <li>γ: Ölçek parametresi (yarı genişlik)</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Temel Özellikler</h4>
        <ul className="list-disc pl-5 mb-4">
          <li>Simetrik bir dağılımdır ve mod, medyan değeri x₀'a eşittir</li>
          <li>Ortalama, varyans ve diğer momentler tanımsızdır</li>
          <li>Kararlı bir dağılımdır: Cauchy dağılımlı rastgele değişkenlerin toplamı yine Cauchy dağılımına sahiptir</li>
          <li>Standart Cauchy dağılımı için x₀=0 ve γ=1 alınır</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Uygulama Alanları</h4>
        <ul className="list-disc pl-5">
          <li>Fiziksel rezonans olaylarının modellenmesi</li>
          <li>Spektroskopi ve optik çalışmaları</li>
          <li>Finansal risk modellemesi</li>
          <li>Sinyal işleme ve gürültü analizi</li>
          <li>Kuantum mekaniği hesaplamaları</li>
        </ul>
      </div>
    </div>
  );
};

export default CauchyDagilimGorsellestiricisi;
