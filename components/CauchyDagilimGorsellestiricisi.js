import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

// Cauchy dağılımı PDF hesaplaması
const cauchyPDF = (x, konumParametresi, olcekParametresi) => {
  return 1 / (Math.PI * olcekParametresi * (1 + Math.pow((x - konumParametresi) / olcekParametresi, 2)));
};

// Cauchy dağılımı CDF hesaplaması
const cauchyCDF = (x, konumParametresi, olcekParametresi) => {
  return 0.5 + (1 / Math.PI) * Math.atan((x - konumParametresi) / olcekParametresi);
};

const CauchyDagilimGorsellestiricisi = () => {
  const [konumParametresi, setKonumParametresi] = useState(0);
  const [olcekParametresi, setOlcekParametresi] = useState(1);
  const [pdfVerileri, setPDFVerileri] = useState([]);
  const [cdfVerileri, setCDFVerileri] = useState([]);

  useEffect(() => {
    const veriOlustur = () => {
      const veriler = [];
      for (let x = -20; x <= 20; x += 0.2) {
        veriler.push({
          x: Number(x.toFixed(2)),
          pdf: cauchyPDF(x, konumParametresi, olcekParametresi),
          cdf: cauchyCDF(x, konumParametresi, olcekParametresi)
        });
      }
      setPDFVerileri(veriler);
      setCDFVerileri(veriler);
    };

    veriOlustur();
  }, [konumParametresi, olcekParametresi]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
        <h2 className="text-xl font-bold text-blue-800 text-center">
          Sınıf Adı: İST631 - Kuramsal İstatistik Dersi Uygulama Ödevi
        </h2>
        <h3 className="text-lg text-blue-700 text-center mt-2">
          Ara Sınav Ödevi: Cauchy Dağılımı Görselleştiricisi
        </h3>
        <div className="text-center mt-2 text-blue-600">
          <p>Öğretim Üyesi: Doç. Dr. Ayten Yiğiter</p>
          <p>Öğrenci: N23235557 - Mustafa Özaytaç</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Konum Parametresi (x0)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <Label>
                Mevcut Değer: {konumParametresi.toFixed(2)}
              </Label>
              <Slider
                value={[konumParametresi]}
                onValueChange={(value) => setKonumParametresi(value[0])}
                min={-10}
                max={10}
                step={0.1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ölçek Parametresi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <Label>
                Mevcut Değer: {olcekParametresi.toFixed(2)}
              </Label>
              <Slider
                value={[olcekParametresi]}
                onValueChange={(value) => setOlcekParametresi(value[0])}
                min={0.1}
                max={5}
                step={0.1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>
            Olasılık Yoğunluk Fonksiyonu (PDF)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pdfVerileri}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="pdf" 
                stroke="#8884d8" 
                dot={false}
                name="Olasılık Yoğunluğu"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Kümülatif Dağılım Fonksiyonu (CDF)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cdfVerileri}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cdf" 
                stroke="#82ca9d" 
                dot={false}
                name="Kümülatif Olasılık"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Cauchy Dağılımı Hakkında</h3>
        <p>
          Cauchy dağılımı, ağır kuyruklu bir olasılık dağılımıdır. İki parametre ile tanımlanır:
          konum parametresi (x0) ve ölçek parametresi. Bu dağılım, genellikle fizik ve 
          mühendislik alanlarında rezonans olaylarını modellemek için kullanılır.
        </p>
        <p className="mt-4 font-semibold">
          Önemli Özellikler:
        </p>
        <ul className="list-disc pl-5">
          <li>Simetrik bir dağılımdır</li>
          <li>Ortalama ve varyans tanımsızdır</li>
          <li>Ağır kuyruklu bir olasılık dağılımıdır</li>
        </ul>
      </div>
    </div>
  );
};

export default CauchyDagilimGorsellestiricisi;
