import { Navigate, useLocation } from "react-router-dom"
import { usePhoneNumberQuery } from "./app/services/authApi"

export default function PrivateRoute({ children }) {
    const { data: phoneNumbers, isLoading } = usePhoneNumberQuery()
    const location = useLocation()

    const token = localStorage.getItem("pv_sessionId")
    const verified = localStorage.getItem("pv_verified")
    const userPhone = localStorage.getItem("pv_phone")

    // Ma'lumotlar yuklanayotgan bo'lsa, kutib turamiz (bo'lmasa darrov redirect qilib yuboradi)
    // if (isLoading) return <div>Loading...</div>

    // 1. Avtorizatsiyadan o'tmagan bo'lsa - login/home ga
    if (!token || !verified) {
        return <Navigate to="/" replace />
    }

    const isAdmin = phoneNumbers?.some(
        item => item.phone === userPhone
    )

    // 2. MUHIM: Faqat admin sahifasiga kirmoqchi bo'lgandagina adminlikni tekshiramiz
    if (location.pathname.startsWith("/adm") && !isAdmin) {
        return <Navigate to="/" replace />
    }

    // 3. Admin bo'lsa boshqa sahifalarga (masalan savatchaga) kirishini taqiqlamaymiz!
    // Bu yerdagi (isAdmin && !location.pathname.startsWith("/adm")) sharti o'chirildi.

    return children
}